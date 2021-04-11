/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Seja bem-vindo ao jogo de BlackJack!")

if(confirm("Você quer iniciar um novo jogo?")){
   console.log("Iniciando nova rodada!")
   console.log("Distribuindo cartas...")
   const cartaJogador1 = comprarCarta()
   const cartaJogador2 = comprarCarta()
   const cartasJogador = cartaJogador1.valor + cartaJogador2.valor
   console.log("       Suas cartas: "+ cartaJogador1.texto + cartaJogador2.texto + "  - Pontuação: " + cartasJogador)
   const cartaMaquina1 = comprarCarta()
   const cartaMaquina2 = comprarCarta()
   const cartasMaquina = cartaMaquina1.valor + cartaMaquina2.valor
   console.log("       Cartas da Casa: "+ cartaMaquina1.texto + cartaMaquina2.texto + "  - Pontuação: " + cartasMaquina)
   if(cartasJogador > cartasMaquina){
      console.log("Parabéns! Você venceu a mesa!")
      console.log("Atualize a página caso queira jogar novamente!")
   }
   else if(cartasJogador == 21){
      console.log("Blackjack! Você venceu a mesa!")
      console.log("Atualize a página caso queira jogar novamente!")
   }
   else if(cartasJogador == cartasMaquina){
      console.log("Na trave! Você empatou com a mesa!")
      console.log("Atualize a página caso queira jogar novamente!")
   }
   else{
      console.log("Que pena! A mesa ganhou de você!")
      console.log("Atualize a página caso queira jogar novamente!")
   }
}
else{
   console.log("Obrigado por participar!")
   console.log("Atualize a página caso queira jogar novamente!")
}
