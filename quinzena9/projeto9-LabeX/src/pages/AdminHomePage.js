import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';
import Loading from '../components/Loading';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
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
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        getTripsList();
    }, []);

    const goCreateTripPage = () => {
        history.push("/admin/trips/create");
    };

    const goBack = () => {
        history.push("/");
    }

    const goTripDetails = (tripId) => {
        const tripIdentification = tripId;
        history.push(`/admin/trips/${tripIdentification}`);
    };

    const getTripsList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips")
            .then((response) => {
                setTripsList(response.data.trips);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
                setLoading(false);
            })
    };

    const deleteTrip = (trip) => {
        if (window.confirm("Deseja deletar essa viagem?")) {
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
        else {
            history.push("/admin/trips/list");
        }
    };
    if (tripsList.length !== 0 && loading === false) {
        return (
            <AdminHomePageMainContainer>
                <Header />
                <ButtonContainer>
                    <Button
                        onClick={goCreateTripPage}
                        buttonName="CRIAR VIAGEM"
                    />
                    <Button
                        onClick={goBack}
                        buttonName="VOLTAR"
                    />
                </ButtonContainer>
                <AdminHomeContainer>
                    <PageTitle title="VIAGENS LISTADAS" />
                    {tripsList.map((trip) => {
                        return (
                            <CardMainContainer onClick={() => goTripDetails(trip.id)} key={trip.id}>
                                <TripNameContainer>
                                    {trip.name}
                                </TripNameContainer>
                                <TripDelete onClick={(e) => {
                                    e.stopPropagation();
                                    deleteTrip(trip)
                                }}>
                                    <TripDeleteIcon
                                        src={trashCanIcon}
                                        alt="Trash Can Icon"
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
    else if (loading === true) {
        return (
            <AdminHomePageMainContainer>
                <Header />
                <Loading />
                <Footer />
            </AdminHomePageMainContainer>
        )
    }

}

export default AdminHomePage;