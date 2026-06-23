> Banco de questões · Níveis: [[13 - Banco de Questões — Nível 1 (Fundamentos)|Nível 1]] · [[14 - Banco de Questões — Nível 2 (Intermediário)|Nível 2]] · **[Nível 3]**
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

Nível de prova. Aqui você combina vários conectivos: **avalia expressões com 2 e 3 proposições**, reconhece **equivalências lógicas**, faz **negações compostas mistas** e resolve **problemas em linguagem natural**. Gabarito recolhido abaixo de cada questão.

> [!info] Convenção das colunas
> Para 2 proposições, as linhas seguem a ordem de $(P,Q)$: **VV, VF, FV, FF**. Faça **uma coluna de cada vez** para não errar — exatamente como na resolução da Q3 da Prova 1.

Conteúdo cobrado: todos os conectivos, [[12 - Negação de Proposições Compostas]], [[11 - Tautologia e Contradição]], [[10 - Quantificadores]].

---

## Bloco A — Avaliar expressões (valores dados)

**1.** Sendo $P = V$, $Q = F$, $R = V$, o valor de $(P \land Q) \lor R$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $P \land Q = F$; $F \lor V = V$.

**2.** Sendo $P = V$, $Q = F$, $R = F$, o valor de $P \to (Q \lor R)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** $Q \lor R = F$; $V \to F = F$.

**3.** Sendo $P = F$, $Q = V$, $R = V$, o valor de $(P \lor Q) \land R$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $P \lor Q = V$; $V \land V = V$.

**4.** Sendo $P = V$, $Q = V$, $R = F$, o valor de $(P \land Q) \to R$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** $P \land Q = V$; $V \to F = F$.

**5.** Sendo $P = F$ e $Q = F$, o valor de $\neg P \to \neg Q$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $\neg P = V$, $\neg Q = V$; $V \to V = V$.

**6.** Sendo $P = V$ e $Q = F$, o valor de $\neg(P \to Q)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $P \to Q = F$; $\neg F = V$.

**7.** Sendo $P = V$, $Q = V$, $R = F$, o valor de $P \leftrightarrow (Q \land R)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** $Q \land R = F$; $V \leftrightarrow F = F$.

**8.** Sendo $P = F$ e $Q = V$, o valor de $(P \oplus Q) \land (P \to Q)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $P \oplus Q = V$ (diferentes); $P \to Q = V$ (F→V); $V \land V = V$.

**9.** Sendo $P = V$, $Q = F$, $R = V$, o valor de $(P \to Q) \lor (Q \to R)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $P \to Q = F$; $Q \to R = V$ (F→V); $F \lor V = V$.

**10.** Sendo $P = Q = R = V$, o valor de $\neg(P \land Q \land R)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** $P \land Q \land R = V$; $\neg V = F$.

---

## Bloco B — Montar colunas de expressões compostas

(Ordem: VV, VF, FV, FF.)

**11.** A coluna de $(P \to Q) \lor \neg P$ é:
a) VFVV  b) VVVV  c) VFFV  d) FVVV  e) VVVF
> [!success]- Gabarito
> **Letra a.** $P \to Q$ = VFVV; $\neg P$ = FFVV; "ou" → V,F,V,V = **VFVV**.

**12.** A coluna de $(P \land Q) \to P$ é:
a) VFVV  b) VVVV  c) VFFF  d) FFFV  e) VFFV
> [!success]- Gabarito
> **Letra b.** $P \land Q$ = VFFF; ao implicar $P$ (VVFF) o resultado é V em todas as linhas → **tautologia**.

**13.** A coluna de $P \land (Q \lor \neg Q)$ é:
a) VVVV  b) VVFF  c) VFVF  d) FFVV  e) VFFF
> [!success]- Gabarito
> **Letra b.** $Q \lor \neg Q$ é sempre V; logo a expressão vale o próprio $P$ → VVFF.

