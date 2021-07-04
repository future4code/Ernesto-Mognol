import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import { useHistory, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import useProtectedPage from '../hooks/useProtectedPage';

const TripDetailsPageMainContainer = styled.div`
    width: 60vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const TripDetailsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
`;

const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

const PageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
`;

const TripDetail = styled.span`
    margin: 4px 0;
`;

const ApplierDetail = styled.span`
    margin: 4px 0 4px 25px;
`;

const PageSubTitle = styled.div`
    font-size: 28px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
`;

const TripApplicantsContainer = styled.div`
    width: 60%;
`;

const ApplicantCard = styled.div`
    border-radius: 15px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 6px 0;
`;

const DetailButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4px 0 8px 0;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    background-color: grey;
    color: whitesmoke;
    border: 1px solid black;
    font-size: 15px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
        color: black;
    };
`;

const ApprovedApplicantsContainer = styled.div``;

function TripDetailsPage() {

    useProtectedPage();

    const history = useHistory();

    const params = useParams();

    const [tripDetail, setTripDetail] = useState([]);

    const goAdminHome = () => {
        history.push("/admin/trips/list");
    };

    const getTripDetail = () => {
        const authenticator = localStorage.getItem("token");
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trip/${params.id}`,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                setTripDetail(response.data.trip);
            })
    }

    useEffect(() => {
        getTripDetail();
    });

    const aproveApplier = (applier) => {
        const authenticator = localStorage.getItem("token");
        const body = {approve: true};
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips/${params.id}/candidates/${applier.id}/decide`, body,
        {
            headers: {
                auth: authenticator
            }
        })
            .then((response) => {
                alert(`Você aprovou o candidato ${applier.name}!`);
                getTripDetail();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    const reproveApplier = (applier) => {
        const authenticator = localStorage.getItem("token");
        const body = {approve: false};
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips/${params.id}/candidates/${applier.id}/decide`, body,
        {
            headers: {
                auth: authenticator
            }
        })
            .then((response) => {
                alert(`Você reprovou o candidato ${applier.name}!`);
                getTripDetail();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    return (
        <TripDetailsPageMainContainer>
            <Header />
            <ButtonContainer>
                <button onClick={goAdminHome}>VOLTAR</button>
            </ButtonContainer>
            <PageTitle>{tripDetail.name}</PageTitle>
            <TripDetailsContainer>
                <TripDetail>Nome: {tripDetail.name}</TripDetail>
                <TripDetail>Descrição: {tripDetail.description}</TripDetail>
                <TripDetail>Planeta: {tripDetail.planet}</TripDetail>
                <TripDetail>Duração: {tripDetail.durationInDays} dias</TripDetail>
                <TripDetail>Data de partida: {tripDetail.date}</TripDetail>
            </TripDetailsContainer>
            <PageSubTitle>Candidatos pendentes</PageSubTitle>
            <TripApplicantsContainer>
                {tripDetail.candidates &&
                    tripDetail.candidates.map((applier) => {
                        return (
                            <ApplicantCard key={applier.id}>
                                <ApplierDetail>Candidato: {applier.name}</ApplierDetail>
                                <ApplierDetail>Idade: {applier.age} anos</ApplierDetail>
                                <ApplierDetail>País de origem: {applier.country}</ApplierDetail>
                                <ApplierDetail>Profissão: {applier.profession}</ApplierDetail>
                                <ApplierDetail>Motivação: {applier.applicationText}</ApplierDetail>
                                <DetailButtonContainer>
                                    <Button onClick={() => aproveApplier(applier)}>APROVAR</Button>
                                    <Button onClick={() => reproveApplier(applier)}>REPROVAR</Button>
                                </DetailButtonContainer>
                            </ApplicantCard>
                        );
                    })}
            </TripApplicantsContainer>
            <PageSubTitle>Candidatos aprovados</PageSubTitle>
            <ApprovedApplicantsContainer>
                {tripDetail.approved &&
                    tripDetail.approved.map((applier) => {
                        return (
                            <div key={applier.id}>
                                <ul>
                                    <li>{applier.name}, {applier.age} anos, {applier.country}</li>
                                </ul>
                            </div>
                        );
                    })}
            </ApprovedApplicantsContainer>
            <Footer />
        </TripDetailsPageMainContainer>
    )
}

export default TripDetailsPage