import React from 'react';
import styled from 'styled-components';

const HeaderMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 60%;
    height: 10%;
    border-radius: 25px;
    border: 5px solid yellow;
    font-weight: bold;
    margin: 16px 0;
`
const HeaderMenu = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 8px;
`
const HeaderTitle = styled.span`
    font-size: 20pt;
    color: #F0FFFF;
`
const HeaderMenuLeft = styled.span`
    margin-right: 8px;
    padding: 8px 16px;
    border-radius: 25px;
    ${(props) => {
        if (props.page === "create") {
            return ('background-color: #F0FFFF')
        }
    }};
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`
const HeaderMenuRight = styled.div`
    margin-left: 8px;
    padding: 8px 16px;
    border-radius: 25px;
    ${(props) => {
        if (props.page === "check") {
            return ('background-color: #F0FFFF')
        }
    }};
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`

export default class Header extends React.Component {
    render() {
        return (
            <HeaderMainContainer>
                <HeaderTitle>LABEFY</HeaderTitle>
                <HeaderMenu >
                    <HeaderMenuLeft page={this.props.pageState} onClick={this.props.ClickOnMenuLeft}>CRIAR PLAYLIST</HeaderMenuLeft>
                    <HeaderMenuRight page={this.props.pageState} onClick={this.props.ClickOnMenuRight}>CHECAR PLAYLIST</HeaderMenuRight>
                </HeaderMenu>
            </HeaderMainContainer>
        )
    }
}