**14.** A coluna de $\neg(P \lor Q) \lor (P \land Q)$ é:
a) VFFV  b) VVVF  c) FVVF  d) VFVV  e) FFFV
> [!success]- Gabarito
> **Letra a.** $\neg(P \lor Q)$ = FFFV; $P \land Q$ = VFFF; "ou" → V,F,F,V. É a coluna do bicondicional.

**15.** A coluna de $(P \leftrightarrow Q) \oplus (P \to Q)$ é:
a) FFVF  b) VFFV  c) VFVV  d) FVVF  e) FFFF
> [!success]- Gabarito
> **Letra a.** $P \leftrightarrow Q$ = VFFV; $P \to Q$ = VFVV; "ou exclusivo" (linhas em que diferem) → F,F,V,F.

---

## Bloco C — Equivalências lógicas

**16.** $P \to Q$ é logicamente equivalente a:
a) $\neg P \lor Q$  b) $P \lor \neg Q$  c) $\neg P \land Q$  d) $Q \to P$  e) $P \land \neg Q$
> [!success]- Gabarito
> **Letra a.** Ambas têm a coluna VFVV.

**17.** $\neg(P \to Q)$ é equivalente a:
a) $\neg P \lor Q$  b) $P \land \neg Q$  c) $\neg P \land Q$  d) $P \to \neg Q$  e) $\neg P \lor \neg Q$
> [!success]- Gabarito
> **Letra b.** "P, mas não Q".

**18.** $\neg(P \land Q)$ é equivalente a:
a) $\neg P \land \neg Q$  b) $\neg P \lor \neg Q$  c) $P \lor Q$  d) $\neg P \to Q$  e) $P \leftrightarrow Q$
> [!success]- Gabarito
> **Letra b.** "e" vira "ou" ao negar.

**19.** $P \leftrightarrow Q$ é equivalente a:
a) $(P \to Q) \land (Q \to P)$  b) $P \oplus Q$  c) $P \lor Q$  d) $(P \to Q) \lor (Q \to P)$  e) $\neg P \land \neg Q$
> [!success]- Gabarito
> **Letra a.** O bicondicional é o condicional verdadeiro **na ida e na volta**. Veja [[09 - Bicondicional]].

**20.** $P \oplus Q$ é equivalente a:
a) $P \leftrightarrow Q$  b) $\neg(P \leftrightarrow Q)$  c) $P \land Q$  d) $P \lor Q$  e) $\neg P \land \neg Q$
> [!success]- Gabarito
> **Letra b.** A exclusiva é a negação do bicondicional.

**21.** A negação de $P \leftrightarrow Q$ é equivalente a:
a) $P \oplus Q$  b) $P \land Q$  c) $\neg P \leftrightarrow Q$  d) $P \to Q$  e) $\neg P \lor \neg Q$
> [!success]- Gabarito
> **Letra a.**

**22.** $\neg P \land \neg Q$ é exatamente a negação de:
a) $P \land Q$  b) $P \lor Q$  c) $P \to Q$  d) $P \oplus Q$  e) $P \leftrightarrow Q$
> [!success]- Gabarito
> **Letra b.** Negação da disjunção.

**23.** $P \to Q$ e $\neg P \lor Q$ são equivalentes porque ambos têm a coluna:
a) VFVV  b) VVVF  c) FVVV  d) VFFV  e) FFFV
> [!success]- Gabarito
> **Letra a.**

---

## Bloco D — Negações compostas em linguagem natural

**24.** A negação de "Estudo **e** passo" é:
a) Não estudo e não passo  b) Não estudo ou não passo  c) Estudo ou passo  d) Se estudo, passo  e) Estudo e não passo
> [!success]- Gabarito
> **Letra b.**

**25.** A negação de "Chove **ou** faz sol" é:
a) Não chove ou não faz sol  b) Não chove e não faz sol  c) Chove e faz sol  d) Se chove, faz sol  e) Chove e não faz sol
> [!success]- Gabarito
> **Letra b.**

