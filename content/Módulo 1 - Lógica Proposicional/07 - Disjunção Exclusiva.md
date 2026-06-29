> Conectivo. Anterior: [[06 - Disjunção]] · Próximo: [[08 - Condicional]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Definição

Na disjunção exclusiva, os valores das duas proposições **não podem ser iguais**. Ou seja: é verdadeira quando **exatamente uma** delas é verdadeira — nunca as duas, nunca nenhuma.

Diferente da [[06 - Disjunção]] comum (inclusiva), aqui o "ou… ou…" **exclui** a possibilidade de ambas serem verdadeiras.

## Símbolo e leitura

$P \oplus Q$ — lê-se **"ou P ou Q"**.

## Tabela-verdade

|  P  |  Q  | P ⊕ Q |
| :-: | :-: | :---: |
|  V  |  V  |   F   |
|  V  |  F  |   V   |
|  F  |  V  |   V   |
|  F  |  F  |   F   |

## Exemplos

- "Ou um número é par **ou** é ímpar."
- "Numa moeda, ou cai cara **ou** cai coroa."
- "Ou Ana venceu ou Bruno venceu."

## Negação

A negação de $P \oplus Q$ é o [[09 - Bicondicional]] $P \leftrightarrow Q$ — "P e Q têm o mesmo valor". Faz sentido: se a exclusiva exige valores **diferentes**, negá-la é exigir valores **iguais**. Veja [[12 - Negação de Proposições Compostas]].

---

## Pratique

**Questão.** Se P e Q têm o mesmo valor lógico (ambas V ou ambas F), o valor de $P \oplus Q$ é sempre:

a) Verdadeiro  
b) Falso  
c) Indeterminado  
d) Igual ao de $P \to Q$  
e) Igual ao de $P \leftrightarrow Q$

> [!success]- Gabarito  
> **Letra b.** A disjunção exclusiva exige valores diferentes entre P e Q. Se os valores são iguais, o resultado é falso.

---

Próximo conectivo: [[08 - Condicional]].
