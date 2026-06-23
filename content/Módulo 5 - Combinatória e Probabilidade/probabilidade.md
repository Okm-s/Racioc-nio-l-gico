# Probabilidade

> Parte da [[Apostila de Análise Combinatória e Probabilidade]] · Anterior: [[Combinatória - 02 Permutação, Arranjo e Combinação]] · Próximo: [[Combinatória - 04 Princípio da Casa dos Pombos]]

## A fórmula

A probabilidade de um evento é a razão entre os casos que **interessam** e **todos** os casos possíveis (quando todos são igualmente prováveis):

$$P(\text{evento}) = \dfrac{\text{casos favoráveis}}{\text{casos possíveis}}$$

O resultado vai de $0$ (impossível) a $1$ (certo), e pode virar **porcentagem** ($\times 100$).

> Exemplo: dado comum, sair número par → favoráveis $\{2,4,6\} = 3$, possíveis $= 6$ → $P = \frac{3}{6} = \frac{1}{2} = 50\%$.

## Contando os casos

Os "casos possíveis" e "favoráveis" saem do [[Princípio fundamental da contagem]] ou de uma [[Árvore de probabilidades.canvas|árvore de possibilidades]].

### Exemplo resolvido (modelo da Q3 da Prova 2)

Moeda lançada 3 vezes; chance de **cara no 1º e no 3º** lançamento.

- Total: $2 \times 2 \times 2 = 8$ resultados.
- Favoráveis: 1º fixo cara, 3º fixo cara, 2º livre → $1 \times 2 \times 1 = 2$.
- $P = \dfrac{2}{8} = \dfrac{1}{4} = 25\%$.

> 📎 [[Q3P2]] (resposta: 25%).

## Regrinhas úteis

- **Evento complementar:** $P(\text{não A}) = 1 - P(A)$.
- **Eventos independentes** (um não afeta o outro): multiplica → $P(A \text{ e } B) = P(A)\times P(B)$.

> [!note] 🔗 Probabilidade é porcentagem
> A probabilidade sai entre $0$ e $1$ e vira **porcentagem** multiplicando por 100 ($\frac{1}{4} = 25\%$). É o mesmo número escrito de outro jeito — veja [[Aritmética - 11 Porcentagem]]. O complementar $1 - P(A)$ é o "os outros 100% − P(A)".

---

Um princípio de contagem que garante repetição: [[Combinatória - 04 Princípio da Casa dos Pombos]].
