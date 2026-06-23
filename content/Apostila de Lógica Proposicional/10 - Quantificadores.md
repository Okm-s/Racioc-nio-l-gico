# 10 - Quantificadores

> Anterior: [[09 - Bicondicional]] · Próximo: [[11 - Tautologia e Contradição]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

Os quantificadores indicam **a quantos elementos** uma propriedade $P(x)$ se aplica. Eles aparecem em sentenças universais e existenciais (veja exemplos em [[01 - Sentença e Proposição]]).

## Os três quantificadores

| Símbolo            | Nome             | Leitura                                    |
| ------------------ | ---------------- | ------------------------------------------ |
| $\forall x,P(x)$   | Universal        | Todo x tem a propriedade P                  |
| $\exists x,P(x)$   | Existencial      | Existe pelo menos um x com a propriedade P  |
| $\nexists x,P(x)$  | Inexistencial    | Não existe x com a propriedade P            |

## Como negar cada um

Negar um quantificador **inverte o "quanto"** e nega a propriedade:

| Forma             | Negação               | Leitura da negação                          |
| ----------------- | --------------------- | ------------------------------------------- |
| $\forall x,P(x)$  | $\exists x,\neg P(x)$ | Existe pelo menos um x **sem** a propriedade |
| $\exists x,P(x)$  | $\forall x,\neg P(x)$ | **Nenhum** x tem a propriedade               |
| $\nexists x,P(x)$ | $\exists x,P(x)$      | Existe pelo menos um x com a propriedade     |

## Exemplos

| Afirmação                     | Negação                       |
| ----------------------------- | ----------------------------- |
| Todo aluno passou.            | Algum aluno não passou.       |
| Algum aluno passou.           | Nenhum aluno passou.          |
| Não existe aluno aprovado.    | Existe aluno aprovado.        |

> [!tip] Atenção ao negar "todo"
> A negação de "**todo** aluno passou" **não** é "nenhum aluno passou", e sim "**algum** aluno não passou". Basta um contraexemplo para derrubar uma afirmação universal.

> [!note] 🔗 Quantificadores e conjuntos (diagramas de Venn)
> "**Todo** A é B" é a [[Conjuntos - 03 Inclusão, Igualdade e Partes|inclusão]] $A \subset B$; "**algum** A é B" é a [[Conjuntos - 04 Operações com Conjuntos|interseção]] $A \cap B \neq \varnothing$; "**nenhum** A é B" são conjuntos disjuntos. Por isso silogismos com "todo/algum" se resolvem desenhando [[Conjuntos - 05 Problemas com Diagramas de Venn|diagramas de Venn]]. 📎 [[Q5P3]]

---

Esses padrões de negação fazem parte da [[12 - Negação de Proposições Compostas|tabela mestra de negações]]. Seguimos para os casos extremos: [[11 - Tautologia e Contradição]].
