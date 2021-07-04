import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

const ListTripsPageMainContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const ListTripsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
`;

const PageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
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

const CardMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: grey;
    margin: 8px;
    padding: 8px 16px;
    border-radius: 15px;
    width: 80%;
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 26px;
    background-color: whitesmoke;
    padding: 6px 14px;
    border-radius: 15px;
    margin: 4px 0 8px 0;
`;

const TripNameContainer = styled.div`
    display: flex;
    font-size: 18px;
    color: whitesmoke;
    font-weight: bold;
`;

const TripDescContainer = styled.div`
    display: flex;
    font-size: 15px;
    color: whitesmoke;
    font-style: italic;
`;

const TripDurationAndDateContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 12px 0 4px 0;
    background-color: whitesmoke;
    border-radius: 15px;
    padding: 4px 0;
`;

function ListTripsPage() {

    const [tripsList, setTripsList] = useState([]);

    useEffect(() => {
        getTripsList();
    }, []);

    const history = useHistory();

    const getTripsList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips")
            .then((response) => {
                setTripsList(response.data.trips);
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    };

    const goAdminHomePage = () => {
        history.push("/admin/trips/list");
    };

    const goApplicationFormPage = () => {
        history.push("/trips/application");
    };

    return (
        <ListTripsPageMainContainer>
            <Header />
            <ButtonContainer>
                <NavButton onClick={goApplicationFormPage}>INSCREVER-SE</NavButton>
                <NavButton onClick={goAdminHomePage}>ÁREA DE ADMIN</NavButton>
            </ButtonContainer>
            <ListTripsContainer>
                <PageTitle>LISTA DE VIAGENS DISPONÍVEIS</PageTitle>
                {tripsList.map((trip) => {
                    return (
                        <CardMainContainer key={trip.id}>
                            <TitleContainer>
                                {trip.name}
                            </TitleContainer>
                            <TripNameContainer>
                                {trip.planet}
                            </TripNameContainer>
                            <TripDescContainer>
                                {trip.description}
                            </TripDescContainer>
                            <TripDurationAndDateContainer>
                                <div>
                                    Partida em {trip.date}
                                </div>
                                <div>
                                    Duração de {trip.duration} dias.
                                </div>
                            </TripDurationAndDateContainer>
                        </CardMainContainer>
                    )
                })}
            </ListTripsContainer>
            <Footer />
        </ListTripsPageMainContainer>
    )
}

export default ListTripsPage;