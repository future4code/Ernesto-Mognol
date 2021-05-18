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

class Etapa2 extends React.Component {
    render() {
        return (
            <Body>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                <ContainerInput>
                    <p>5. Qual o seu curso?</p>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <p>6. Qual a unidade de ensino?</p>
                    <Input />
                </ContainerInput>
            </Body>
        )
    }
}

export default Etapa2;