**26.** A negação de "Se chover, a rua molha" é:
a) Se não chover, a rua não molha  b) Choveu e a rua não molhou  c) Não choveu e a rua molhou  d) A rua molha se chover  e) Não chove ou a rua molha
> [!success]- Gabarito
> **Letra b.** Negação do condicional: antecedente V, consequente F.

**27.** A negação de "Maria é médica **e** João é engenheiro" é:
a) Maria não é médica e João não é engenheiro  b) Maria não é médica ou João não é engenheiro  c) Maria é médica ou João é engenheiro  d) Se Maria é médica, João é engenheiro  e) Nenhuma das anteriores
> [!success]- Gabarito
> **Letra b.**

**28.** A negação de "**Ou** faço a prova **ou** viajo" (exclusiva) é:
a) Faço a prova e viajo, ou não faço nem viajo  b) Não faço a prova e não viajo  c) Faço a prova e não viajo  d) Se faço a prova, não viajo  e) Faço a prova ou viajo
> [!success]- Gabarito
> **Letra a.** Negar a exclusiva dá o bicondicional ("mesmo valor": ambos sim ou ambos não).

**29.** A negação de "Passo na prova **se e somente se** estudo" é:
a) Passo e estudo  b) Passo sem estudar, ou estudo e não passo  c) Não passo e não estudo  d) Se passo, estudo  e) Estudo e passo
> [!success]- Gabarito
> **Letra b.**

**30.** A negação de "**Todos** os gatos são pretos" é:
a) Nenhum gato é preto  b) Algum gato não é preto  c) Todos os gatos não são pretos  d) Existe gato preto  e) Alguns gatos são pretos
> [!success]- Gabarito
> **Letra b.** Contraexemplo. Veja [[10 - Quantificadores]].

**31.** A negação de "**Algum** político é honesto" é:
a) Todo político é honesto  b) Nenhum político é honesto  c) Algum político não é honesto  d) Existe político  e) Políticos são desonestos
> [!success]- Gabarito
> **Letra b.**

---

## Bloco E — Problemas em linguagem natural

**32.** *(A promessa do professor)* "Se você estudar, então passa." Você **estudou e não passou**. A promessa foi:
a) cumprida  b) quebrada (falsa)  c) verdadeira  d) tautológica  e) indefinida
> [!success]- Gabarito
> **Letra b.** É o único caso em que o condicional é falso. Veja [[08 - Condicional]].

**33.** Mesma promessa. Você **não estudou e passou**. A promessa:
a) foi quebrada  b) não foi quebrada (continua válida)  c) é falsa  d) é contradição  e) é impossível
> [!success]- Gabarito
> **Letra b.** Você nem cumpriu a condição; o professor não mentiu.

**34.** Mesma promessa. Em qual cenário o professor **mente**?
a) estudou e passou  b) estudou e não passou  c) não estudou e passou  d) não estudou e não passou  e) nunca mente
> [!success]- Gabarito
> **Letra b.**

**35.** "Numa moeda, ou cai cara ou cai coroa." Considerando os dois resultados possíveis, trata-se de:
a) conjunção  b) disjunção exclusiva  c) bicondicional  d) condicional  e) tautologia
> [!success]- Gabarito
> **Letra b.** Os resultados se excluem.

**36.** Seja $P$ = "A água ferve a 100 °C ao nível do mar" (V) e $Q$ = "2 é ímpar" (F). O valor de $P \land Q$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** Um operando F → conjunção F.

**37.** Com os mesmos $P$ (V) e $Q$ (F), o valor de $P \lor Q$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** Um operando V → disjunção V.

**38.** Com os mesmos $P$ (V) e $Q$ (F), o valor de $P \to Q$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** V → F é o único caso falso.

