import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';

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

const InputsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin-bottom: 8px;
`;

function LoginPage (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/login", body)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                history.push("/admin/trips/list");
            })
            .catch((error) => {
                console.log(error.response)
            })
    };

    return(
        <LoginPageMainContainer>
            <Header />
                <LoginContainer>
                    <p>LOGIN PAGE</p>
                    <InputsContainer>
                        <input
                            placeholder = "E-mail"
                            type = "email"
                            value = {email}
                            onChange = {onChangeEmail} />
                        <input
                            placeholder = "Senha"
                            type = "password"
                            value = {password}
                            onChange = {onChangePassword} />
                    </InputsContainer>
                    <button onClick = {onSubmitLogin}>LOGIN</button>
                </LoginContainer>
            <Footer />
        </LoginPageMainContainer>
    )
}

export default LoginPage