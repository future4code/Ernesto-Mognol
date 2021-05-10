import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0 10px 0;
`
class App extends React.Component {

  state = { 
    arrayPosts: [
    {nome: 'paulinha', foto:'https://picsum.photos/50/50', imagem: 'https://picsum.photos/200/150'},
    {nome: 'joaozinho', foto:'https://picsum.photos/50/51', imagem: 'https://picsum.photos/200/151'},
    {nome: 'zezinho', foto:'https://picsum.photos/50/52', imagem: 'https://picsum.photos/200/152'}],
    inputNome: "",
    inputFoto: "",
    inputImagem: ""
  }
  handleNome = (e) =>{
    this.setState({inputNome: e.target.value})
  }
  handleFoto = (e) =>{
    this.setState({inputFoto: e.target.value})
  }
  handleImagem = (e) =>{
    this.setState({inputImagem: e.target.value})
  }
  adicionarPost = () => {
    const novoPost ={
      nome: this.state.inputNome,
      foto: this.state.inputFoto,
      imagem: this.state.inputImagem,
    };
    this.setState({
      arrayPosts:[...this.state.arrayPosts, novoPost],
      inputNome: "",
      inputFoto: "",
      inputImagem: ""
    })
  }
  renderizarPosts = () => {
    return this.state.arrayPosts.map((info) => {
      return (<Post key={this.state.arrayPosts.indexOf(info)} nomeUsuario = {info.nome} fotoUsuario = {info.foto} fotoPost = {info.imagem} />)
    })
  }
render() {
    return (
      <MainContainer>
        <InputContainer>
        <input
          type='text'
          value={this.state.inputNome}
          onChange={this.handleNome}
          placeholder='Nome'
        />
        <input
          type='url'
          value={this.state.inputFoto}
          onChange={this.handleFoto}
          placeholder='URL foto do perfil'
        />
        <input
          type='url'
          value={this.state.inputImagem}
          onChange={this.handleImagem}
          placeholder='URL imagem do post'
        />
        </InputContainer>
        <button onClick={this.adicionarPost}>Enviar</button>
        {this.renderizarPosts()}
      </MainContainer>
    );
  }
}

export default App;
