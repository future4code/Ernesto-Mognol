import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useProtectedPage from '../hooks/useProtectedPage';
import useForm from '../hooks/useForm';

const CreateTripPageMainContainer = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const CreateTripContainer = styled.div`
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

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200%;
    margin-bottom: 8px;
`;
function CreateTripPage() {

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    });

    useProtectedPage();

    const history = useHistory();

    const goAdminHome = () => {
        history.push("/admin/trips/list");
    };

    const submitForm = (event) => {
        event.preventDefault();
        console.log(form.name + form.planet + form.date);
        cleanFields();
    };


    return (
        <CreateTripPageMainContainer>
            <Header />
            <CreateTripContainer>
                <p>CREATE TRIP PAGE</p>
                <FormContainer onSubmit={submitForm}>
                        <input
                            name="name"
                            placeholder="Nome da viagem"
                            type="text"
                            value={form.name}
                            onChange={onChange}
                            required />
                        <input
                            name="planet"
                            placeholder="Planeta destino"
                            type="text"
                            value={form.planet}
                            onChange={onChange}
                            required />
                        <input
                            name="date"
                            placeholder="Data da viagem"
                            type="date"
                            value={form.date}
                            onChange={onChange}
                            required />
                        <input
                            name="description"
                            placeholder="Descrição da viagem...."
                            type="text"
                            value={form.description}
                            onChange={onChange}
                            required />
                        <input
                            name="durationInDays"
                            placeholder="Duração da viagem em dias"
                            type="number"
                            value={form.durationInDays}
                            onChange={onChange}
                            required />
                        <button>CRIAR VIAGEM</button>
                </FormContainer>
                <ButtonContainer>
                    <button onClick={goAdminHome}>VIAGENS LISTADAS</button>
                </ButtonContainer>
            </CreateTripContainer>
            <Footer />
        </CreateTripPageMainContainer>
    )
}

export default CreateTripPage;