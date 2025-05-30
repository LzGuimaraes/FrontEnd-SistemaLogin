import axios from 'axios';

export default class UserService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN + '/api'
        })
    }

    async login (dados) {
        const {data} = await this.axios.post('/login', dados)
        if(data){
            localStorage.setItem("nome", data.user.nome)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("token", data.token.token)

            return true
        }
        return
    }
    async cadastrar (dados) {
        return this.axios.post('/user', dados)
      }
    

    usuarioAutenticado() {
        return localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined
    }

    async logout () {
        localStorage.removeItem("token")
        localStorage.removeItem("nome")
        localStorage.removeItem("email")
    }
}