> Pré-requisito: nenhum. Próximo: [[02 - Tabela-verdade]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Por que simbolizar?

Trabalhar com lógica em linguagem natural pode parecer muito mais complexo do que se imagina. Podemos cair na tentação de começar a questionar o sentido da vida. Para evitar isso, **transformamos sentenças em símbolos**.

Veja a afirmação **"Deus existe."** — por si só já é um caso polêmico, e isso tira o foco do que realmente importa. A lógica **não é subjetiva**, e é justamente para isso que ela serve.

## As duas definições centrais

- **Sentença** → é a frase escrita ou falada.
- **Proposição** → é o **conteúdo lógico** da frase, desde que possa ser classificado como **verdadeiro ou falso**.

> [!tip] Regra de ouro
> Se a frase **não pode** receber o rótulo "verdadeiro" ou "falso", ela **não é uma proposição**. Ordens, perguntas e desejos ficam de fora.

## Casos que **não** são proposição

| Exemplo                | Tipo            | Por quê não é proposição                |
| ---------------------- | --------------- | --------------------------------------- |
| "Feche a janela."      | Ordem           | Ordem não tem valor de verdade.         |
| "Você estudou ontem?"  | Pergunta        | Pergunta não é verdadeira nem falsa.    |
| "Tomara que chova."    | Desejo          | Expressa vontade, não afirmação.        |
| "x é maior que 10."    | Sentença aberta | Depende do valor de x.                  |

## Casos que **dependem** de critério

Sentenças avaliativas ("João é feio", "Pedro é alto") só viram proposição quando existe um **critério definido**:

| Exemplo                                                  | É proposição? | Motivo                                    |
| ------------------------------------------------------- | ------------- | ----------------------------------------- |
| "João é feio."                                          | Depende       | Só vale se houver critério para "feio".   |
| "João é feio para Maria."                               | Sim           | Verdadeira/falsa dentro da opinião dela.  |
| "João recebeu nota estética 4 numa escala de 0 a 10."   | Sim           | Há um critério verificável.               |
| "Pedro é alto."                                         | Depende       | Precisa de critério para "alto".          |
| "Pedro é alto para uma criança de 8 anos."              | Sim           | O critério ficou mais definido.           |

## Casos que **são** proposição

| Exemplo                                  | Tipo                        |
| ---------------------------------------- | --------------------------- |
| "A água ferve a 100 °C ao nível do mar." | Declarativa                 |
| "Pedro tem mais de 1,80 m."              | Declarativa                 |
| "Todo quadrado tem quatro lados."        | Universal → [[10 - Quantificadores]] |
| "Algum aluno faltou hoje."               | Existencial → [[10 - Quantificadores]] |
| "Nenhum peixe é mamífero."               | Universal negativa          |
| "Está chovendo e não está chovendo."     | [[11 - Tautologia e Contradição\|Contradição]] (é proposição, mas falsa) |
| "Ou Ana venceu ou Bruno venceu."         | [[07 - Disjunção Exclusiva]] |
| "Se chover, a rua molha."                | [[08 - Condicional]]        |

## O caso especial: o paradoxo

| Exemplo               | Tipo     | Motivo                                                    |
| --------------------- | -------- | -------------------------------------------------------- |
| "Esta frase é falsa." | Paradoxo | Gera contradição ao tentar atribuir verdade ou falsidade. |

---

A partir do momento em que temos uma proposição, podemos analisar seu valor lógico de forma organizada com a [[02 - Tabela-verdade]].
