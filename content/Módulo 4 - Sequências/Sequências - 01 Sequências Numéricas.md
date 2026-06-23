> Próximo: [[Sequências - 02 Sequências com Figuras e Palavras]] · Índice: [[Apostila de Sequências]]
> Origem: [[Sequência lógica]]

A estratégia básica: **olhar a relação entre termos vizinhos** (subtrair, dividir, comparar). Veja os padrões mais comuns.

## Progressão Aritmética (PA) — soma constante

Cada termo = anterior **+ razão** ($r$ fixo).
> $3, 6, 9, 12, \dots$ → soma $3$. Descobre-se subtraindo vizinhos: $6-3 = 3$.

Termo geral: $a_n = a_1 + (n-1)\cdot r$.

## Progressão Geométrica (PG) — multiplicação constante

Cada termo = anterior **× razão** ($q$ fixo).
> $2, 6, 18, 54, \dots$ → multiplica por $3$.

Termo geral: $a_n = a_1 \cdot q^{\,n-1}$.

> [!note] PG é potenciação em ação
> O termo geral da PG usa uma **potência** ($q^{n-1}$): avançar na sequência é multiplicar pela razão repetidamente — exatamente o que a [[Aritmética - 04 Potenciação e Radiciação|potenciação]] faz. Por isso PGs crescem (ou somem) tão rápido.

## Padrões que não se veem "batendo o olho"

| Padrão | Exemplo | Regra |
| --- | --- | --- |
| **Fibonacci** | $1,1,2,3,5,8,\dots$ | cada termo é a **soma dos dois anteriores** |
| **Diferenças que crescem** | $5,7,11,17,25,35$ | diferenças $2,4,6,8,10$ (crescem de 2 em 2) |
| **Quadrados/cubos** | $1,4,9,16,25$ | $n^2$ |
| **Alternância** | $-10, 8, -2, -6, \dots$ | operações ou sinais que se revezam |

## Método das diferenças (a tática que mais salva)

Escreva as diferenças entre termos consecutivos. Se elas formarem um padrão, você achou a regra.

> Exemplo (modelo da Q4 da Prova 1): $5,\ 7,\ 11,\ 17,\ ?,\ 35$.
> Diferenças: $2, 4, 6, \mathbf{8}, 10$. Então $? = 17 + 8 = 25$. [[Q4P1]]

> [!warning] Cuidado com o "padrão fácil"
> Um primeiro padrão pode funcionar nos primeiros termos e **falhar** depois. Sempre teste a regra até o último termo dado.

---

Quando o padrão é visual ou alfabético: [[Sequências - 02 Sequências com Figuras e Palavras]].
