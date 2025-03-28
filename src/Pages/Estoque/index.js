import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useNotification } from '../../Context/NotificationContext';
// Corrigindo a importação para o nome correto do arquivo
import { listarProdutos, removerProduto } from '../../Services/Services';
import './style.css';

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const { success, error } = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      setLoading(true);
      const data = await listarProdutos();
      setProdutos(data);
      setErro(null);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setErro('Falha ao carregar a lista de produtos.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoverProduto = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este produto?')) {
      try {
        await removerProduto(id);
        // Atualiza a lista após remover
        setProdutos(produtos.filter(produto => produto.id !== id));
        success('Produto removido com sucesso!');
      } catch (error) {
        console.error('Erro ao remover produto:', error);
        error('Erro ao remover produto. Tente novamente.');
      }
    }
  };

  if (loading) {
    return <div className="estoque-container">Carregando...</div>;
  }

  if (erro) {
    return <div className="estoque-container error">{erro}</div>;
  }

  return (
    <div className="estoque-container">
      <div className="estoque-header">
        <button 
          className="dashboard-button" 
          onClick={() => navigate('/home')}
        >
          Voltar ao Dashboard
        </button>
        <h1>Gerenciamento de Estoque</h1>
      </div>
      
      {/* Botão centralizado */}
      <div className="add-button-container">
        <Link to="/produto/novo" className="add-button">
          Adicionar Produto
        </Link>
      </div>
      
      {produtos.length === 0 ? (
        <p className="no-products">Nenhum produto cadastrado.</p>
      ) : (
        <div className="table-responsive">
          <table className="products-table">
            <thead>
              <tr>
                {/* Removida a coluna ID */}
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.id}>
                  {/* Removida a célula ID */}
                  <td>{produto.nome}</td>
                  <td>{produto.descricao || '-'}</td>
                  <td>R$ {parseFloat(produto.preco).toFixed(2)}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.categoria || '-'}</td>
                  <td className="actions">
                    <Link to={`/produto/editar/${produto.id}`} className="edit-button">
                      Editar
                    </Link>
                    <Link to={`/produto/estoque/${produto.id}`} className="stock-button">
                      Estoque
                    </Link>
                    <button 
                      className="delete-button"
                      onClick={() => handleRemoverProduto(produto.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Estoque;