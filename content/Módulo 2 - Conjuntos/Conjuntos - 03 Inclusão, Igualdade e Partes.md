> Anterior: [[Conjuntos - 02 Tipos de Conjuntos]] · Próximo: [[Conjuntos - 04 Operações com Conjuntos]] · Índice: [[Apostila de Conjuntos]]

## Inclusão e subconjuntos: $\subset$

Um conjunto $A$ está **contido** em $B$ quando **todo** elemento de $A$ também é elemento de $B$. Dizemos que $A$ é **subconjunto** de $B$:

$$A \subset B \quad\Longleftrightarrow\quad \text{todo } x \in A \text{ tem } x \in B$$

- $\subseteq$ — contido (admite $A = B$).
- $\supset$ — contém ($B \supset A$ é o mesmo que $A \subset B$).

> Exemplo: $\{1, 2\} \subset \{1, 2, 3\}$.

> [!warning] $\in$ × $\subset$
> - $\in$ liga **elemento** a conjunto: $2 \in \{1,2,3\}$.
> - $\subset$ liga **conjunto** a conjunto: $\{2\} \subset \{1,2,3\}$.

Dois fatos que sempre valem:
- $\varnothing \subset A$ (o vazio é subconjunto de qualquer $A$).
- $A \subset A$ (todo conjunto é subconjunto de si mesmo).

## Igualdade de conjuntos

$A = B$ quando têm **exatamente os mesmos elementos** — ou seja, $A \subset B$ **e** $B \subset A$.

## Conjunto das partes: $P(A)$

O **conjunto das partes** de $A$ é o conjunto de **todos os subconjuntos** de $A$ (inclui $\varnothing$ e o próprio $A$).

> Exemplo: $A = \{1, 2\}$ →
> $$P(A) = \{\ \varnothing,\ \{1\},\ \{2\},\ \{1,2\}\ \}$$

**Quantos subconjuntos?** Se $A$ tem $n$ elementos, então:
$$n(P(A)) = 2^n$$

> [!tip] É o mesmo $2^n$ da tabela-verdade
> Cada elemento "entra ou não entra" no subconjunto — duas opções por elemento — igualzinho ao número de linhas da [[02 - Tabela-verdade|tabela-verdade]]. Ex.: $n = 3 \Rightarrow 2^3 = 8$ subconjuntos.

---

Com conjuntos comparados, vamos combiná-los: [[Conjuntos - 04 Operações com Conjuntos]].

---

## Pratique

**Questão.** Se $A$ tem 4 elementos, quantos subconjuntos tem $P(A)$?

a) 4  
b) 8  
c) 12  
d) 16  
e) 32

> [!success]- Gabarito  
> **Letra d.** $n(P(A)) = 2^n$. Com $n=4$: $2^4 = 16$ subconjuntos.
