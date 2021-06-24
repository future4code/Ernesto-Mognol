import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const CreateTripPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const CreateTripContainer = styled.div`
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

function CreateTripPage (){

    const history = useHistory();

    const goAdminHome = () => {
        history.push("/admin/trips/list");
    };
    
    return (
        <CreateTripPageMainContainer>
            <Header />
            <CreateTripContainer>
                <p>CREATE TRIP PAGE</p>
                <ButtonContainer>
                    <button onClick={goAdminHome}>VIAGENS LISTADAS</button>
                    <button>CRIAR</button>
                </ButtonContainer>
            </CreateTripContainer>
            <Footer />
        </CreateTripPageMainContainer>
    )
}

export default CreateTripPage;