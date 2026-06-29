> Pré-requisito: [[01 - Sentença e Proposição]]  
> Próximo: [[03 - Relações Lógicas e Conectivos]]  
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Para que serve

A tabela-verdade organiza os valores possíveis de uma proposição.

Exemplo:

**Deus existe.**

Na lógica, isso vira:

$P$

E $P$ só pode assumir dois valores:

|$P$|
|:-:|
|V|
|F|

## Número de linhas

Cada proposição tem duas possibilidades:

**V** ou **F**.

Com $n$ proposições, a tabela tem:

$2^n$ linhas.

|Proposições|Linhas|
|:-:|:-:|
|1|2|
|2|4|
|3|8|
|4|16|

## Tabela-base

Com uma proposição:

|$P$|
|:-:|
|V|
|F|

Com duas proposições:

|$P$|$Q$|
|:-:|:-:|
|V|V|
|V|F|
|F|V|
|F|F|

Com três proposições:

|$P$|$Q$|$R$|
|:-:|:-:|:-:|
|V|V|V|
|V|V|F|
|V|F|V|
|V|F|F|
|F|V|V|
|F|V|F|
|F|F|V|
|F|F|F|

> [!tip] Regra prática  
> Mude uma proposição por vez.
> 
> Cada linha representa um cenário possível.

A partir dessa base, analisamos as relações lógicas com [[03 - Relações Lógicas e Conectivos]].

---

## Pratique

**Questão.** Quantas linhas tem a tabela-verdade de uma proposição composta com 5 proposições simples?

a) 10  
b) 16  
c) 25  
d) 32  
e) 64

> [!success]- Gabarito  
> **Letra d.** Com $n$ proposições, a tabela tem $2^n$ linhas. Com $n=5$: $2^5 = 32$.