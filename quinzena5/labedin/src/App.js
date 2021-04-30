import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imgPessoal from './components/CardGrande/euzinho.png'
import ntSolar from './components/CardGrande/ntsolar.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import imgEmail from './components/CardPequeno/o-email.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imgPessoal} 
          nome="Ernesto Fauth" 
          descricao="Olá! Meu nome é Ernesto Fauth e sou Especialista em CAD/CAM e suporte técnico para NX e SolidEdge na Produttare Software. Minha função principal é auxiliar
           nossos clientes a terem boas experiências com os softwares da Siemens e enxugarem seus custos de produção."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem={imgEmail}
          texto="ernestofmognol@gmail.com"
        />

        <CardPequeno 
          imagem="https://www.flaticon.com/svg/vstatic/svg/3885/3885309.svg?token=exp=1619736739~hmac=895bd961acf4fbb3ec29bddee897191b"
          texto="Avenida Porto Alegre, 1234, apartamento 501"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQEPA5pkAxdLcQ/company-logo_200_200/0/1587755763542?e=1627516800&v=beta&t=2H6aBgsIV705touR8JpZFFIlygAMiAOTstMzH2wss-A" 
          nome="Produttare Software" 
          descricao="Elaboração de Prova de Conceito (POC), suporte direto ao cliente em pós-vendas, auxílio ao time comercial no processo de pré-vendas e prospecção de novos clientes." 
        />
        
        <CardGrande 
          imagem={ntSolar} 
          nome="NT-Solar" 
          descricao="Auxílio na pesquisa e desenvolvimento de novas tecnologias na área de células solares de silício finas do tipo n." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
