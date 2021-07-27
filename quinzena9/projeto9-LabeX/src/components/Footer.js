import React from 'react';
import styled from 'styled-components';

const FooterMainContainer = styled.div `
    width: 100%;
    height: 10%;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 40px;
`;

function Footer () {
    return(
        <FooterMainContainer>
            <p>LabeX LTDA. Todos os direitos reservados.</p>
        </FooterMainContainer>
    )
}

export default Footer;