import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErrorPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const ErrorContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function ErrorPage (){
    return(
        <ErrorPageMainContainer>
            <Header />
            <ErrorContainer>
                <p>ERROR PAGE</p>
            </ErrorContainer>
            <Footer />
        </ErrorPageMainContainer>
    )
}

export default ErrorPage