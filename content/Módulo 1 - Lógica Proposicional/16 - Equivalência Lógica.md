# 16 - Equivalência Lógica

> Tópico do edital · Próximo: [[17 - Implicação Lógica]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

> [!warning] Conteúdo além da fonte
> Esta nota **não** vem das suas notas originais da pasta *Lógica Proposicional*. Ela foi acrescentada para cobrir o item **"equivalência e implicação lógica"** do edital, com o conteúdo padrão da lógica matemática. O método de verificação, porém, é o mesmo já ensinado: a [[02 - Tabela-verdade]].

## Definição

Duas proposições são **logicamente equivalentes** quando têm a **mesma coluna na tabela-verdade** — ou seja, o mesmo valor lógico em **todos** os cenários possíveis.

Símbolo: $P \equiv Q$ (também se escreve $P \Leftrightarrow Q$).

> [!tip] Ligação com o bicondicional
> $P \equiv Q$ acontece exatamente quando o [[09 - Bicondicional]] $P \leftrightarrow Q$ é uma [[11 - Tautologia e Contradição|tautologia]] (verdadeiro em todas as linhas).

## Como verificar

1. Monte a [[02 - Tabela-verdade]] das duas proposições.
2. Compare as colunas finais.
3. Se forem **idênticas** linha a linha → são equivalentes. Se diferirem em **uma** linha → não são.

**Exemplo:** $P \to Q$ e $\neg P \lor Q$ (ordem VV, VF, FV, FF):

| P | Q | $P \to Q$ | $\neg P \lor Q$ |
|:-:|:-:|:-:|:-:|
| V | V | V | V |
| V | F | F | F |
| F | V | V | V |
| F | F | V | V |

Colunas iguais (**VFVV**) → $P \to Q \equiv \neg P \lor Q$.

## Principais equivalências

| Nome | Equivalência |
| --- | --- |
| Dupla negação | $\neg\neg P \equiv P$ |
| Comutativa | $P \land Q \equiv Q \land P$  ;  $P \lor Q \equiv Q \lor P$ |
| Associativa | $(P \land Q) \land R \equiv P \land (Q \land R)$ |
| Distributiva | $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$ |
| **De Morgan** | $\neg(P \land Q) \equiv \neg P \lor \neg Q$  ;  $\neg(P \lor Q) \equiv \neg P \land \neg Q$ |
| Condicional | $P \to Q \equiv \neg P \lor Q$ |
| Contrapositiva | $P \to Q \equiv \neg Q \to \neg P$ |
| Bicondicional | $P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$ |

> [!note] Você já viu isso sem o nome
> As regras de **De Morgan** são exatamente as "trocas" de negação que aparecem na [[12 - Negação de Proposições Compostas|tabela de negações]] e na estratégia da [[04 - Negação]]: negar "e" vira "ou" (e nega as partes), e vice-versa. Aqui elas ganham nome formal.

## Equivalência × Negação

Cuidado: a **negação** de uma proposição **inverte** a coluna; a **equivalente** **repete** a coluna. São coisas opostas.

- $\neg P$ → coluna trocada.
- $P' \equiv P$ → mesma coluna.

---

A equivalência é uma "ida e volta". Quando vale só **um** sentido, temos a [[17 - Implicação Lógica]].
