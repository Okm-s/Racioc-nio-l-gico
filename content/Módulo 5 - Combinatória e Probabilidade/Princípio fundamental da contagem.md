> Parte da [[Apostila de Análise Combinatória e Probabilidade]] · Próximo: [[Combinatória - 02 Permutação, Arranjo e Combinação]]

> [!important] O princípio que resolve TUDO
> O PFC é a base de **toda** a contagem. Permutação, arranjo e combinação **não são ferramentas novas** — são o PFC já resolvido e guardado numa fórmula, só para **economizar tempo**. Se você aplicar o PFC com cuidado, resolve qualquer questão **sem decorar fórmula**.

## A regra do produto

Se uma decisão tem **etapas independentes**, o total de possibilidades é o **produto** do número de opções de cada etapa.

$$\text{total} = (\text{opções da etapa 1}) \times (\text{opções da etapa 2}) \times \cdots$$

> Exemplo: 3 camisas e 2 calças → $3 \times 2 = 6$ jeitos de se vestir.

> [!tip] Monte casinhas
> Desenhe uma casa para cada posição, escreva quantas opções cada uma tem e **multiplique**. Valor fixo = **1 possibilidade** (não confunda com o número 1).

## Aplicar do jeito certo: as opções podem mudar a cada etapa

O segredo está em perguntar, a cada casa: **"quantas opções ainda tenho aqui?"**

- **Com repetição** → as opções continuam cheias.
  > Senha de 3 dígitos podendo repetir: $10 \times 10 \times 10 = 1000$.
- **Sem repetição** → as opções **diminuem** porque o que já foi usado sai.
  > Senha de 3 dígitos **distintos**: $10 \times 9 \times 8 = 720$.

## Exemplo resolvido — placa Mercosul (com repetição)

Placa $L_1L_2L_3N_1L_4N_2N_3$ (L = letra, 26 opções; N = algarismo, 10 opções), com $L_1 = A$, $L_4 = B$, $N_2 = 1$, $N_3 = 5$ fixos e repetição permitida:

| $L_1$ | $L_2$ | $L_3$ | $N_1$ | $L_4$ | $N_2$ | $N_3$ |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | 26 | 26 | 10 | 1 | 1 | 1 |

$$1 \times 26 \times 26 \times 10 \times 1 \times 1 \times 1 = 6\,760$$

> 📎 [[Q2P2]] (resposta: 6.760). Cuidado: a palavra "combinação" no enunciado **não** é o cálculo de combinação — aqui é só PFC.

## O PFC sozinho resolve permutação, arranjo e combinação

Veja os três "tipos clássicos" resolvidos **só com o PFC** — sem fórmula:

### Fila (o que chamam de *permutação*)
De quantos modos **4 pessoas** formam uma fila?
Casa 1: 4 opções · Casa 2: 3 (uma já sentou) · Casa 3: 2 · Casa 4: 1.
$$4 \times 3 \times 2 \times 1 = 24$$
*(Isto é o $P_n = n!$.)*

### Pódio (o que chamam de *arranjo*)
Pódio de 1º, 2º e 3º entre **5 atletas** (ordem importa):
$$5 \times 4 \times 3 = 60$$
*(Isto é o $A_{5,3}$.)*

### Comissão (o que chamam de *combinação*)
Comissão de **3 entre 5 pessoas**, onde a **ordem não importa**:
1. Conte como se a ordem **importasse** (PFC): $5 \times 4 \times 3 = 60$.
2. Mas cada comissão foi contada **várias vezes** — uma para cada ordem das 3 pessoas. Três pessoas se organizam de $3 \times 2 \times 1 = 6$ maneiras.
3. Então **divida** pelo excesso: $60 \div 6 = 10$.

$$\frac{5 \times 4 \times 3}{3 \times 2 \times 1} = 10$$
*(Isto é o $C_{5,3}$.)*

> [!tip] A regra de ouro do PFC
> 1. Conte **etapa por etapa**, multiplicando — cuidando se há repetição (opções cheias) ou não (opções diminuem).
> 2. Se a **ordem não importa**, **divida** pelo número de ordens que você contou a mais.
>
> Com esses dois passos, você resolve permutação, arranjo, combinação e qualquer caso misto — tudo é PFC.

> [!note] Conexão com a tabela-verdade
> É a mesma ideia do $2^n$ das linhas da [[02 - Tabela-verdade|tabela-verdade]]: cada proposição tem 2 opções → multiplica.

---

As **fórmulas** são esse raciocínio já empacotado — úteis para ganhar tempo na prova. Veja a versão pronta em [[Combinatória - 02 Permutação, Arranjo e Combinação]].
