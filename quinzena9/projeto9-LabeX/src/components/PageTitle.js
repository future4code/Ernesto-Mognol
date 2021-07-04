import React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.div`
    font-size: 35px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
`;

function PageTitle(props) {
    return(
        <StyledPageTitle>{props.title}</StyledPageTitle>
    )
}

export default PageTitle;