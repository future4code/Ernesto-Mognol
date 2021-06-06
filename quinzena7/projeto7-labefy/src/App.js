import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header.js';
import PlaylistCreatePage from './components/PlaylistCreatePage/CreatePage.js';
import PlaylistCheckPage from './components/PlaylistCheckPage/CheckPage.js';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  height: 100vh;
`

export default class App extends React.Component {
  state = {
    pageValue: "create",
    playlistNameInput: "",
    playlistList: []
  }
  ClickOnMenuLeft = () => {
    this.setState({ pageValue: "create" })
  }
  ClickOnMenuRight = () => {
    this.setState({ pageValue: "check" })
  }
  onChangePlaylistNameInput = (event) => {
    this.setState({ playlistNameInput: event.target.value })
  }
  loadPlaylist = () => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {headers: {"Authorization": "ernesto-fauth-munoz"}})
      .then((response) => {
        this.setState({ playlistList: response.data.result.list })
      })
      .catch((error) => {console.log(error.response)})
  }
  createPlaylist = () => {
    const body = {name: this.state.playlistNameInput};
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        body,
        {headers: { "Authorization": "ernesto-fauth-munoz" }},
      )
      .then(() =>{
        this.loadPlaylist()
        alert('Playlist criada!')})
      .catch ((error) => {
        if(error.response.data.message === 'There already is a playlist with a similiar name.'){
          alert('Já existe uma playlist com esse nome!')
        }
        else{
          alert(error.response.data.message)
        }
      })
  }
  deletePlaylist = (playlistId) => {
    const playlistDelete = playlistId;
    if(window.confirm("Você deseja deletar essa playlist?")){
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistDelete}`,
      {headers: { Authorization: "ernesto-fauth-munoz" }},
      )
      .then(() => {
        this.loadPlaylist();
        alert('Playlist deletada!');
      })
      .catch((error) =>{
        alert('Erro ao deletar playlist.', error.response.data)
      })
    }
  }
  renderizarPagina = (valorPag) => {
    switch (valorPag) {
      case "create":
        return (
          <BodyContainer>
            <Header
              pageState={this.state.pageValue}
              ClickOnMenuLeft={this.ClickOnMenuLeft}
              ClickOnMenuRight={this.ClickOnMenuRight} />
            <PlaylistCreatePage
              PlaylistNameInput={this.state.playlistNameInput}
              onChangePlaylistNameInput={this.onChangePlaylistNameInput}
              onClickSendButton = {this.createPlaylist} />
          </BodyContainer>
        )
      case "check":
        return (
          <BodyContainer>
            <Header
              pageState={this.state.pageValue}
              ClickOnMenuLeft={this.ClickOnMenuLeft}
              ClickOnMenuRight={this.ClickOnMenuRight} />
            <PlaylistCheckPage
              playlistListUp = {this.state.playlistList}
              playlistDelete ={this.deletePlaylist}/>
          </BodyContainer>
        )
      default:
        return 0;
    }
  }
  componentDidMount() {
    this.loadPlaylist();
  }
  render() {
    return (
      <div>
        {this.renderizarPagina(this.state.pageValue)}
      </div>
    )
  }
}
