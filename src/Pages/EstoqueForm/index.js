import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotification } from '../../Context/NotificationContext';
import EstoqueService from '../../Services/EstoqueServices';
import './style.css';

const estoqueService = new EstoqueService();

const EstoqueForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { success, error } = useNotification();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    quantity: '',
    type: 'entrada',
    notes: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await estoqueService.obterProduto(id);
        setProduct(data);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const operacao = formData.type === 'entrada' ? 'adicionar' : 'remover';
      await estoqueService.atualizarEstoque(id, parseInt(formData.quantity), operacao);
      success(`Estoque ${operacao === 'adicionar' ? 'adicionado' : 'removido'} com sucesso!`);
      navigate('/estoque');
    } catch (error) {
      console.error('Erro ao atualizar estoque:', error);
      error('Erro ao atualizar estoque. Por favor, tente novamente.');
    }
  };

  if (loading) {
    return <div className="estoque-form-container">Carregando...</div>;
  }

  if (!product) {
    return <div className="estoque-form-container">Produto não encontrado</div>;
  }

  return (
    <div className="estoque-form-container">
      <h2 className="estoque-form-title">
        {formData.type === 'entrada' ? 'Entrada de Estoque' : 'Saída de Estoque'}
      </h2>
      
      <div className="product-info">
        <h3>{product.nome}</h3>
        <p>Estoque atual: {product.quantidade} unidades</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">Tipo de Movimentação</label>
          <select 
            id="type" 
            name="type" 
            className="form-select"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="quantity">Quantidade</label>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            className="form-control"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="notes">Observações</label>
          <textarea 
            id="notes" 
            name="notes" 
            className="form-control"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        
        <div className="btn-container">
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate('/estoque')}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstoqueForm;