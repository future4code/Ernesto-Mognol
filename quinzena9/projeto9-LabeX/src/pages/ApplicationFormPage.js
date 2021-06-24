import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const ApplicationFormPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const ApplicationFormContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
`;

function ApplicationFormPage (){

    const history = useHistory();

    const goListTripsPage = () =>{
        history.push("/trips/list");
    };
    
    return (
        <ApplicationFormPageMainContainer>
            <Header />
            <ApplicationFormContainer>
                <p>APPLICATION FORM PAGE</p>
                <ButtonContainer>
                    <button onClick={goListTripsPage}>LISTA DE VIAGENS</button>
                    <button>ENVIAR FORMULÁRIO</button>
                </ButtonContainer>
            </ApplicationFormContainer>
            <Footer />
        </ApplicationFormPageMainContainer>
    )
}

export default ApplicationFormPage