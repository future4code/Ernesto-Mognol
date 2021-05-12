import React from 'react';
import styled from 'styled-components'

const Titulo = styled.span`
display: flex;
justify-content: center;
font-size: 18pt;
font-weight: bold;
margin: 120px 0 16px 0;
`
const Body = styled.div`
width: 60vw;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`
const ContainerInput = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Input = styled.input`
width: 40%;
height: 20px;
`
const Select = styled.select`
width: 40%;
height: 26px;
`

class Etapa1 extends React.Component {
    render() {
        return (
            <Body>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <ContainerInput>
                    <p>1. Qual o seu nome?</p>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <p>2. Qual sua idade?</p>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <p>3. Qual o seu e-mail?</p>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <p>4. Qual a sua escolaridade?</p>
                    <Select>
                        <option value='none'></option>
                        <option value='em-incompleto'>Ensino médio incompleto</option>
                        <option value='em-completo'>Ensino médio completo</option>
                        <option value='su-incompleto'>Ensino superior incompleto</option>
                        <option value='su-completo'>Ensino superior completo</option>
                    </Select>
                </ContainerInput>
            </Body>
        )
    }
}

export default Etapa1;
