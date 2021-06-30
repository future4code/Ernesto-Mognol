import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';

const HomePageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const HomeContainer = styled.div`
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

function HomePage (){

    const history = useHistory ();

    const goListTripsPage = () =>{
        history.push("/trips/list");
    };

    const goAdminHomePage = () => {
        const token = localStorage.getItem('token');
        if(token === null){
            history.push("/login");
        }
        else{
            history.push("/admin/trips/list");
        };
    };

    return (
        <HomePageMainContainer>
            <Header />
            <HomeContainer>
                <p>HOME PAGE</p>
                <ButtonContainer>
                    <button onClick={goListTripsPage}>VER VIAGENS</button>
                    <button onClick={goAdminHomePage}>ÁREA DE ADMIN</button>
                </ButtonContainer>
            </HomeContainer>
            <Footer />
        </HomePageMainContainer>
    )
}

export default HomePage;