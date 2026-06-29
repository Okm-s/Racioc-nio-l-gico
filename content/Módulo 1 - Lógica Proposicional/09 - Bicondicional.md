> Conectivo. Anterior: [[08 - Condicional]] · Próximo: [[10 - Quantificadores]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Definição

O bicondicional segue uma ideia parecida com o [[08 - Condicional]]: ele liga duas proposições, mas só é **verdadeiro quando elas têm o mesmo valor lógico**.

Podemos interpretá-lo como o condicional que deve ser verdadeiro **na ida e na volta**.

## Símbolo e leitura

$P \leftrightarrow Q$ — lê-se **"P se e somente se Q"**.

## Tabela-verdade

|  P  |  Q  | P ↔ Q |
| :-: | :-: | :---: |
|  V  |  V  |   V   |
|  V  |  F  |   F   |
|  F  |  V  |   F   |
|  F  |  F  |   V   |

É verdadeiro nas linhas em que $P$ e $Q$ coincidem (V-V e F-F).

## Exemplo

"Passo **se e somente se** estudo." — só é verdadeiro se as duas coisas andarem juntas: estudei e passei, ou não estudei e não passei.

## Negação

A negação de $P \leftrightarrow Q$ é a [[07 - Disjunção Exclusiva]] $P \oplus Q$ — "um acontece e o outro não". Coerente: se o bicondicional exige valores **iguais**, negá-lo é exigir valores **diferentes**. Veja [[12 - Negação de Proposições Compostas]].

---

## Pratique

**Questão.** A frase "Você é aprovado se, e somente se, obtém nota mínima" é falsa exatamente quando:

a) você é aprovado e obtém a nota mínima  
b) você não é aprovado e não obtém a nota mínima  
c) você é aprovado mas não obtém a nota mínima, ou o contrário  
d) você obtém a nota mínima, independente de ser aprovado  
e) nunca é falsa

> [!success]- Gabarito  
> **Letra c.** O bicondicional é falso quando P e Q têm valores diferentes (V-F ou F-V) — ser aprovado sem nota mínima, ou ter nota mínima sem ser aprovado.

---

Encerrados os conectivos, seguimos para os [[10 - Quantificadores]].
