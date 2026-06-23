# 12 - Negação de Proposições Compostas

> Anterior: [[11 - Tautologia e Contradição]] · Fim da apostila.
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

Esta nota reúne, num único lugar, **como negar cada forma lógica**. É a consolidação da tabela mestra vista em [[03 - Relações Lógicas e Conectivos]].

## Tabela de negações

|     | Forma lógica          | Negação lógica        | Exemplo                            | Negação do exemplo                               |
| :-: | :-------------------: | :-------------------: | ---------------------------------- | ------------------------------------------------ |
|  1  | $P$                   | $\neg P$              | Está chovendo.                     | Não está chovendo.                               |
|  2  | $\neg P$              | $P$                   | Não está chovendo.                 | Está chovendo.                                   |
|  3  | $P \land Q$           | $\neg P \lor \neg Q$  | Está chovendo e ventando.          | Não está chovendo ou não está ventando.          |
|  4  | $P \lor Q$            | $\neg P \land \neg Q$ | Está chovendo ou ventando.         | Não está chovendo e não está ventando.           |
|  5  | $P \oplus Q$          | $P \leftrightarrow Q$ | Ou João venceu ou Maria venceu.    | João e Maria venceram ou nenhum dos dois venceu. |
|  6  | $P \to Q$             | $P \land \neg Q$      | Se estudo, passo.                  | Estudo e não passo.                              |
|  7  | $P \leftrightarrow Q$ | $P \oplus Q$          | Passo se e somente se estudo.      | Passo sem estudar ou estudo e não passo.         |
|  8  | $\forall x,P(x)$      | $\exists x,\neg P(x)$ | Todo aluno passou.                 | Algum aluno não passou.                          |
|  9  | $\exists x,P(x)$      | $\forall x,\neg P(x)$ | Algum aluno passou.                | Nenhum aluno passou.                             |
| 10  | $\nexists x,P(x)$     | $\exists x,P(x)$      | Não existe aluno aprovado.         | Existe aluno aprovado.                           |
| 11  | $\bot$                | $\top$                | Está chovendo e não está chovendo. | Não há contradição.                              |
| 12  | $\top$                | $\bot$                | Todo solteiro é não casado.        | Algum solteiro é casado.                         |

## Padrões que vale memorizar

- **Negação dupla** (1–2): negar duas vezes volta ao original → [[04 - Negação]].
- **"E" vira "ou", "ou" vira "e"** (3–4): ao negar, o conectivo troca **e** a negação entra em cada parte → [[05 - Conjunção]] e [[06 - Disjunção]].
- **Exclusiva ↔ Bicondicional** (5 e 7): negar "valores diferentes" dá "valores iguais", e vice-versa → [[07 - Disjunção Exclusiva]] e [[09 - Bicondicional]].
- **Condicional** (6): negar "se P então Q" é afirmar "P, mas não Q" — o único caso falso da tabela → [[08 - Condicional]].
- **Quantificadores** (8–10): inverte o "quanto" e nega a propriedade → [[10 - Quantificadores]].
- **Extremos** (11–12): tautologia e contradição negam-se mutuamente → [[11 - Tautologia e Contradição]].

---

Fim da apostila. Voltar ao [[Apostila de Lógica Proposicional|índice]].
