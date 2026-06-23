---
aliases: [mdc, mmc, máximo divisor comum, mínimo múltiplo comum]
---
> Anterior: [[Aritmética - 08 Múltiplos, Divisores e Divisibilidade]] · Próximo: [[Aritmética - 10 Banco de Questões]] · Índice: [[Apostila de Aritmética]]

## MDC — Máximo Divisor Comum

O **maior** número que divide dois (ou mais) números ao mesmo tempo.

> $D(12) = \{1,2,3,4,6,12\}$, $D(18) = \{1,2,3,6,9,18\}$. Comuns: $\{1,2,3,6\}$ → **mdc$(12,18) = 6$**.

> [!warning] É o MAIOR, não o menor (pegadinha da Q1 da Prova 2)
> O mdc é o **maior** divisor comum. Dizer "menor" está errado. 📎 [[Q1P2]]

**Uso típico:** repartir em grupos iguais "o maior possível" (cortar barras no maior pedaço comum, etc.).

## MMC — Mínimo Múltiplo Comum

O **menor** múltiplo comum (diferente de zero) de dois ou mais números.

> $M(4) = \{0,4,8,12,16,\dots\}$, $M(6) = \{0,6,12,18,\dots\}$. Menor comum $\neq 0$: **mmc$(4,6) = 12$**.

**Uso típico:** eventos que se repetem e "se encontram" (sinaleiras, voltas, datas que coincidem).

## Método da fatoração simultânea

Divida os dois números juntos pelos primos:

$$
\begin{array}{rr|l}
12 & 18 & 2 \\
6 & 9 & 2 \\
3 & 9 & 3 \\
1 & 3 & 3 \\
1 & 1 &
\end{array}
$$

- **MMC** = produto de **todos** os primos usados: $2\times2\times3\times3 = 36$.
- **MDC** = produto dos primos que dividiram **os dois ao mesmo tempo** (linhas onde ambos eram pares de divisão): $2\times3 = 6$.

## A relação que cai em prova

$$a \times b = \text{mdc}(a,b) \times \text{mmc}(a,b)$$

> Confere: $12 \times 18 = 216$ e $6 \times 36 = 216$. ✅ 📎 [[Q1P2]] (assertiva II).

---

Pratique no [[Aritmética - 10 Banco de Questões]].
