import axios from 'axios';

const API_URL = 'http://localhost:3333/api';

// User related services
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const cadastrarUsuario = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Product related services
export const listarProdutos = async () => {
  try {
    const response = await axios.get(`${API_URL}/produtos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    throw error;
  }
};

export const obterProduto = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produto:', error);
    throw error;
  }
};

export const adicionarProduto = async (produto) => {
  try {
    const response = await axios.post(`${API_URL}/produtos`, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    throw error;
  }
};

export const atualizarProduto = async (id, produto) => {
  try {
    const response = await axios.put(`${API_URL}/produtos/${id}`, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
};

export const removerProduto = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao remover produto:', error);
    throw error;
  }
};

export const atualizarEstoque = async (id, dados) => {
  try {
    const response = await axios.patch(`${API_URL}/produtos/${id}/estoque`, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar estoque:', error);
    throw error;
  }
};