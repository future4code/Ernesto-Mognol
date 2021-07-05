import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
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
                <Button
                    onClick={goListTripsPage}
                    buttonName="VER VIAGENS"
                />
                <Button
                    onClick={goAdminHomePage}
                    buttonName="ÁREA DE ADMIN"
                />
            </ButtonContainer>
            <Footer />
        </HomePageMainContainer>
    )
}

export default HomePage;