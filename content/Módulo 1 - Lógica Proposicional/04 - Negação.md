> Conectivo. Anterior: [[03 - Relações Lógicas e Conectivos]] · Próximo: [[05 - Conjunção]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Definição

A negação é a relação lógica mais simples. Dada a proposição $P$, chamamos sua negação de $\neg P$ (também escrita $\sim P$).

A negação **troca o valor lógico** da proposição: o que era verdadeiro vira falso, e vice-versa.

## Símbolo e leitura

$\neg P$ — lê-se **"não P"** / "P é falso".

## Tabela-verdade

|  P  | ¬P  |
| :-: | :-: |
|  V  |  F  |
|  F  |  V  |

## Exemplo

Sendo $P$ = "Deus existe":

- $\neg P$ = "Deus **não** existe" — ou qualquer variação que mantenha o sentido, como "Não existe Deus".

> [!note] Negação dupla
> Negar a negação devolve a proposição original: a negação de $\neg P$ é o próprio $P$ (linhas 1 e 2 da tabela mestra em [[03 - Relações Lógicas e Conectivos]]).

## Estratégia para identificar a negação

Negar uma sentença — em símbolo ou em frase — segue sempre os **mesmos 3 passos**:

> [!tip] Passo a passo
> **1. Traduza para símbolos.** Identifique as proposições simples ($P$, $Q$) e o **conectivo principal** que as liga.
> **2. Aplique a regra de negação** daquele conectivo (tabela abaixo).
> **3. Traduza de volta** para o português, mantendo o sentido.

> [!warning] A dica que mais economiza tempo
> No passo 1, **não perca tempo julgando se a frase faz sentido** para você. A lógica olha só a estrutura. (É exatamente o raciocínio da Q2 da Prova 1: a frase da cobra é estranha, mas o que importa é que ela tem a forma $P \lor Q$.)

### As "trocas" de cada conectivo

Cada conectivo tem um padrão fixo de negação. Decore as trocas:

| Sentença (forma) | Negação | Como a troca acontece |
| --- | --- | --- |
| não $P$ ($\neg P$) | $P$ | a negação **cancela** |
| $P$ **e** $Q$ ($P \land Q$) | $\neg P$ **ou** $\neg Q$ | "e" vira "ou" **e** nega cada parte |
| $P$ **ou** $Q$ ($P \lor Q$) | $\neg P$ **e** $\neg Q$ | "ou" vira "e" **e** nega cada parte |
| **se** $P$ **então** $Q$ ($P \to Q$) | $P$ **e** $\neg Q$ | mantém $P$, nega $Q$, vira "e" |
| $P$ **se e somente se** $Q$ ($P \leftrightarrow Q$) | **ou** $P$ **ou** $Q$ ($P \oplus Q$) | "mesmo valor" vira "valores diferentes" |
| **ou** $P$ **ou** $Q$ ($P \oplus Q$) | $P$ **se e somente se** $Q$ | "valores diferentes" vira "mesmo valor" |
| **todo** x ($\forall x$) | **algum** x **não** ($\exists x,\neg$) | "todo" vira "algum… não" |
| **algum** x ($\exists x$) | **nenhum** x ($\forall x,\neg$) | "algum" vira "nenhum" |
| **não existe** x ($\nexists x$) | **existe** x ($\exists x$) | "não existe" vira "existe" |

> [!note] Três atalhos para memorizar
> - **"E" ⇄ "OU"** ao negar — e nega-se cada pedaço (regra das duas primeiras linhas).
> - **Condicional**: como o $P \to Q$ só é falso quando $P$ ocorre e $Q$ não, negar é justamente afirmar **"$P$ e não $Q$"**.
> - **Bicondicional ⇄ Exclusiva**: um pede valores iguais, o outro valores diferentes — negar um dá o outro.

### Exemplo aplicado

Negar **"Se estudo, então passo."**

1. **Símbolos:** $P$ = "estudo", $Q$ = "passo". Conectivo principal: "se… então" → $P \to Q$.
2. **Regra:** a negação de $P \to Q$ é $P \land \neg Q$.
3. **De volta ao português:** **"Estudo e não passo."**

Repare que **não** se nega o "se… então" inteiro virando outro "se… então" — a forma muda para um "e". Para ver cada conectivo com seus exemplos completos, vá para [[12 - Negação de Proposições Compostas]].

---

A negação também é a chave para negar proposições compostas — veja [[12 - Negação de Proposições Compostas]]. Em seguida: [[05 - Conjunção]].
