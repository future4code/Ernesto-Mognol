import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import headerIcon from '../img/headericon.png'

const HeaderMainContainer = styled.div `
    width: 100%;
    height: 80px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    &:hover {
        cursor: pointer;
    };
    margin-bottom: 40px;
    font-size: 38px;
`;

const HeaderIcon = styled.img`
    height: 50px;
    width: auto;
    margin-right: 12px;
`;
function Header() {

    const history = useHistory();

    const goHomePage = () => {
        history.push("/")
    }

    return (
        <HeaderMainContainer onClick={goHomePage}>
            <HeaderIcon 
                src={headerIcon}
                alt="Header Icon"
            />
            <p>LABEX</p>
        </HeaderMainContainer>
    )
}

export default Header