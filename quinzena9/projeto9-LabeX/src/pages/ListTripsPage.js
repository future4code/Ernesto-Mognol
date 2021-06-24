import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const ListTripsPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const ListTripsContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
`;

function ListTripsPage (){

    const history = useHistory();

    const goAdminHomePage = () => {
        history.push("/admin/trips/list");
    };

    const goApplicationFormPage = () => {
        history.push("/trips/application");
    };
    
    return (
        <ListTripsPageMainContainer>
            <Header />
            <ListTripsContainer>
                <p>LIST TRIPS PAGE</p>
                <ButtonContainer>
                    <button onClick={goApplicationFormPage}>INSCREVER-SE</button>
                    <button onClick={goAdminHomePage}>ÁREA DE ADMIN</button>
                </ButtonContainer>
            </ListTripsContainer>
            <Footer />
        </ListTripsPageMainContainer>
    )
}

export default ListTripsPage;