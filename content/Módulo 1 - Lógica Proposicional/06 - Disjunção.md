> Conectivo. Anterior: [[05 - Conjunção]] · Próximo: [[07 - Disjunção Exclusiva]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Definição

A disjunção liga duas proposições com o **"ou"**. Ela é **verdadeira quando pelo menos uma** das proposições é verdadeira — **podendo ser ambas**. Só é falsa quando as duas são falsas.

> [!warning] Não confunda
> Este "ou" é **inclusivo** (admite as duas ao mesmo tempo). Quando o "ou" exclui a possibilidade de ambas, usa-se a [[07 - Disjunção Exclusiva]].

## Símbolo e leitura

$P \lor Q$ — lê-se **"P ou Q"** ("P ou Q é verdadeiro, podendo ser ambos").

## Tabela-verdade

|  P  |  Q  | P ∨ Q |
| :-: | :-: | :---: |
|  V  |  V  |   V   |
|  V  |  F  |   V   |
|  F  |  V  |   V   |
|  F  |  F  |   F   |

## Exemplo

"Está chovendo **ou** ventando" é verdadeiro se estiver chovendo, se estiver ventando, ou se as duas coisas acontecerem.

## Negação

A negação de $P \lor Q$ é $\neg P \land \neg Q$ — "P é falso **e** Q é falso". Veja [[12 - Negação de Proposições Compostas]].

## Caso especial: a tautologia

A disjunção de uma proposição com a sua própria negação, $P \lor \neg P$, é **sempre verdadeira**. Esse é o exemplo clássico de [[11 - Tautologia e Contradição|tautologia]].

> [!note] 🔗 Disjunção é a união dos conjuntos
> O "**ou**" inclusivo da lógica corresponde à **união** $\cup$ na [[Conjuntos - 04 Operações com Conjuntos|teoria dos conjuntos]]: "x cumpre P **ou** Q" é o mesmo que "x está em $A \cup B$". E a [[04 - Negação|negação]] corresponde ao **complementar** $\overline{A}$ — por isso as [[12 - Negação de Proposições Compostas|leis de De Morgan]] valem nos dois mundos.

---

Próximo conectivo: [[07 - Disjunção Exclusiva]].
