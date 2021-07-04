import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useProtectedPage from '../hooks/useProtectedPage';
import useForm from '../hooks/useForm';
import axios from 'axios';

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

const PageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
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

const PlanetInput = styled.select`
    width: 78%;
    height: 40px;
    border-radius: 15px;
    margin: 6px 0;
    border: 1.5px solid black;
    font-size: 16px;
    padding: 0 10px;
`;

const Button = styled.button`
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
        const authenticator = localStorage.getItem("token");
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: Number(form.durationInDays),
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernesto-fauth-munoz/trips", body,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                alert("Formulário enviado! Nova viagem criada.");
                cleanFields();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    return (
        <CreateTripPageMainContainer>
            <Header />
            <ButtonContainer>
                    <NavButton onClick={goAdminHome}>VIAGENS LISTADAS</NavButton>
            </ButtonContainer>
            <CreateTripContainer>
                <PageTitle>CRIAR VIAGEM</PageTitle>
                <FormContainer onSubmit={submitForm}>
                    <StyledInput
                        name={"name"}
                        placeholder="Nome da viagem"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title="Mínimo de 5 caractéres."
                        required />
                    <PlanetInput
                        required
                        value={form.planet}
                        name={"planet"}
                        onChange={onChange}
                    >
                        <option value="">Planeta destino:</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                        <option value="Plutão">Plutão</option>
                    </PlanetInput>
                    <StyledInput
                        name={"date"}
                        placeholder="Data da viagem (DD/MM/AAAA)"
                        value={form.date}
                        onChange={onChange}
                        pattern="^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}"
                        title="Insira um data DD/MM/AAAA."
                        required />
                    <StyledInput
                        name={"description"}
                        placeholder="Descrição da viagem...."
                        type="text"
                        value={form.description}
                        onChange={onChange}
                        required />
                    <StyledInput
                        name={"durationInDays"}
                        placeholder="Duração da viagem em dias"
                        type="number"
                        value={form.durationInDays}
                        onChange={onChange}
                        required />
                    <Button>CRIAR VIAGEM</Button>
                </FormContainer>
            </CreateTripContainer>
            <Footer />
        </CreateTripPageMainContainer>
    )
}

export default CreateTripPage;