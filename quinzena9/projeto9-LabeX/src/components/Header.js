import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const HeaderMainContainer = styled.div `
    width: 100%;
    height: 10%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    &:hover {
        cursor: pointer;
    };
`;

function Header() {

    const history = useHistory();

    const goHomePage = () => {
        history.push("/")
    }

    return (
        <HeaderMainContainer onClick={goHomePage}>
            <p>HEADER</p>
        </HeaderMainContainer>
    )
}

export default Header