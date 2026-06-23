---
aliases:
  - Combinação
  - Permutação
  - Arranjo
---
> Anterior: [[Princípio fundamental da contagem]] · Próximo: [[probabilidade]] · Índice: [[Apostila de Análise Combinatória e Probabilidade]]

> [!important] São atalhos do PFC
> As três fórmulas abaixo **não substituem** o [[Princípio fundamental da contagem|PFC]] — são ele já resolvido e empacotado, para você ganhar tempo. A dedução de cada uma (só com PFC) está na [[Princípio fundamental da contagem|nota anterior]]. Esqueceu a fórmula na prova? Volte ao PFC: conta etapa por etapa e, se a ordem não importa, divide pelo excesso.

## Fatorial

$$n! = n \times (n-1) \times (n-2) \times \cdots \times 1$$
> $5! = 5\times4\times3\times2\times1 = 120$. Por convenção, $0! = 1$.

## A pergunta-chave: a ordem importa?

| Caso | Quando usar | Fórmula |
| --- | --- | --- |
| **Permutação** | usar **todos** os elementos, mudando a ordem | $P_n = n!$ |
| **Arranjo** | escolher $p$ de $n$ e a **ordem importa** | $A_{n,p} = \dfrac{n!}{(n-p)!}$ |
| **Combinação** | escolher $p$ de $n$ e a **ordem não importa** | $C_{n,p} = \dfrac{n!}{p!\,(n-p)!}$ |

> [!tip] Arranjo × Combinação
> - Ordem **importa** (senha, pódio, fila) → **arranjo**.
> - Ordem **não importa** (comissão, grupo, escolha de frutas) → **combinação**.

## Exemplos

- **Permutação:** de quantos modos 4 pessoas formam fila? $P_4 = 4! = 24$.
- **Arranjo:** pódio (1º, 2º, 3º) entre 5 atletas? $A_{5,3} = \frac{5!}{2!} = 60$.
- **Combinação:** comissão de 3 entre 5 pessoas? $C_{5,3} = \frac{5!}{3!\,2!} = 10$.

> [!warning] Pegadinha do enunciado
> A palavra "combinação" no dia a dia nem sempre é o $C_{n,p}$. Numa placa/senha **a ordem importa e há repetição** → usa-se o [[Princípio fundamental da contagem]], não a fórmula de combinação. [[Q2P2]]

---

Sabendo contar os casos, calculamos chances: [[probabilidade]].
