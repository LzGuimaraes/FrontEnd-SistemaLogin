import axios from 'axios';

class EstoqueService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN + '/api'
        });
    }

    async listarProdutos() {
        try {
            const { data } = await this.axios.get('/produtos');
            return data;
        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            throw error;
        }
    }

    async obterProduto(id) {
        try {
            const { data } = await this.axios.get(`/produtos/${id}`);
            return data;
        } catch (error) {
            console.error(`Erro ao obter produto ${id}:`, error);
            throw error;
        }
    }

    async adicionarProduto(produto) {
        try {
            const { data } = await this.axios.post('/produtos', produto);
            return data;
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            throw error;
        }
    }

    async atualizarProduto(id, produto) {
        try {
            const { data } = await this.axios.put(`/produtos/${id}`, produto);
            return data;
        } catch (error) {
            console.error(`Erro ao atualizar produto ${id}:`, error);
            throw error;
        }
    }

    async removerProduto(id) {
        try {
            const { data } = await this.axios.delete(`/produtos/${id}`);
            return data;
        } catch (error) {
            console.error(`Erro ao remover produto ${id}:`, error);
            throw error;
        }
    }

    async atualizarEstoque(id, quantidade, operacao = 'adicionar') {
        try {
            const { data } = await this.axios.patch(`/produtos/${id}/estoque`, { 
                quantidade, 
                operacao // 'adicionar' ou 'remover'
            });
            return data;
        } catch (error) {
            console.error(`Erro ao atualizar estoque do produto ${id}:`, error);
            throw error;
        }
    }
}

export default EstoqueService;