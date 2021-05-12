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

class Etapa3 extends React.Component {
    render() {
        return (
            <Body>
                <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
                <ContainerInput>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <p>6. Você fez algum curso complementar?</p>
                    <Select>
                        <option value='none'></option>
                        <option value='nenhum'>Não fiz curso complementar</option>
                        <option value='tecnico'>Curso técnico</option>
                        <option value='ingles'>Curso de inglês</option>
                    </Select>
                </ContainerInput>
            </Body>
        )
    }
}

export default Etapa3;