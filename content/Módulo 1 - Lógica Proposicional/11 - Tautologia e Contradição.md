> Anterior: [[10 - Quantificadores]] · Próximo: [[12 - Negação de Proposições Compostas]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

Algumas proposições têm valor lógico fixo **independentemente do cenário**. São os dois extremos: a tautologia (sempre verdadeira) e a contradição (sempre falsa). Uma é a **negação** da outra.

| Símbolo | Nome        | Valor lógico       |
| :-----: | ----------- | ------------------ |
| $\top$  | Tautologia  | sempre verdadeira  |
| $\bot$  | Contradição | sempre falsa       |

---

## Tautologia ($\top$)

> *"Ser ou não ser, eis a questão"* — Hamlet, de William Shakespeare

Na lógica, a tautologia é uma afirmação que é **sempre verdadeira, independentemente do cenário**.

Tomemos $P$ = "Deus existe" e sua negação $\neg P$ = "Deus não existe". Vamos analisar a proposição formada pela [[06 - Disjunção|disjunção]] $P \lor \neg P$:

|  P  | ¬P  | P ∨ ¬P |
| :-: | :-: | :----: |
|  V  |  F  |   V    |
|  F  |  V  |   V    |

Em **qualquer** caso o resultado é Verdadeiro. Isso é uma tautologia.

---

## Contradição ($\bot$)

A contradição é o oposto: uma proposição **sempre falsa**. Dada uma sentença $p$ e sua negação $\neg p$, a [[05 - Conjunção|conjunção]] $p \land \neg p$ é uma contradição.

|  P  | ¬P  | P ∧ ¬P |
| :-: | :-: | :----: |
|  V  |  F  |   F    |
|  F  |  V  |   F    |

Não há cenário possível em que essa conjunção seja verdadeira: **nada pode ser e não ser ao mesmo tempo**.

### O princípio do terceiro excluído

Para evitar inconsistências, a lógica apresenta o **Princípio do terceiro excluído** (ou **Princípio da não contradição**): *uma coisa não pode ser e não ser*.

Exemplos de inconsistência que esbarram nesse princípio:

1. "Um ser onipotente poderia criar uma pedra tão pesada que não conseguisse levantar?" → ser onipotente para criar a pedra **e** não ser para levantá-la.
2. "Não existe verdade absoluta." → a própria existência dessa afirmação já seria uma verdade absoluta.

---

## Resumo

- $P \lor \neg P$ → **tautologia** ($\top$): sempre V.
- $P \land \neg P$ → **contradição** ($\bot$): sempre F.
- Uma é a negação da outra (linhas 11 e 12 da tabela mestra em [[03 - Relações Lógicas e Conectivos]]).

---

Para fechar a apostila, veja como negar qualquer proposição composta: [[12 - Negação de Proposições Compostas]].

---

## Pratique

**Questão.** A proposição $P \land \neg P$ é:

a) tautologia, pois é sempre verdadeira  
b) contradição, pois é sempre falsa  
c) equivalente a $P \lor \neg P$  
d) verdadeira apenas quando P é verdadeiro  
e) impossível de avaliar

> [!success]- Gabarito  
> **Letra b.** $P \land \neg P$ nunca pode ser verdadeira: nada pode ser e não ser ao mesmo tempo. É o exemplo clássico de contradição ($\bot$).
