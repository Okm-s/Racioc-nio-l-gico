# 03 - Relações Lógicas e Conectivos

> Pré-requisito: [[02 - Tabela-verdade]]. Próximo: [[04 - Negação]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

Depois de saber montar a [[02 - Tabela-verdade]], passamos a **relacionar** proposições. Para isso usamos os **conectivos lógicos**.

Vamos usar duas proposições de exemplo ao longo da apostila:

- $P$ = Deus existe.
- $Q$ = Acredito em Deus.

## A primeira relação: a negação

A relação mais simples é a [[04 - Negação|negação]]. Dada a proposição $P$, chamamos sua negação de $\neg P$ (ou $\sim P$). Ela **troca o valor lógico**:

|  P  | ¬P  |
| :-: | :-: |
|  V  |  F  |
|  F  |  V  |

> A negação de "Deus existe" é "Deus não existe" — ou qualquer variação que mantenha o sentido, como "Não existe Deus".

## Mapa dos conectivos

| Conectivo                       | Símbolo               | Leitura             |
| ------------------------------- | --------------------- | ------------------- |
| [[04 - Negação]]                | $\neg P$              | não P               |
| [[05 - Conjunção]]              | $P \land Q$           | P e Q               |
| [[06 - Disjunção]]              | $P \lor Q$            | P ou Q              |
| [[07 - Disjunção Exclusiva]]    | $P \oplus Q$          | ou P ou Q           |
| [[08 - Condicional]]            | $P \to Q$             | se P então Q        |
| [[09 - Bicondicional]]          | $P \leftrightarrow Q$ | P se e somente se Q |

## Tabela mestra (forma, leitura e negação)

Esta tabela reúne cada forma lógica, como lê-la e qual é a sua **negação** — base da nota [[12 - Negação de Proposições Compostas]].

|     | Forma lógica          | Leitura                                    | Negação lógica        | Leitura da negação                         |
| :-: | :-------------------: | :----------------------------------------: | :-------------------: | :----------------------------------------: |
|  1  | $P$                   | P é verdadeiro                             | $\neg P$              | P não é verdadeiro                         |
|  2  | $\neg P$              | P é falso                                  | $P$                   | P é verdadeiro                             |
|  3  | $P \land Q$           | P e Q são verdadeiros                      | $\neg P \lor \neg Q$  | P é falso ou Q é falso                     |
|  4  | $P \lor Q$            | P ou Q é verdadeiro, podendo ser ambos     | $\neg P \land \neg Q$ | P é falso e Q é falso                      |
|  5  | $P \oplus Q$          | P ou Q é verdadeiro, mas não ambos         | $P \leftrightarrow Q$ | P e Q têm o mesmo valor                    |
|  6  | $P \to Q$             | Se P acontece, então Q acontece            | $P \land \neg Q$      | P acontece, mas Q não acontece             |
|  7  | $P \leftrightarrow Q$ | P acontece se e somente se Q acontece      | $P \oplus Q$          | Um acontece e o outro não                  |
|  8  | $\forall x,P(x)$      | Todo x tem a propriedade P                 | $\exists x,\neg P(x)$ | Existe pelo menos um x sem a propriedade P |
|  9  | $\exists x,P(x)$      | Existe pelo menos um x com a propriedade P | $\forall x,\neg P(x)$ | Nenhum x tem a propriedade P               |
| 10  | $\nexists x,P(x)$     | Não existe x com a propriedade P           | $\exists x,P(x)$      | Existe pelo menos um x com a propriedade P |
| 11  | $\bot$                | [[11 - Tautologia e Contradição\|Contradição]] | $\top$            | [[11 - Tautologia e Contradição\|Tautologia]] |
| 12  | $\top$                | [[11 - Tautologia e Contradição\|Tautologia]]  | $\bot$            | [[11 - Tautologia e Contradição\|Contradição]] |

> As linhas 8 a 10 envolvem [[10 - Quantificadores]]; as 11 e 12, casos extremos tratados em [[11 - Tautologia e Contradição]].

---

A seguir, conectivo por conectivo, começando pela [[04 - Negação]].
