import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 25%;
    align-items: center;
    padding: 16px;
`

const Input = styled.input`
    width: 50%;
    height: 10%;
    margin-bottom: 8px;
`
const SendButton = styled.button`
    margin-top: 32px;
    width: 80px;
    height: 25px;
`
export default class CreatePage extends React.Component {
    render() {
        return (
            <InputContainer>
                <h2>CRIE A SUA PLAYLIST</h2>
                <h3>Digite o nome da sua playlist:</h3>
                <Input
                    value={this.props.PlaylistNameInput}
                    onChange={this.props.onChangePlaylistNameInput}
                    placeholder="Playlist..." />
                <SendButton onClick={this.props.onClickSendButton}>ENVIAR</SendButton>
            </InputContainer>
        )
    }
}