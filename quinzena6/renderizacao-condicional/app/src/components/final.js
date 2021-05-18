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

class Final extends React.Component {
    render() {
        return (
            <Body>
                <Titulo>O FORMULÁRIO ACABOU</Titulo>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Body>
        )
    }
}

export default Final;