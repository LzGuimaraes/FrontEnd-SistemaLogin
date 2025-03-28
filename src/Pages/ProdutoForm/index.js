import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotification } from '../../Context/NotificationContext';
import {
  FormContainer,
  Header,
  MainContent,
  FormTitle,
  FormGroup,
  FormActions,
  ActionButton,
  Footer
} from './style';
import Input from '../../Components/Input';
import EstoqueService from '../../Services/EstoqueServices';
import UserService from '../../Services/UserServices';

const estoqueService = new EstoqueService();
const userService = new UserService();

const ProdutoForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { success, error: showError } = useNotification();
  const [loading, setLoading] = useState(false);
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    categoria: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const isEdicao = id !== undefined && id !== 'novo';

  useEffect(() => {
    if (isEdicao) {
      carregarProduto();
    }
  }, [isEdicao]);

  const carregarProduto = async () => {
    try {
      setLoading(true);
      const data = await estoqueService.obterProduto(id);
      setProduto({
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        quantidade: data.quantidade,
        categoria: data.categoria
      });
      setErrorMessage('');
    } catch (err) {
      console.error('Erro ao carregar produto:', err);
      setErrorMessage('Não foi possível carregar os dados do produto. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage('');

      // Validação básica
      if (!produto.nome || !produto.preco || !produto.quantidade) {
        setErrorMessage('Nome, preço e quantidade são campos obrigatórios.');
        setLoading(false);
        return;
      }

      // Formatar dados
      const produtoFormatado = {
        ...produto,
        preco: parseFloat(produto.preco),
        quantidade: parseInt(produto.quantidade)
      };

      if (isEdicao) {
        await estoqueService.atualizarProduto(id, produtoFormatado);
        success('Produto atualizado com sucesso!');
      } else {
        await estoqueService.adicionarProduto(produtoFormatado);
        success('Produto adicionado com sucesso!');
      }

      navigate('/estoque');
    } catch (err) {
      console.error('Erro ao salvar produto:', err);
      showError('Ocorreu um erro ao salvar o produto. Tente novamente.');
      setErrorMessage('Ocorreu um erro ao salvar o produto. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    userService.logout();
    navigate('/');
  };

  return (
    <FormContainer>
      <Header>
        <h1>Sistema de Estoque</h1>
        <div>
          <ActionButton onClick={() => navigate('/estoque')}>Voltar</ActionButton>
          <ActionButton onClick={handleLogout}>Sair</ActionButton>
        </div>
      </Header>

      <MainContent>
        <FormTitle>
          <h2>{isEdicao ? 'Editar Produto' : 'Adicionar Novo Produto'}</h2>
          <p>{isEdicao ? 'Atualize as informações do produto' : 'Preencha os dados para adicionar um novo produto'}</p>
        </FormTitle>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Nome do Produto</label>
            <Input
              name="nome"
              placeholder="Digite o nome do produto"
              onChange={handleChange}
              value={produto.nome}
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <label>Descrição</label>
            <Input
              name="descricao"
              placeholder="Digite a descrição do produto"
              onChange={handleChange}
              value={produto.descricao}
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <label>Preço (R$)</label>
            <Input
              name="preco"
              placeholder="Digite o preço do produto"
              onChange={handleChange}
              value={produto.preco}
              type="number"
              step="0.01"
              min="0"
            />
          </FormGroup>

          <FormGroup>
            <label>Quantidade</label>
            <Input
              name="quantidade"
              placeholder="Digite a quantidade em estoque"
              onChange={handleChange}
              value={produto.quantidade}
              type="number"
              min="0"
            />
          </FormGroup>

          <FormGroup>
            <label>Categoria</label>
            <Input
              name="categoria"
              placeholder="Digite a categoria do produto"
              onChange={handleChange}
              value={produto.categoria}
              type="text"
            />
          </FormGroup>

          <FormActions>
            <ActionButton type="button" onClick={() => navigate('/estoque')} secondary="true">
              Cancelar
            </ActionButton>
            <ActionButton type="submit" disabled={loading}>
              {loading ? 'Salvando...' : isEdicao ? 'Atualizar Produto' : 'Adicionar Produto'}
            </ActionButton>
          </FormActions>
        </form>
      </MainContent>

      <Footer>
        &copy; {new Date().getFullYear()} Sistema de Estoque - Todos os direitos reservados
      </Footer>
    </FormContainer>
  );
};

export default ProdutoForm;