import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 8px 0 25px 0;
    align-items: center;
`;
const TitleContainer = styled.span`
    background-color: red;
    padding: 12px 22px;
    border-radius: 8px;
    font-size: 18pt;
    font-weight: bold;
`;
const PageButton = styled.button`
    height: 30px;
    width: 120px;
    font-size: 12pt;
`;

function Header(props) {
    return(
        <HeaderContainer>
            <TitleContainer>ASTROMATCH</TitleContainer>
            <PageButton onClick = {props.changePage}>{props.pageName}</PageButton>
        </HeaderContainer>
    )
}

export default Header;