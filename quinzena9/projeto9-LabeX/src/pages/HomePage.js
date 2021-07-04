import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';

const HomePageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const ButtonContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const NavButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
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

function HomePage() {

    const history = useHistory();

    const goListTripsPage = () => {
        history.push("/trips/list");
    };

    const goAdminHomePage = () => {
        const token = localStorage.getItem('token');
        if (token === null) {
            history.push("/login");
        }
        else {
            history.push("/admin/trips/list");
        };
    };

    return (
        <HomePageMainContainer>
            <Header />
            <ButtonContainer>
                <NavButton onClick={goListTripsPage}>VER VIAGENS</NavButton>
                <NavButton onClick={goAdminHomePage}>ÁREA DE ADMIN</NavButton>
            </ButtonContainer>
            <Footer />
        </HomePageMainContainer>
    )
}

export default HomePage;