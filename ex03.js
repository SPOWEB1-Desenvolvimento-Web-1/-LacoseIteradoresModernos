/* 
Filtro de Convidados VIP (Foco: forEach): 

Para um evento exclusivo, o sistema de marketing precisa enviar uma mensagem especial para 
todos os convidados cujo nome começa com uma letra específica. 

Desenvolva um programa que analise uma lista de nomes de convidados. O programa deve 
verificar cada nome na lista e, para aqueles que começam com a letra designada, exibir uma 
mensagem personalizada no console, como: "Enviando convite especial para: [nome do 
convidado]".
*/

const letra= "J";

const nomes = [
    "Ana",
    "Jessica",
    "Thais",
    "Jeferson",
    "Luis"
]

nomes.forEach((nome)=> {
  if (nome[0]==="J" || /* ou = || */  nome[0] /* nome[0] acessa a primeira letra de uma string*/  === "j"){
    console.log("Enviando convite especial para:", nome)
  }
});