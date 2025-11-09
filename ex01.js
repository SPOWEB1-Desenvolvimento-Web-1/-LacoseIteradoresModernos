/*
Verificador de Estoque (Foco: for...of): 

A gerente de um pequeno armazém precisa de um script rápido para verificar seu inventário. Ela 
tem uma lista com as quantidades de vários produtos e precisa saber quantos deles estão com 
estoque baixo, precisando de reposição. 

Crie um programa que analise uma lista de quantidades de produtos. O programa deve comparar 
cada item da lista com um número mínimo estabelecido. Ao final, ele deve exibir no console o 
número total de produtos que estão com a quantidade abaixo desse mínimo.
*/ 


const valorminimo = 5;

const produtos = [
    { nome: "Macarrão", quantidade: 10},
    { nome: "Arroz", quantidade: 1},
    { nome: "Feijão", quantidade: 2},
    { nome: "Açúcar", quantidade: 7},
    { nome: "Bolacha Maizena", quantidade: 5}
]

for (let produto of produtos){
    if (produto.quantidade < valorminimo){
        console.log(
            produto.nome, /* ex: Macarrão*/ 
            "está com o estoque baixo \n Quantidade atual:", 
            produto.quantidade /* ex: 10*/ 
        );
    }
}