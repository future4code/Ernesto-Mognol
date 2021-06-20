import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: LightGray;
  padding: 10px 15px;
  border-radius: 25px;
`;

const EmptyProfiles = styled.div`
    height: 550px;
    display: flex;
    align-items: center;
    font-size: 18pt;
`;

function Matches() {

    const [matchesList, setMatchesList] = useState([]);

    const getMatches = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernestofauthmunoz/matches")
            .then((response) => {
                setMatchesList(response.data.matches)
            })
            .catch((error) => { console.log(error) })
    };

    useEffect(() => {
        document.title = 'Astromatch';
        getMatches()
    }, []);

    if(matchesList.length !== 0){
        return (
            <div>
                {matchesList.map((user) => {
                    return(
                    <div>
                        {user.name}
                        {user.age}
                    </div>)
                })}
            </div>
        )
    }
    else if(matchesList.length === 0){
        return(
            <AppContainer>
                <EmptyProfiles>
                    VOCÊ AINDA NÃO DEU NENHUM MATCH! VOLTE PARA A TELA INÍCIA E COMECE A CURTIR!
                </EmptyProfiles>
            </AppContainer>
        )
    }
}

export default Matches;