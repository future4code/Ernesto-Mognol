import React from 'react';
import styled from 'styled-components';

const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 16px 32px;
`
const MapContainer = styled.div`
  display: flex;
  align-items: center;  
`
const DeleteButton = styled.button`
  width: 80px;
  height: 25px;
  margin-left: 16px;
`
const CheckPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class CheckPage extends React.Component {
  renderizarCheckPage = () => {
    const numberOfPlaylists = this.props.playlistListUp.length;
    if (numberOfPlaylists > 0) {
      return (
        <RenderContainer>
          {this.props.playlistListUp.sort((a, b) => a.name > b.name ? 1 : -1).map((playlist, idx) => {
            return (
              <MapContainer key={idx}>
                <p>{playlist.name}</p>
                <DeleteButton onClick={() => this.props.playlistDelete(playlist.id)}>DELETAR</DeleteButton>
              </MapContainer>
            )
          })}
        </RenderContainer>)
    }
    else{
      return (
        <RenderContainer>
          <h3>NÃO HÁ PLAYLISTS PARA ESSE USUÁRIO!</h3>
        </RenderContainer>
      )
    }
  }
  render() {
    return (
      <CheckPageContainer>
        <h1>PLAYLIST CRIADAS</h1>
        {this.renderizarCheckPage()}
      </CheckPageContainer>
    )
  }
}