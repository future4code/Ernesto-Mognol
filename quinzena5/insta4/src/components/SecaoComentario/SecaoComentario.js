import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		valorComentario: "",
	}

	onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
		console.log(event.target.value)
	};
	render() {
		return <div>
			<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorComentariovalorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
		<h4>Texto: {this.state.valorComentario}</h4>
		</div>
		
	}
}
