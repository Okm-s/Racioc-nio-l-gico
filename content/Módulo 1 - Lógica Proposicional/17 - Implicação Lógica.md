> Tópico do edital · Anterior: [[16 - Equivalência Lógica]] · Próximo: [[18 - Argumentos Válidos]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

> [!warning] Conteúdo além da fonte
> Esta nota **não** vem das suas notas originais. Foi acrescentada para cobrir o item **"equivalência e implicação lógica"** do edital. A verificação usa a [[02 - Tabela-verdade]] e o [[08 - Condicional]], já ensinados.

## Definição

$P$ **implica logicamente** $Q$ quando o [[08 - Condicional]] $P \to Q$ é uma [[11 - Tautologia e Contradição|tautologia]] — isto é, **nunca** ocorre $P$ verdadeiro com $Q$ falso.

Símbolo: $P \Rightarrow Q$.

## Condicional ($\to$) × Implicação ($\Rightarrow$)

Essa é a confusão mais comum. A diferença:

| | Condicional $P \to Q$ | Implicação $P \Rightarrow Q$ |
| --- | --- | --- |
| O que é | um **conectivo** que forma uma proposição | uma **relação** entre proposições |
| Valor | pode ser V **ou** F | só existe quando $P \to Q$ é **sempre V** |
| Resumo | operação | condicional que é tautologia |

Ou seja: a implicação é o condicional "garantido" — verdadeiro em todos os cenários.

## Como verificar

1. Monte a [[02 - Tabela-verdade]] de $P \to Q$.
2. Se a coluna for **toda V** → $P \Rightarrow Q$ (implica).
3. Se aparecer **algum F** → não implica.

**Exemplo:** $P \land Q \Rightarrow P$ ?

| P | Q | $P \land Q$ | $(P \land Q) \to P$ |
|:-:|:-:|:-:|:-:|
| V | V | V | V |
| V | F | F | V |
| F | V | F | V |
| F | F | F | V |

Coluna toda **V** → sim, $P \land Q \Rightarrow P$.

## Implicação × Equivalência

A [[16 - Equivalência Lógica|equivalência]] é uma **implicação dupla**:

$$P \equiv Q \quad\Longleftrightarrow\quad (P \Rightarrow Q) \ \text{e} \ (Q \Rightarrow P)$$

Se a implicação vale **só num sentido**, é implicação simples; se vale **nos dois**, é equivalência.

---

A implicação lógica é a base para julgar se um raciocínio está correto: veja [[18 - Argumentos Válidos]].
