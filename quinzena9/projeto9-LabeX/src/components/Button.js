import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 45px;
    background-color: grey;
    color: whitesmoke;
    border: 1px solid black;
    font-size: 18px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
        color: black;
    };
`;

function Button(props) {
    return(
        <StyledButton onClick={props.onClick}>
            {props.buttonName}
        </StyledButton>
    )
};

export default Button;