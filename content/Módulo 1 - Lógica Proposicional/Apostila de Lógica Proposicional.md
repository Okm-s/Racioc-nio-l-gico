> Mapa de conteúdo (MOC) da apostila. Esta é a porta de entrada: cada item abaixo leva a uma nota que cobre um pedaço do assunto. A ordem é pedagógica — se for estudar do zero, siga de cima para baixo.

A ideia central de toda a lógica proposicional é uma só: **transformar frases da linguagem natural em símbolos que possam ser classificados como verdadeiros ou falsos**, para tirar a subjetividade da análise.

---

## 🗺️ Roteiro de estudo

### Parte 1 — Fundamentos
1. [[01 - Sentença e Proposição]] — o que pode (e o que não pode) ser analisado pela lógica.
2. [[02 - Tabela-verdade]] — a ferramenta que organiza todos os cenários possíveis.
3. [[03 - Relações Lógicas e Conectivos]] — visão geral de como ligar proposições.

### Parte 2 — Os conectivos lógicos
4. [[04 - Negação]] — $\neg P$
5. [[05 - Conjunção]] — $P \land Q$ (e)
6. [[06 - Disjunção]] — $P \lor Q$ (ou)
7. [[07 - Disjunção Exclusiva]] — $P \oplus Q$ (ou… ou…)
8. [[08 - Condicional]] — $P \to Q$ (se… então…)
9. [[09 - Bicondicional]] — $P \leftrightarrow Q$ (se e somente se)

### Parte 3 — Indo além
10. [[10 - Quantificadores]] — $\forall$, $\exists$, $\nexists$
11. [[11 - Tautologia e Contradição]] — proposições sempre verdadeiras e sempre falsas
12. [[12 - Negação de Proposições Compostas]] — como negar cada conectivo

### Parte 4 — Banco de questões (com gabarito)
Treino com progressão de dificuldade, 50 questões por nível, no estilo das provas:
13. [[13 - Banco de Questões — Nível 1 (Fundamentos)]] — reconhecer, ler símbolos, definições
14. [[14 - Banco de Questões — Nível 2 (Intermediário)]] — negar compostas, montar colunas, quantificadores
15. [[15 - Banco de Questões — Nível 3 (Avançado)]] — expressões com 2-3 proposições, equivalências, problemas

### Parte 5 — Tópicos do edital
> ⚠️ As notas abaixo foram acrescentadas para cobrir o edital ("equivalência e implicação lógica; argumentos válidos") com conteúdo padrão da lógica matemática, usando a mesma ferramenta já ensinada: a tabela-verdade.

16. [[16 - Equivalência Lógica]] — $P \equiv Q$ (mesma coluna; De Morgan, contrapositiva)
17. [[17 - Implicação Lógica]] — $P \Rightarrow Q$ (condicional que é tautologia)
18. [[18 - Argumentos Válidos]] — premissas → conclusão, regras de inferência, falácias

---

## 📊 Tabela-resumo dos conectivos

| Conectivo            | Símbolo               | Leitura                | Verdadeiro quando…                  |
| -------------------- | --------------------- | ---------------------- | ----------------------------------- |
| Negação              | $\neg P$              | não P                  | $P$ é falso                         |
| Conjunção            | $P \land Q$           | P e Q                  | ambos verdadeiros                   |
| Disjunção            | $P \lor Q$            | P ou Q                 | pelo menos um verdadeiro            |
| Disjunção exclusiva  | $P \oplus Q$          | ou P ou Q              | valores diferentes                  |
| Condicional          | $P \to Q$             | se P então Q           | só é falso quando V → F             |
| Bicondicional        | $P \leftrightarrow Q$ | P se e somente se Q    | valores iguais                      |

---

## 🔢 Quantos cenários existem?

O número de linhas de uma [[02 - Tabela-verdade]] depende da quantidade de proposições: multiplica-se **2 para cada proposição** ($2^n$).

- 1 proposição → $2$ linhas
- 2 proposições → $2 \times 2 = 4$ linhas
- 3 proposições → $2 \times 2 \times 2 = 8$ linhas