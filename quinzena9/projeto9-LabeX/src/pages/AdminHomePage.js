import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useProtectedPage from '../hooks/useProtectedPage';
import axios from 'axios';
import trashCanIcon from '../img/trashcanicon.png';

const AdminHomePageMainContainer = styled.div`
    width: 60vw;
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

const PageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
`;

const CardMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: gray;
    margin: 8px;
    padding: 8px 16px;
    width: 80%;
    height: 100px;
    border: 1px solid black;
    &:hover {
        cursor: default;
        background-color: whitesmoke;
    };
`;

const TripNameContainer = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const TripDelete = styled.div`
`;

const TripDeleteIcon = styled.img`
    width: 40px;
    height: auto;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    };
`;

function AdminHomePage() {

    useProtectedPage();

    const [tripsList, setTripsList] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getTripsList();
    }, []);

    const goCreateTripPage = () => {
        history.push("/admin/trips/create");
    };

    const goTripDetails = (tripId) => {
        const tripIdentification = tripId;
        history.push(`/admin/trips/${tripIdentification}`);
    };

    const getTripsList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips")
            .then((response) => {
                setTripsList(response.data.trips);
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    };

    const deleteTrip = (trip) => {
        if(window.confirm("Deseja deletar essa viagem?")){
            const authenticator = localStorage.getItem("token");
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips/${trip.id}`,
            {
                headers: {
                    auth: authenticator
                }
            })
                .then((response) => {
                    alert(`Você deletou a viagem ${trip.name} que ia em direção ao planeta ${trip.planet}!`);
                    history.push("/admin/trips/list");
                    getTripsList();
                })
                .catch((error) => {
                    alert(error.response.data.message);
                    history.push("/admin/trips/list");
                    getTripsList();
                })
        }
        else{
            history.push("/admin/trips/list");
        }
    };

    return (
        <AdminHomePageMainContainer>
            <Header />
            <ButtonContainer>
                <NavButton onClick={goCreateTripPage}>CRIAR VIAGEM</NavButton>
                <NavButton>LOGOUT</NavButton>
            </ButtonContainer>
            <AdminHomeContainer>
                <PageTitle>VIAGENS LISTADAS</PageTitle>
                {tripsList.map((trip) => {
                    return (
                        <CardMainContainer onClick={() =>  goTripDetails(trip.id)} key={trip.id}>
                            <TripNameContainer>
                                {trip.name}
                            </TripNameContainer>
                            <TripDelete>
                                <TripDeleteIcon
                                    src={trashCanIcon}
                                    alt="Trash Can Icon"
                                    onClick={() =>  deleteTrip(trip)}
                                />
                            </TripDelete>
                        </CardMainContainer>
                    )
                })}
            </AdminHomeContainer>
            <Footer />
        </AdminHomePageMainContainer>
    )
}

export default AdminHomePage;