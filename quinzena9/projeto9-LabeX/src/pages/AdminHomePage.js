import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const AdminHomePageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const AdminHomeContainer = styled.div`
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

function AdminHomePage (){

    const history = useHistory();

    const goCreateTripPage = () => {
        history.push("/admin/trips/create");
    };

    const goTripDetails = () => {
        history.push("/admin/trips/:id");
    };
    
    return (
        <AdminHomePageMainContainer>
            <Header />
            <AdminHomeContainer>
                <p>ADMIN HOME PAGE</p>
                <ButtonContainer>
                    <button onClick={goCreateTripPage}>CRIAR VIAGEM</button>
                    <button>LOGOUT</button>
                </ButtonContainer>
                <button onClick ={goTripDetails}>DETALHES DA VIAGEM</button>
            </AdminHomeContainer>
            <Footer />
        </AdminHomePageMainContainer>
    )
}

export default AdminHomePage;