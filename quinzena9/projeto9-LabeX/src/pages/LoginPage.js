import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

function LoginPage (){
    return(
        <LoginPageMainContainer>
            <Header />
                <LoginContainer>
                    <p>LOGIN PAGE</p>
                </LoginContainer>
            <Footer />
        </LoginPageMainContainer>
    )
}

export default LoginPage