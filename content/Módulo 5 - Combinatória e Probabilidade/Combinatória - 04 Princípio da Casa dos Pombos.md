> Anterior: [[probabilidade]] · Próximo: [[Combinatória - 05 Banco de Questões]] · Índice: [[Apostila de Análise Combinatória e Probabilidade]]

## A ideia

> **Se há mais pombos do que casas, pelo menos uma casa recebe dois ou mais pombos.**

Formalmente: distribuindo $n$ objetos em $k$ caixas, se $n > k$, **alguma** caixa fica com **pelo menos 2** objetos. De modo geral, alguma caixa recebe pelo menos
$$\left\lceil \frac{n}{k} \right\rceil \ \text{objetos}$$
(o $\lceil\ \rceil$ arredonda **para cima**).

## Como reconhecer em prova

Aparece quando a questão pergunta "**no mínimo** quantos…", "**garantir** que…", "**necessariamente** alguém…". A tática:

> [!tip] Teste o pior caso
> Suponha que ninguém repita / que tudo fique o mais espalhado possível. Se mesmo assim **não dá**, é porque a repetição é forçada.

## Exemplo resolvido (modelo da Q8 da Prova 3)

7 professores elaboram 20 questões, cada um pelo menos 1. Mostre que alguém fez **≥ 3**.

- Se cada um fizesse no máximo 2 → total máximo $7 \times 2 = 14 < 20$. Impossível.
- Logo, alguém fez **3 ou mais** (de fato $\lceil 20/7 \rceil = 3$).

> [[Q8P3]] (resposta: no mínimo três).

---

Pratique no [[Combinatória - 05 Banco de Questões]].

---

## Pratique

**Questão.** Numa gaveta há meias de 3 cores diferentes. Qual é o número mínimo de meias que devem ser retiradas, sem olhar, para garantir um par da mesma cor?

a) 2  
b) 3  
c) 4  
d) 5  
e) 6

> [!success]- Gabarito  
> **Letra c.** 3 cores = 3 "casas". Com 3 meias, no pior caso, cada cor recebe exatamente 1 — sem par. A 4ª meia força a repetição de alguma cor.
