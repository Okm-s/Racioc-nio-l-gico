> Tópico do edital · Anterior: [[17 - Implicação Lógica]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

> [!warning] Conteúdo além da fonte
> Esta nota **não** vem das suas notas originais. Foi acrescentada para cobrir os itens **"argumentos válidos"** e **"problemas com tabelas e argumentação"** do edital. A ferramenta de verificação é a [[02 - Tabela-verdade]], já ensinada.

## O que é um argumento

Um **argumento** é um conjunto de **premissas** (proposições dadas como verdadeiras) que levam a uma **conclusão**.

```
Premissa 1
Premissa 2
─────────────
∴ Conclusão
```

## Argumento válido

Um argumento é **válido** quando, **sempre que todas as premissas forem verdadeiras, a conclusão também é verdadeira**. Ou seja: é **impossível** ter todas as premissas verdadeiras e a conclusão falsa.

> [!important] Validade ≠ verdade
> Validade é sobre a **forma** do raciocínio, não sobre os fatos. Um argumento pode ser válido com premissas falsas — o que importa é se a conclusão **decorre** das premissas. (Liga-se à [[17 - Implicação Lógica]]: o argumento é válido quando a conjunção das premissas **implica** a conclusão.)

## Método da tabela-verdade

O jeito mais seguro de testar — exatamente o tipo de "problema com tabela" que o edital cobra:

1. Monte a [[02 - Tabela-verdade]] com todas as proposições.
2. Localize as linhas em que **todas as premissas** são verdadeiras.
3. Olhe a conclusão **só nessas linhas**:
   - conclusão V em **todas** elas → argumento **válido**;
   - conclusão F em **pelo menos uma** → argumento **inválido** (essa linha é o **contraexemplo**).

**Exemplo — Modus Ponens:** premissas $P \to Q$ e $P$; conclusão $Q$.

| P | Q | $P \to Q$ | $P$ | $Q$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | **V** | **V** | **V** |
| V | F | F | V | F |
| F | V | V | F | V |
| F | F | V | F | F |

Só a 1ª linha tem as duas premissas V — e nela a conclusão é V. **Válido.**

## Regras de inferência clássicas (válidas)

| Nome | Premissas | Conclusão |
| --- | --- | --- |
| Modus Ponens | $P \to Q$ ; $P$ | $Q$ |
| Modus Tollens | $P \to Q$ ; $\neg Q$ | $\neg P$ |
| Silogismo hipotético | $P \to Q$ ; $Q \to R$ | $P \to R$ |
| Silogismo disjuntivo | $P \lor Q$ ; $\neg P$ | $Q$ |

## Falácias comuns (argumentos inválidos)

Cuidado com estes — parecem certos, mas são **inválidos**:

| Falácia | Premissas | Conclusão (errada) | Por quê |
| --- | --- | --- | --- |
| Afirmação do consequente | $P \to Q$ ; $Q$ | $P$ | Contraexemplo: $P$ falso, $Q$ verdadeiro. |
| Negação do antecedente | $P \to Q$ ; $\neg P$ | $\neg Q$ | Contraexemplo: $P$ falso, $Q$ verdadeiro. |

> [!tip] Atalho
> $P \to Q$ garante ir de $P$ para $Q$, **não** o contrário. Concluir $P$ a partir de $Q$, ou negar $Q$ a partir de $\neg P$, é furada.

## Argumentos com "todo / algum" — use diagramas de Venn

Quando o argumento usa [[10 - Quantificadores|quantificadores]] ("todo A é B", "algum A é B", "nenhum A é B"), a tabela-verdade não basta — desenha-se a relação entre os conjuntos.

> [!note] 🔗 Validar silogismo desenhando
> "Todo A é B" vira a [[Conjuntos - 03 Inclusão, Igualdade e Partes|inclusão]] $A \subset B$; "nenhum A é B" vira conjuntos disjuntos; "algum A é B" vira [[Conjuntos - 04 Operações com Conjuntos|interseção]] não vazia. O argumento é **válido** se a conclusão for **forçada** em **todo** desenho possível das premissas; se existir um desenho que respeite as premissas mas negue a conclusão, é **inválido** (esse desenho é o contraexemplo). Ferramenta: [[Conjuntos - 05 Problemas com Diagramas de Venn|diagramas de Venn]]. 📎 [[Q5P3]]

---

Fim dos tópicos do edital. Volte ao índice: [[Apostila de Lógica Proposicional]].
