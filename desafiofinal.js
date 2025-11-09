/*
Desafio Final: O Inventário Detalhado do Robô Dex (A "Historinha"): 
Em Tecnoville, o robô R9 do armazém ganhou um novo assistente, o Dex, um robô-inventariante 
super detalhista. A primeira tarefa de Dex é escanear uma caixa de componentes eletrônicos e 
gerar um relatório de inventário em três partes. 

A Missão de Dex: 
Crie um programa que simule o relatório de Dex. O relatório final no console deve conter: 
    1.Primeiro, uma lista detalhada de cada componente na caixa. Para cada componente, o 
relatório deve exibir todas as suas propriedades (nome, categoria, etc.) e os respectivos 
valores. 
    2.Durante essa verificação, se a quantidade de qualquer componente for menor que 5, o 
sistema de Dex deve emitir um alerta separado e imediato no console para aquele item. 
    3.Por fim, para o registro de segurança do armazém, o relatório deve listar, um por um, 
apenas os números de série de todos os componentes que estavam na caixa. 

Observação: a solução deve conter: for...of, for...in, forEach 
*/

console.log("Detalhes do componente:");
const caixa = [
    { nome: "teclado", categoria:"perifericos", quantidade:20, numeroSerie: 122},
    { nome: "alexia", categoria:"ia", quantidade: 15, numeroSerie: 123},
    { nome: "mouse", categoria:"perifericos", quantidade: 12, numeroSerie:124},
    { nome: "google assistente", categoria:"ia", quantidade: 15, numeroSerie: 125}
]; 

const valorminimo = 5;
caixa.forEach((item)=>{

    console.log("---------------------");
   for (let propriedade in item){
    console.log(propriedade,item[propriedade]);
} 
    if (item.quantidade<valorminimo){
        console.log("ALERTA!!",item.nome,":está com o estoque baixo \n Quantidade atual:", item.quantidade);
    }
}); 

console.log("---------------------");
console.log("Números de série dos componentes:");

for (let componente of caixa){
    console.log("Numero de serie do",componente.nome,":",componente.numeroSerie);
}