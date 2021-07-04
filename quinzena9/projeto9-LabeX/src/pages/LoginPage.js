import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';

const LoginPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const LoginContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    margin-bottom: 8px;
`;

const StyledInput = styled.input`
    width: 75%;
    height: 40px;
    border-radius: 15px;
    margin: 6px 0;
    border: 1.5px solid black;
    font-size: 16px;
    padding: 0 10px;
`;

const PageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
`;

const Button = styled.button`
    width: 130px;
    height: 45px;
    background-color: grey;
    color: whitesmoke;
    border: 1px solid black;
    font-size: 18px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
        color: black;
    };
`;

function LoginPage() {

    const { form, onChange, cleanFields} = useForm({ email: "", password: ""})

    const history = useHistory();

    const submitLogin = (event) => {
        event.preventDefault();
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/login", form)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                cleanFields();
                history.push("/admin/trips/list");
            })
            .catch((error) => {
                console.log(error.response)
            })
    };

    return (
        <LoginPageMainContainer>
            <Header />
            <LoginContainer>
                <PageTitle>LOGIN</PageTitle>
                <InputsContainer onSubmit={submitLogin}>
                        <StyledInput
                            name="email"
                            placeholder="E-mail"
                            type="email"
                            value={form.email}
                            onChange={onChange}
                            required />
                        <StyledInput
                            name="password"
                            placeholder="Senha"
                            type="password"
                            value={form.password}
                            onChange={onChange}
                            required />
                    <Button>ACESSAR</Button>
                </InputsContainer>
            </LoginContainer>
            <Footer />
        </LoginPageMainContainer>
    )
}

export default LoginPage