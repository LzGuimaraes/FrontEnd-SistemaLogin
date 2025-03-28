import React, { useState } from "react";
import { Container, Form, SubcontainerSign, ErrorMessage } from './style'
import Input from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import UserService from "../../Services/UserServices";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserService()

const Login = ()=> {
    const [loading, setLoading] = useState(false) 
    const [form, setForm] = useState({})
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(event)=> {
        event.preventDefault();
        try {
            setError("");
            setLoading(true);
            const response = await userService.login(form);
            if(response === true) {
                navigate('/home');
            } else {
                setError("Credenciais inválidas. Verifique seu email e senha.");
            }
        } catch (err) {
            setError("Erro ao conectar com o servidor. Tente novamente.");
            console.error("Erro no login:", err);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (event)=> {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const validarInput = ()=>{
        return validarEmail(form.email) && validarSenha(form.password)
    }

    return(
     <Container>
        <Form>
            <h1>Faça seu Login</h1>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Input
            name='email'
            placeholder='Digite o seu e-mail'
            onChange={handleChange}
            type='email'
            />
            <Input
            name='password'
            placeholder='Digite a sua senha'
            onChange={handleChange}
            type='password'
            />
            <Botao
            type='submit'
            text={loading ? 'Entrando...' : 'Entrar'}
            onClick={handleSubmit}
            disabled={loading || !validarInput()}
            />
            <SubcontainerSign>
                <p>Não possui conta?</p>  
               <NavLink to="/cadastrar">Cadastrar</NavLink>
            </SubcontainerSign>
        </Form>
    </Container>
    )
}
export default Login;