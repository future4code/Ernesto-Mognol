import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { countries } from "../constants/countries";

const ApplicationFormPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const ApplicationFormContainer = styled.div`
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

const PageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
`;

const NavButton = styled.button`
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

const StyledInput = styled.input`
    width: 75%;
    height: 40px;
    border-radius: 15px;
    margin: 6px 0;
    border: 1.5px solid black;
    font-size: 16px;
    padding: 0 10px;
`;

const StyledSelect = styled.select`
    width: 78%;
    height: 40px;
    border-radius: 15px;
    margin: 6px 0;
    border: 1.5px solid black;
    font-size: 16px;
    padding: 0 10px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200%;
    margin-bottom: 8px;
`;

function ApplicationFormPage() {

    const { form, onChange, cleanFields } = useForm({
        tripId: "",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    });

    const [tripsList, setTripsList] = useState([]);

    const history = useHistory();

    const goListTripsPage = () => {
        history.push("/trips/list");
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

    useEffect(() => {
        getTripsList();
    }, []);

    const applyToTrip = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            age: Number(form.age),
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        };
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips/${form.tripId}/apply`, body)
            .then((response) => {
                alert("Aplicação bem sucedida!");
                cleanFields();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };
    return (
        <ApplicationFormPageMainContainer>
            <Header />
            <ButtonContainer>
                <NavButton onClick={goListTripsPage}>LISTA DE VIAGENS</NavButton>
            </ButtonContainer>
            <ApplicationFormContainer>
                <PageTitle>FORMULÁRIO DE APLICAÇÃO</PageTitle>
                <FormContainer onSubmit={applyToTrip}>
                    <StyledSelect
                        value={form.tripId}
                        required
                        name={"tripId"}
                        onChange={onChange}
                    >
                        <option value={""}>Selecione uma viagem: </option>
                        {tripsList.map((trip) => {
                            return (
                                <option value={trip.id} key={trip.id}>
                                    {trip.name} - {trip.planet}
                                </option>
                            );
                        })}
                    </StyledSelect>
                    <StyledInput
                        name={"name"}
                        placeholder="Seu nome"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        pattern={"[a-zA-Z]{3,}"}
                        title="Mínimo de 3 letras."
                        required
                    />
                    <StyledInput
                        name={"age"}
                        placeholder="Sua idade em anos"
                        type="number"
                        value={form.age}
                        onChange={onChange}
                        min="18"
                        required
                    />
                    <StyledSelect
                        value={form.country}
                        required
                        name={"country"}
                        onChange={onChange}
                    >
                        <option value={""}>Selecione seu país:</option>
                        {countries.map((country) => {
                            return (
                                <option value={country} key={country}>
                                    {country}
                                </option>
                            );
                        })}
                    </StyledSelect>
                    <StyledInput
                        name={"profession"}
                        placeholder="Profissão"
                        type="text"
                        value={form.profession}
                        onChange={onChange}
                        pattern={"^.{10,}$"}
                        title="Mínimo de 10 caractéres."
                        required
                    />
                    <StyledInput
                        name={"applicationText"}
                        placeholder="Diga porque você merece ser selecionado."
                        type="text"
                        value={form.applicationText}
                        onChange={onChange}
                        pattern={"^.{30,}$"}
                        title="Mínimo de 30 caractéres."
                        required
                    />
                    <NavButton>ENVIAR FORMULÁRIO</NavButton>
                </FormContainer>
            </ApplicationFormContainer>
            <Footer />
        </ApplicationFormPageMainContainer>
    )
}

export default ApplicationFormPage