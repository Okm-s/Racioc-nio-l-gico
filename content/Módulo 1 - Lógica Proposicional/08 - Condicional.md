> Conectivo. Anterior: [[07 - Disjunção Exclusiva]] · Próximo: [[09 - Bicondicional]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

## Definição

O condicional afirma uma **relação entre uma condição e uma consequência**: se $P$ acontece, então $Q$ acontece.

## Símbolo e leitura

$P \to Q$ — lê-se **"se P, então Q"**.

## Exemplo: a promessa do professor

> "Se você estudar, então você passa." — promessa que muitos professores fazem.

Vamos ver quando podemos chamá-los de mentirosos. Em termos lógicos:

- $P$ = Você estuda.
- $Q$ = Você passa.

## Tabela-verdade

|  P  |  Q  | P → Q |
| :-: | :-: | :---: |
|  V  |  V  |   V   |
|  V  |  F  |   F   |
|  F  |  V  |   V   |
|  F  |  F  |   V   |

## Análise linha a linha

1. **Estudou e passou** → promessa cumprida. Professor honesto. **(V)**
2. **Estudou e não passou** → aqui você pode chamá-lo de mentiroso: fez o que ele disse e não atingiu o resultado. **(F)**
3. **Não estudou e passou** → você nem fez o que ele pediu, então ele não quebrou a promessa. Salvo. **(V)**
4. **Não estudou e não passou** → é a hora do "eu te avisei". Ele está certo também. **(V)**

> [!important] O único caso falso
> O condicional **só é falso** quando você faz a condição ($P$ verdadeiro) e **não** obtém o resultado ($Q$ falso): a linha **V → F**.
>
> Muitos vendedores de curso ganham dinheiro assim: quando você não passa, dizem que foi porque você "não fez direito".

## Negação

A negação de $P \to Q$ é $P \land \neg Q$ — "P acontece, mas Q não acontece". É exatamente o cenário da linha falsa. Veja [[12 - Negação de Proposições Compostas]].

---

Quando a relação vale **nos dois sentidos**, temos o [[09 - Bicondicional]].
