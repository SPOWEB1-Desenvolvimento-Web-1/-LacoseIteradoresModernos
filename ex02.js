/*
Gerador de Ficha Técnica (Foco: for...in):

Um sistema de uma editora de livros precisa exibir uma "Ficha Técnica" na página de detalhes de 
um produto. Essa ficha deve ser gerada automaticamente, listando todas as informações 
disponíveis sobre o livro. 

Crie um programa que recebe um objeto contendo os detalhes de um livro (como título, autor, 
ano, etc.). O programa deve ser capaz de ler todas as propriedades deste objeto e exibi-las de 
forma formatada no console, no padrão "propriedade: valor", sem saber previamente quais são 
os nomes das propriedades.

*/

const LivrosDetalhes = {
    titulo: "harry potter e a pedra filosofal",
    autor: "J.K. Rowling",
    ano: 1997,
    editora: "Rocco",
    genero: "Fantasia",
    paginas: 223
}


for (let propriedade in LivrosDetalhes){
    console.log(
        propriedade /*acessa o nome da propriedade do objeto, ex: titulo*/,":", 
        LivrosDetalhes[propriedade]/*acessa o valor da propriedade do objeto, ex: harry potter e a pedra filosofal*/
    ); 
}