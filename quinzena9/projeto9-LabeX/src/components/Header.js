import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import headerIcon from '../img/headericon.png'

const HeaderMainContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: grey;
    display: flex;
    justify-content: space-evenly;
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

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MiniButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 35px;
    background-color: DarkGray;
    color: whitesmoke;
    border: 1px solid black;
    font-size: 15px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
        color: black;
    };
`;

function Header() {

    const history = useHistory();

    const goHomePage = () => {
        history.push("/")
    }

    const goToLoginPage  = () =>{
        history.push("/login");
    }

    const token = localStorage.getItem("token");

    const doLogout = () =>{
        alert("Você realizou logout.")
        localStorage.clear();
    };
    
    if (token === null) {
        return (
            <HeaderMainContainer onClick={goHomePage}>
                <IconContainer>
                    <HeaderIcon
                        src={headerIcon}
                        alt="Header Icon"
                    />
                    <p>LABEX</p>
                </IconContainer>
                <LogoutContainer>
                    <MiniButton onClick={(e) => {
                        e.stopPropagation();
                        goToLoginPage();
                    }}>LOGIN</MiniButton>
                </LogoutContainer>
            </HeaderMainContainer>
        )
    }
    else{
        return (
            <HeaderMainContainer onClick={goHomePage}>
                <IconContainer>
                    <HeaderIcon
                        src={headerIcon}
                        alt="Header Icon"
                    />
                    <p>LABEX</p>
                </IconContainer>
                <LogoutContainer>
                    <MiniButton onClick={doLogout}>LOGOUT</MiniButton>
                </LogoutContainer>
            </HeaderMainContainer>
        )
    }
}

export default Header