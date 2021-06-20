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

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ActionButton = styled.button`
    height: 30px;
    width: 120px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;

const NameContainer = styled.span`
    font-size: 18pt;
`;

const EmptyProfiles = styled.div`
    height: 550px;
    display: flex;
    align-items: center;
    font-size: 18pt;
`;
function Profiles() {

    const [profilesList, setProfile] = useState({});

    const getProfile = () => {
        axios
            .get(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernestofauthmunoz/person"
            )
            .then(response => {
                setProfile(response.data.profile)
            })
            .catch(error => { console.log(error.message) })
    }

    useEffect(() => {
        document.title = 'Astromatch';
        getProfile();
    }, [])

    const like = () => {
        const body = {
            id: profilesList.id,
            choice: true,
        };
        axios
            .post(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernestofauthmunoz/choose-person",
                body
            )
            .then((response) => {
                getProfile();
            })
            .catch((error) => {console.log(error);});
    };

    const dislike = () => {
        const body = {
            id: profilesList.id,
            choice: false,
        };
        axios
            .post(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernestofauthmunoz/choose-person",
                body
            )
            .then((response) => {
                getProfile();
            })
            .catch((error) => {console.log(error);});
    };
    if(profilesList !== null){
        return (
            <AppContainer>
                    <MapContainer>
                        <NameContainer>{profilesList.name}</NameContainer>
                        <ProfileImg src={profilesList.photo} alt = {profilesList.name}></ProfileImg>
                        <InfoContainer>
                            <span>{profilesList.bio}</span>
                            <span>{profilesList.age} anos</span>
                        </InfoContainer>
                    </MapContainer>
                <ButtonContainer>
                    <ActionButton onClick={like}>CURTI</ActionButton>
                    <ActionButton onClick={dislike}>NÃO CURTI</ActionButton>
                </ButtonContainer>
            </AppContainer>
        );
    }
    else if(profilesList === null){
        return (
            <AppContainer>
                <EmptyProfiles>
                    PARECE QUE NÃO HÁ MAIS PESSOAS NA SUA REGIÃO!
                </EmptyProfiles>
            </AppContainer>
        )
    }
    
}

export default Profiles;