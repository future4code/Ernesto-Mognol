import React from 'react';
import axios from 'axios';
import './index.css';

export default class App extends React.Component {
  state = {
    usersList: [],
    pageValue: 'home',
    nameInput: "",
    emailInput: "",
  }
  onChangeEmailInput = (event) => {
    this.setState({ emailInput: event.target.value })
  }
  onChangeNameInput = (event) => {
    this.setState({ nameInput: event.target.value })
  }
  loadUsers = () => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
          "Authorization": "ernesto-fauth-munoz"
        }
      })
      .then((response) => {
        this.setState({ usersList: response.data })
      })
      .catch(() => {
      });
  }
  createUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    };
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        { headers: { Authorization: "ernesto-fauth-munoz" }},
      )
      .then(() => {
        this.loadUsers();
        alert('Usuário criado e adicionado ao banco de usuários!');
      })
      .catch(() => {
        alert('Erro ao adicionar usuário à base de dados.')
      });
  }
  goHome = () => {
    this.setState({ pageValue: "home" })
  }
  goList = () => {
    this.setState({ pageValue: "list" });
  }
  deleteUser = (userId) => {
    const userDelete = userId;
    if(window.confirm("Você deseja deletar esse usuário?")){
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userDelete}`,
      {headers: { Authorization: "ernesto-fauth-munoz" }},
      )
      .then(() => {
        alert('Usuário deletado!');
        this.loadUsers();
      })
      .catch((error) =>{
        alert('Erro ao deletar usuário.', error.response.data.message)
      })
    }
  }
  componentDidMount() {
    this.loadUsers();
  }
  renderPage = () => {
    if (this.state.pageValue === "home") {
      return (
        <div className="AppBody">
          <button onClick = {this.goList}>Ver lista de usuários</button>
          <h3>CRIAR USUÁRIO</h3>
          <div className="InputContainer">
            <input
              value={this.state.nameInput}
              onChange={this.onChangeNameInput}
              className="Input"
              placeholder="Digite seu nome..." />
            <input
              value={this.state.emailInput}
              onChange={this.onChangeEmailInput}
              className="Input"
              placeholder="Digite seu e-mail..." />
          </div>
          <button onClick={this.createUser}>Criar usuário</button>
        </div>)
    }
    else if (this.state.pageValue === "list") {
      return (
        <div className="AppBody">
          <button onClick = {this.goHome}>Criar usuário</button>
          {this.state.usersList.map((user, idx) => {
            return (
              <div key={idx} id = "UsersMapping">
                <p>{user.name}</p>
                <button onClick = {() => this.deleteUser(user.id)} id = "delete-button">X</button>
              </div>
            )
          })}
        </div>)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          <h2>LABENUSERS</h2>
        </div>
        <div>
          {this.renderPage()}
        </div>
      </div>
    )
  }
}

