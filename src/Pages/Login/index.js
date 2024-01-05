import  React, { useState } from "react";
import { Container, Form, SubcontainerSign} from './style'
import Input  from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
import { validarEmail } from "../../Utils/validadores";
import { validarSenha } from "../../Utils/validadores";
import UserService from "../../Services/UserServices";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserService()

const Login = ()=> {
    const[loading, setLoading] = useState() 
    const [form, setForm] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async(event)=> {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await userService.login(form)
            console.log('response do login', response)
            if(response === true) {
                alert("usuario Logado com sucesso")
                navigate('/home')
            }
            setLoading(false)
        } catch (err) {
            console.log("Algo deu errado")
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
            <h1>Faça seu Login </h1>
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
            text='Entrar'
            onClick={handleSubmit}
            disabled={loading === true || !validarInput()}
            />
            <SubcontainerSign>
                <p>Não possui conta?</p>  
               <NavLink to="cadastrar"> Cadastrar
               </NavLink>
            </SubcontainerSign>
        </Form>
    </Container>
    )
}
export default Login;