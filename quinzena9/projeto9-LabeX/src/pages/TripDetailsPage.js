import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const TripDetailsPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const TripDetailsContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

function TripDetailsPage (){

    const history = useHistory();

    const goAdminHome = () => {
        history.push("/admin/trips/list");
    };
    
    return (
        <TripDetailsPageMainContainer>
            <Header />
            <TripDetailsContainer>
                <p>TRIP DETAILS PAGE</p>
                <ButtonContainer>
                    <button onClick={goAdminHome}>VOLTAR</button>
                </ButtonContainer>
            </TripDetailsContainer>
            <Footer />
        </TripDetailsPageMainContainer>
    )
}

export default TripDetailsPage