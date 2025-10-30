# -LacoseIteradoresModernos
Semana 2 (06/10 a 12/10)

<ul>
<li><b>for...in:</b> Serve para pegar os valores de uma lista (array, string, etc), usa quando você quer o valor não o número da posição (index).</li>

<i> const frutas = ["maçã", "banana", "uva"];<br>
<br>
for (let f of frutas) {<br>
  console.log(f);<br>
} 
<br><br>
/ <br>
maçã <br>
banana <br>
uva <br>
<i>
<br>

<li><b>for...of:</b>  para percorrer propriedades de um objeto.
Serve pra pegar as chaves ou índices (nomes das propriedades ou posições), ele olha o nome de cada coisa dentro de um objeto ou o número da posição em um array.</li><br>
<a> const pessoa = { nome: "Ana", idade: 17 };<br>
for (let chave in pessoa) { <br>
  console.log(chave, "=", pessoa[chave]);<br>
} <br>
    /nome = Ana<br>
    idade = 17<br>
</a>

<br>
<li><b>forEach:</b> função especial dos arrays que executa algo pra cada item, usa quando quer fazer uma ação pra cada item, tipo mostrar, somar, multiplicar, etc. Mas não dá pra parar o loop com break — ele roda até o fim.
</li><br>
<a>
const cores = ["azul", "verde", "amarelo"];<br>
<br>
cores.forEach((cor, i) => {<br>
  console.log(i, cor);<br>
}); <br>
 / 0 azul<br>
1 verde <br>
2 amarelo<br>

</a>

</ul>