**39.** Com os mesmos $P$ (V) e $Q$ (F), o valor de $Q \to P$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** F → V = V. (Cuidado: $P \to Q \neq Q \to P$.)

**40.** "Ou um número é par ou é ímpar." Se um número **é par**, sobre ele ser ímpar:
a) também é ímpar  b) não é ímpar (valores opostos)  c) pode ser ambos  d) é indefinido  e) é tautologia
> [!success]- Gabarito
> **Letra b.** Na exclusiva os valores se opõem.

---

## Bloco F — Classificação e 3 proposições

**41.** Uma expressão cuja coluna é **VVVV** classifica-se como:
a) contradição  b) tautologia  c) contingência  d) disjunção  e) bicondicional
> [!success]- Gabarito
> **Letra b.** Sempre verdadeira.

**42.** Uma expressão cuja coluna é **FFFF** classifica-se como:
a) tautologia  b) contradição  c) contingência  d) disjunção  e) condicional
> [!success]- Gabarito
> **Letra b.** Sempre falsa.

**43.** As proposições $P \lor \neg P$ e $P \land \neg P$ são, respectivamente:
a) contradição e tautologia  b) tautologia e contradição  c) ambas tautologias  d) ambas contradições  e) bicondicional e disjunção
> [!success]- Gabarito
> **Letra b.** $P \lor \neg P$ é sempre V (tautologia); $P \land \neg P$ é sempre F (contradição). Veja [[11 - Tautologia e Contradição]].

**44.** $\neg(P \lor \neg P)$ é:
a) Tautologia  b) Contradição  c) Contingência  d) Disjunção  e) Bicondicional
> [!success]- Gabarito
> **Letra b.** $P \lor \neg P$ é sempre V; sua negação é sempre F.

**45.** Sendo $P = V$, $Q = F$, $R = V$, o valor de $(P \to Q) \to R$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $P \to Q = F$; $F \to R = V$.

**46.** Sendo $P = V$, $Q = V$, $R = F$, o valor de $P \land (Q \to R)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra b.** $Q \to R = F$; $V \land F = F$.

**47.** Sendo $P = Q = R = F$, o valor de $\neg P \land (\neg Q \lor R)$ é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $\neg P = V$; $\neg Q \lor R = V \lor F = V$; $V \land V = V$.

**48.** Quantas linhas tem a tabela-verdade de uma expressão com 3 proposições $P, Q, R$?
a) 6  b) 8  c) 9  d) 16  e) 12
> [!success]- Gabarito
> **Letra b.** $2^3 = 8$. Veja [[02 - Tabela-verdade]].

**49.** Sendo $P = Q = R = V$, o valor de $P \oplus Q \oplus R$ (avaliado da esquerda para a direita) é:
a) Verdadeiro  b) Falso
> [!success]- Gabarito
> **Letra a.** $V \oplus V = F$; $F \oplus V = V$.

**50.** "Está chovendo e não está chovendo" é uma contradição. A **conjunção** dessa contradição com qualquer outra proposição resulta em algo:
a) sempre verdadeiro  b) sempre falso  c) contingente  d) tautológico  e) depende da outra proposição
> [!success]- Gabarito
> **Letra b.** A conjunção é falsa se qualquer operando for falso; a contradição é sempre falsa, então o resultado é sempre falso.

---

## Bloco G — Implicação e validade de argumentos (avançado)

> Equivalências já foram tratadas no **Bloco C** (agora formalizadas em [[16 - Equivalência Lógica]]). Aqui o foco é [[17 - Implicação Lógica]] e a verificação de argumentos por tabela ([[18 - Argumentos Válidos]]).

**51.** Para testar a validade de "$P \to Q$; $P$; logo $Q$" pela tabela-verdade, olham-se as linhas em que:
a) a conclusão é V  b) **todas as premissas** são V  c) tudo é F  d) $P$ é F  e) $Q$ é V
> [!success]- Gabarito
> **Letra b.** Verifica-se a conclusão apenas nas linhas de premissas todas V.

