# 02 - Tabela-verdade

> Pré-requisito: [[01 - Sentença e Proposição]]. Próximo: [[03 - Relações Lógicas e Conectivos]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Para que serve

A tabela-verdade nos ajuda a avaliar o **valor lógico** de uma proposição **sem subjetividade**.

Pegue a sentença **"Deus existe."** Ela pode assumir valor lógico Verdadeiro (V) ou Falso (F). Nessa hora, é preciso deixar o emocional de lado.

Chamamos de $P$ a [[01 - Sentença e Proposição|proposição]] "Deus existe". A partir daí só há duas opções:

- $P$ é verdadeiro
- $P$ não é verdadeiro (ou seja, $P$ é falso)

Para economizar escrita e processamento cerebral, organizamos isso numa tabela:

| Deus existe.    |  P  |
| :-------------: | :-: |
| Deus existe.    |  V  |
| Deus não existe.|  F  |

Que resumimos para:

|  P  |
| :-: |
|  V  |
|  F  |

## Quantas linhas a tabela tem?

Cada proposição tem apenas **duas opções** (V ou F). Logo, descobrimos o número de linhas multiplicando **2 para cada proposição** adicionada — isto é, $2^n$:

| Nº de proposições | Conta              | Linhas |
| :---------------: | :----------------: | :----: |
| 1                 | $2$                | 2      |
| 2                 | $2 \times 2$       | 4      |
| 3                 | $2 \times 2 \times 2$ | 8   |

## Como preencher sem se confundir

Analise **uma proposição de cada vez**. A veracidade de uma não depende da outra.

> Exemplo: se $P$ é verdadeira, então $Q$ ainda pode ser V **ou** F. O mesmo vale se $P$ for falsa.

Com duas proposições, a tabela-base de todos os cenários é:

|  P  |  Q  |
| :-: | :-: |
|  V  |  V  |
|  V  |  F  |
|  F  |  V  |
|  F  |  F  |

---

É a partir daqui que começamos a estudar as [[03 - Relações Lógicas e Conectivos|relações lógicas]] por meio dos conectivos.
