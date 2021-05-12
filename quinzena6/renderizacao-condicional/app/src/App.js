import React from 'react';
import styled from 'styled-components'
import Etapa1 from './components/etapa1'
import Etapa2 from './components/etapa2'
import Etapa3 from './components/etapa3'
import Final from './components/final'

const Body = styled.div`
width: 60vw;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`
const BotaoEnviar = styled.button`
margin-top: 16px;
width: 10em;
height: 2em;
border-radius: 1em;
border: 1px solid black;
`

class App extends React.Component  {
  state = {
    etapa: 1,
  }
  renderizarPagina = (valorEtapa) => {
    switch(valorEtapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />
      default:
        return <Etapa1 />
    }
  }
  acrescentarEtapa = () => {
    this.setState ({etapa: this.state.etapa + 1})
  }
  render(){
    return (
      <Body>
        {this.renderizarPagina(this.state.etapa)}
        <BotaoEnviar onClick = {() => this.acrescentarEtapa()}>PRÓXIMA ETAPA</BotaoEnviar>
      </Body>
    )
  }
}

export default App;