**52.** No Modus Ponens ("$P \to Q$; $P$; logo $Q$"), nas linhas em que as duas premissas são V, a conclusão $Q$ é:
a) sempre V → válido  b) às vezes F → inválido  c) sempre F  d) indefinida  e) irrelevante
> [!success]- Gabarito
> **Letra a.** Só a linha $P=V, Q=V$ tem ambas premissas V, e nela $Q=V$. Válido.

**53.** O argumento "$P \to Q$; $Q$; logo $P$" tem como **contraexemplo** a linha:
a) $P=V, Q=V$  b) $P=V, Q=F$  c) $P=F, Q=V$  d) $P=F, Q=F$  e) não tem contraexemplo
> [!success]- Gabarito
> **Letra c.** Em $P=F, Q=V$: premissas $P \to Q = V$ e $Q = V$, mas a conclusão $P = F$. Inválido (afirmação do consequente).

**54.** O argumento "$P \to Q$; $\neg P$; logo $\neg Q$" tem contraexemplo na linha:
a) $P=V, Q=V$  b) $P=V, Q=F$  c) $P=F, Q=V$  d) $P=F, Q=F$  e) nenhuma
> [!success]- Gabarito
> **Letra c.** Em $P=F, Q=V$: premissas $P \to Q = V$ e $\neg P = V$, mas a conclusão $\neg Q = F$. Inválido (negação do antecedente).

**55.** Testando Modus Tollens ("$P \to Q$; $\neg Q$; logo $\neg P$") com $P=V, Q=F$: as premissas valem $P \to Q = F$ e $\neg Q = V$. Essa linha:
a) confirma o argumento  b) não serve para o teste (uma premissa é falsa)  c) invalida o argumento  d) é contraexemplo  e) prova a validade
> [!success]- Gabarito
> **Letra b.** Só linhas com **todas** as premissas V servem para testar.

**56.** Qual implicação lógica é **verdadeira**?
a) $P \lor Q \Rightarrow P$  b) $P \Rightarrow P \land Q$  c) $P \land Q \Rightarrow P$  d) $Q \Rightarrow P \land Q$  e) $P \lor Q \Rightarrow Q$
> [!success]- Gabarito
> **Letra c.** $(P \land Q) \to P$ é tautologia; as outras falham em alguma linha.

**57.** A diferença entre $P \to Q$ e $P \Rightarrow Q$ é:
a) são a mesma coisa  b) $\to$ é operação (pode ser V ou F); $\Rightarrow$ é relação (o condicional é sempre V)  c) $\Rightarrow$ é mais fraco  d) $\to$ é sempre tautologia  e) não há diferença prática
> [!success]- Gabarito
> **Letra b.** Veja [[17 - Implicação Lógica]].

**58.** "Se chover, levo guarda-chuva. Choveu. Logo, levo guarda-chuva." é:
a) inválido  b) válido (Modus Ponens)  c) falácia  d) Modus Tollens  e) silogismo disjuntivo
> [!success]- Gabarito
> **Letra b.**

**59.** "Se chover, levo guarda-chuva. Não levei guarda-chuva. Logo, não choveu." é:
a) válido (Modus Tollens)  b) inválido  c) afirmação do consequente  d) Modus Ponens  e) falácia
> [!success]- Gabarito
> **Letra a.**

**60.** "Se chover, levo guarda-chuva. Levei guarda-chuva. Logo, choveu." é:
a) válido  b) inválido — afirmação do consequente  c) Modus Ponens  d) Modus Tollens  e) silogismo
> [!success]- Gabarito
> **Letra b.** Levar guarda-chuva não garante que choveu (poderia levar por outro motivo).

---

Chegou ao fim do banco de questões. Reveja a teoria no índice: [[Apostila de Lógica Proposicional]].
