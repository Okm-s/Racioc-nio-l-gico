# Conjuntos - 04 Operações com Conjuntos

> Anterior: [[Conjuntos - 03 Inclusão, Igualdade e Partes]] · Próximo: [[Conjuntos - 05 Problemas com Diagramas de Venn]] · Índice: [[Apostila de Conjuntos]]

Quatro operações combinam conjuntos. Repare o paralelo com os [[03 - Relações Lógicas e Conectivos|conectivos lógicos]]: **união ↔ "ou"**, **interseção ↔ "e"**, **complementar ↔ "não"**.

## União: $A \cup B$

Tudo que está em $A$ **ou** em $B$ (ou em ambos).
$$A \cup B = \{x \mid x \in A \ \textbf{ou} \ x \in B\}$$
> $\{1,2,3\} \cup \{3,4\} = \{1,2,3,4\}$ (o 3 não se repete).

## Interseção: $A \cap B$

Só o que está em $A$ **e** em $B$ ao mesmo tempo.
$$A \cap B = \{x \mid x \in A \ \textbf{e} \ x \in B\}$$
> $\{1,2,3\} \cap \{3,4\} = \{3\}$.

Se $A \cap B = \varnothing$, os conjuntos são **disjuntos** (não têm elemento em comum).

## Diferença: $A - B$

O que está em $A$ e **não** está em $B$.
$$A - B = \{x \mid x \in A \ \textbf{e} \ x \notin B\}$$
> $\{1,2,3\} - \{3,4\} = \{1,2\}$. Atenção: $A - B \neq B - A$.

## Complementar: $\overline{A}$

Dado o [[Conjuntos - 02 Tipos de Conjuntos|conjunto universo]] $U$, o **complementar** de $A$ é tudo em $U$ que **não** está em $A$:
$$\overline{A} = U - A$$

## Número de elementos (a fórmula que cai em prova)

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

Subtrai-se $n(A \cap B)$ porque quem está nos dois foi **contado duas vezes**. Essa é a chave dos [[Conjuntos - 05 Problemas com Diagramas de Venn|problemas de Venn]].

> [!note] De Morgan também vale aqui
> Igual à [[12 - Negação de Proposições Compostas|lógica]]: $\overline{A \cup B} = \overline{A} \cap \overline{B}$ e $\overline{A \cap B} = \overline{A} \cup \overline{B}$.

---

Hora de aplicar em contagem: [[Conjuntos - 05 Problemas com Diagramas de Venn]].
