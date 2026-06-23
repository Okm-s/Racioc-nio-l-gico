> Banco de questões · Níveis: [[13 - Banco de Questões — Nível 1 (Fundamentos)|Nível 1]] · **[Nível 2]** · [[15 - Banco de Questões — Nível 3 (Avançado)|Nível 3]]
> Voltar ao índice: [[Apostila de Lógica Proposicional]]

Agora aplicamos as definições. Aqui você treina **negar proposições compostas**, **identificar a operação pela tabela-verdade**, **montar a coluna de uma expressão** e **trabalhar com quantificadores**. Gabarito recolhido abaixo de cada questão.

> [!info] Convenção das colunas
> Quando uma questão pedir a "coluna" de uma expressão, as linhas seguem a ordem de $(P,Q)$: **VV, VF, FV, FF** (de cima para baixo). Assim, "VFFF" significa V na 1ª linha e F nas demais.

Conteúdo cobrado: [[12 - Negação de Proposições Compostas]], [[10 - Quantificadores]], [[11 - Tautologia e Contradição]] e todos os conectivos.

---

## Bloco A — Negação de proposições compostas

**1.** A negação de $P \land Q$ é:

a) $\neg P \land \neg Q$  
b) $\neg P \lor \neg Q$  
c) $P \lor Q$  
d) $P \to Q$  
e) $P \leftrightarrow Q$

> [!success]- Gabarito
> **Letra b.** "e" vira "ou" e nega cada parte. Veja [[12 - Negação de Proposições Compostas]].

**2.** A negação de $P \lor Q$ é:

a) $\neg P \lor \neg Q$  
b) $\neg P \land \neg Q$  
c) $P \land Q$  
d) $P \oplus Q$  
e) $\neg P \to Q$

> [!success]- Gabarito
> **Letra b.** "ou" vira "e" e nega cada parte.

**3.** A negação de $P \to Q$ é:

a) $\neg P \land Q$  
b) $P \land \neg Q$  
c) $\neg P \lor \neg Q$  
d) $P \to \neg Q$  
e) $Q \to P$

> [!success]- Gabarito
> **Letra b.** "P acontece, mas Q não" — o único caso falso do condicional.

**4.** A negação de $P \leftrightarrow Q$ é:
a) $P \land Q$  
b) $P \oplus Q$  
c) $\neg P \leftrightarrow \neg Q$  
d) $P \lor Q$ 
e) $P \to Q$

> [!success]- Gabarito
> **Letra b.** Iguais → diferentes. Veja [[09 - Bicondicional]] e [[07 - Disjunção Exclusiva]].

**5.** A negação de $P \oplus Q$ é:

a) $P \to Q$  
b) $P \leftrightarrow Q$  
c) $P \land Q$ 
d) $\neg P \oplus \neg Q$  
e) $P \lor Q$

> [!success]- Gabarito
> **Letra b.** Diferentes → iguais.

**6.** A negação de "Está chovendo **e** ventando" é:

a) Não está chovendo e não está ventando  
b) Não está chovendo ou não está ventando  
c) Está chovendo ou ventando  
d) Está ventando e não chovendo  
e) Está chovendo

> [!success]- Gabarito
> **Letra b.**

**7.** A negação de "Está chovendo **ou** ventando" é:

a) Não está chovendo ou não está ventando  
b) Não está chovendo e não está ventando  
c) Está chovendo e ventando  
d) Não está chovendo  
e) Está ventando

> [!success]- Gabarito
> **Letra b.**

**8.** A negação de "Se estudo, passo" é:

a) Se não estudo, não passo 
b) Estudo e não passo  
c) Não estudo e passo  
d) Passo se estudo  
e) Não estudo ou passo

> [!success]- Gabarito
> **Letra b.**

**9.** *(Modelo Q2 da Prova 1)* A negação de "A cobra não rasteja ou não está doente" é:

a) A cobra rasteja ou está doente  
b) A cobra rasteja e está doente  
c) A cobra não rasteja se não está doente  
d) A cobra rasteja ou não está doente  
e) Se a cobra não rasteja, então está doente

> [!success]- Gabarito
> **Letra b.** Com $P$ = "não rasteja" e $Q$ = "não está doente", a frase é $P \lor Q$; sua negação é $\neg P \land \neg Q$ = "rasteja **e** está doente".

**10.** A negação de "Passo se e somente se estudo" é:
a) Passo e estudo  b) Passo sem estudar, ou estudo e não passo  c) Não passo e não estudo  d) Se passo, então estudo  e) Estudo e passo
> [!success]- Gabarito
> **Letra b.** Negar o bicondicional dá a exclusiva.

**11.** A negação de "Ou João venceu ou Maria venceu" (exclusiva) é:
a) João e Maria venceram, ou nenhum dos dois venceu  b) João venceu e Maria venceu  c) Nem João nem Maria venceram  d) João venceu ou Maria venceu  e) Se João venceu, Maria perdeu
> [!success]- Gabarito
> **Letra a.** Negar a exclusiva dá o bicondicional ("mesmo valor").

**12.** Negar **duas vezes** a proposição $P$ resulta em:
a) $\neg P$  b) $P$  c) tautologia  d) contradição  e) $P \land \neg P$
> [!success]- Gabarito
> **Letra b.** Dupla negação.

---

## Bloco B — Identificar a operação pela tabela

**13.** *(Modelo Q5 da Prova 2)* Observe a tabela:

| r | s | ? |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

A operação é:
a) Conjunção  b) Disjunção  c) Condicional  d) Bicondicional  e) Contradição
> [!success]- Gabarito
> **Letra d.** V só quando os valores são iguais → bicondicional.

**14.** Identifique a operação:

| P | Q | ? |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

a) Conjunção  b) Disjunção  c) Bicondicional  d) Condicional  e) Disjunção exclusiva
> [!success]- Gabarito
> **Letra a.** V só quando ambos são V.

**15.** Identifique a operação:

| P | Q | ? |
|---|---|---|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

a) Conjunção  b) Disjunção  c) Condicional  d) Bicondicional  e) Disjunção exclusiva
> [!success]- Gabarito
> **Letra b.** F só quando ambos são F.

**16.** Identifique a operação:

| P | Q | ? |
|---|---|---|
| V | V | F |
| V | F | V |
| F | V | V |
| F | F | F |

a) Conjunção  b) Disjunção  c) Disjunção exclusiva  d) Bicondicional  e) Condicional
> [!success]- Gabarito
> **Letra c.** V só quando os valores são diferentes.

**17.** Identifique a operação:

| P | Q | ? |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

a) Conjunção  b) Disjunção  c) Condicional  d) Bicondicional  e) Disjunção exclusiva
> [!success]- Gabarito
> **Letra c.** F só no caso V → F. É $P \to Q$.

**18.** Uma operação cujo resultado é **V em todas as linhas** é uma:
a) Contradição  b) Tautologia  c) Conjunção  d) Disjunção  e) Negação
> [!success]- Gabarito
> **Letra b.** Sempre verdadeira. Veja [[11 - Tautologia e Contradição]].

**19.** Uma operação cujo resultado é **F em todas as linhas** é uma:
a) Tautologia  b) Contradição  c) Bicondicional  d) Disjunção  e) Condicional
> [!success]- Gabarito
> **Letra b.** Sempre falsa.

**20.** A operação que é **F apenas quando o antecedente é V e o consequente é F** é:
a) Bicondicional  b) Condicional  c) Conjunção  d) Disjunção  e) Disjunção exclusiva
> [!success]- Gabarito
> **Letra b.** Definição do condicional.

---

## Bloco C — Montar a coluna da expressão

(Ordem das linhas: VV, VF, FV, FF.)

**21.** A coluna de $P \land Q$ é:
a) VFFF  b) VVVF  c) FFFV  d) VFVF  e) FVVF
> [!success]- Gabarito
> **Letra a.** V só na linha VV.

**22.** A coluna de $P \lor Q$ é:
a) VFFF  b) VVVF  c) FFFV  d) VFVV  e) FVVF
> [!success]- Gabarito
> **Letra b.** F só na linha FF.

**23.** A coluna de $P \to Q$ é:
a) VFVV  b) VVVF  c) FVVV  d) VFFV  e) FVVF
> [!success]- Gabarito
> **Letra a.** F só na linha VF.

**24.** A coluna de $P \leftrightarrow Q$ é:
a) VFFV  b) FVVF  c) VVVF  d) VFVV  e) FFFV
> [!success]- Gabarito
> **Letra a.** V nas linhas de valores iguais (VV e FF).

**25.** A coluna de $P \oplus Q$ é:
a) VFFV  b) FVVF  c) VFVV  d) VVVF  e) FFFV
> [!success]- Gabarito
> **Letra b.** V nas linhas de valores diferentes (VF e FV).

**26.** A coluna de $\neg P$ é:
a) FFVV  b) VVFF  c) FVFV  d) VFVF  e) FFFV
> [!success]- Gabarito
> **Letra a.** $P$ vale V,V,F,F → $\neg P$ vale F,F,V,V.

**27.** A coluna de $\neg Q$ é:
a) FFVV  b) FVFV  c) VFVF  d) VVFF  e) FFVF
> [!success]- Gabarito
> **Letra b.** $Q$ vale V,F,V,F → $\neg Q$ vale F,V,F,V.

**28.** *(Modelo Q3 da Prova 1)* A coluna de $(P \to Q) \land P$ é:
a) VVVF  b) FVVV  c) VFVF  d) FFFF  e) VFFF
> [!success]- Gabarito
> **Letra e.** $P \to Q$ = VFVV; ao conjugar com $P$ (VVFF), sobra V só na 1ª linha → **VFFF**.

**29.** A coluna de $\neg(P \land Q)$ é:
a) FVVV  b) VFFF  c) FFFV  d) VVVF  e) VFVV
> [!success]- Gabarito
> **Letra a.** Negação de VFFF.

**30.** A coluna de $\neg(P \lor Q)$ é:
a) FVVV  b) FFFV  c) VVVF  d) VFFV  e) VFVV
> [!success]- Gabarito
> **Letra b.** Negação de VVVF.

**31.** A coluna de $\neg P \lor Q$ é:
a) VFVV  b) VVVF  c) FFFV  d) VFFV  e) FVVF
> [!success]- Gabarito
> **Letra a.** $\neg P$ = FFVV; em "ou" com $Q$ (VFVF) → VFVV (igual a $P \to Q$).

**32.** A coluna de $P \land \neg Q$ é:
a) VFFF  b) FVFF  c) FFVF  d) VFVV  e) FVVF
> [!success]- Gabarito
> **Letra b.** $\neg Q$ = FVFV; em "e" com $P$ (VVFF) → FVFF (igual à negação de $P \to Q$).

---

## Bloco D — Quantificadores

**33.** A negação de "Todo aluno passou" é:
a) Nenhum aluno passou  b) Algum aluno não passou  c) Todo aluno não passou  d) Existe aluno aprovado  e) Todos passaram
> [!success]- Gabarito
> **Letra b.** Basta um contraexemplo. Veja [[10 - Quantificadores]].

**34.** A negação de "Algum aluno passou" é:
a) Todos passaram  b) Nenhum aluno passou  c) Algum não passou  d) Existe aluno  e) Nenhum reprovou
> [!success]- Gabarito
> **Letra b.**

**35.** A negação de "Não existe aluno aprovado" é:
a) Nenhum aprovado  b) Existe aluno aprovado  c) Todos reprovados  d) Algum reprovado  e) Não há aluno
> [!success]- Gabarito
> **Letra b.**

**36.** $\forall x,\, P(x)$ lê-se:
a) existe x  b) todo x tem a propriedade P  c) nenhum x  d) não existe x  e) algum x
> [!success]- Gabarito
> **Letra b.**

**37.** $\exists x,\, P(x)$ lê-se:
a) todo x  b) existe pelo menos um x com a propriedade P  c) nenhum x  d) não existe x  e) todo x não
> [!success]- Gabarito
> **Letra b.**

**38.** A negação de $\forall x,\, P(x)$ é:
a) $\forall x,\, \neg P(x)$  b) $\exists x,\, \neg P(x)$  c) $\exists x,\, P(x)$  d) $\nexists x,\, P(x)$  e) $P(x)$
> [!success]- Gabarito
> **Letra b.**

**39.** A negação de $\exists x,\, P(x)$ é:
a) $\forall x,\, \neg P(x)$  b) $\exists x,\, \neg P(x)$  c) $\forall x,\, P(x)$  d) $\nexists x,\, \neg P(x)$  e) $P(x)$
> [!success]- Gabarito
> **Letra a.** "Nenhum x tem a propriedade P".

**40.** "Nenhum peixe é mamífero" é uma sentença:
a) existencial  b) universal negativa  c) aberta  d) interrogativa  e) imperativa
> [!success]- Gabarito
> **Letra b.**

**41.** Para derrubar a afirmação "todo aluno passou", basta:
a) todos reprovarem  b) um único aluno não passar (contraexemplo)  c) nenhum passar  d) metade passar  e) é impossível derrubar
> [!success]- Gabarito
> **Letra b.**

**42.** $\nexists x,\, P(x)$ significa:
a) todo x tem P  b) não existe x com a propriedade P  c) existe x com P  d) algum x não tem P  e) nenhuma das anteriores
> [!success]- Gabarito
> **Letra b.**

---

## Bloco E — Tautologia e contradição

**43.** $P \lor \neg P$ é:
a) Contradição  b) Tautologia  c) Contingência  d) Disjunção exclusiva  e) Bicondicional
> [!success]- Gabarito
> **Letra b.** Sempre V. Veja [[11 - Tautologia e Contradição]].

**44.** $P \land \neg P$ é:
a) Tautologia  b) Contradição  c) Disjunção  d) Condicional  e) Bicondicional
> [!success]- Gabarito
> **Letra b.** Sempre F.

**45.** *(Modelo Q1 da Prova 1)* A proposição $\neg(P \land \neg P)$ é exemplo de:
a) Tautologia  b) Contradição  c) Contingência  d) Implicação hipotética  e) Disjunção exclusiva
> [!success]- Gabarito
> **Letra a.** $P \land \neg P$ é sempre F; sua negação é sempre V → tautologia.

**46.** O princípio de que "uma coisa não pode ser e não ser" chama-se:
a) terceiro incluído  b) princípio do terceiro excluído / não contradição  c) princípio da identidade  d) tautologia  e) paradoxo
> [!success]- Gabarito
> **Letra b.**

**47.** "Está chovendo e não está chovendo" é exemplo de:
a) Tautologia  b) Contradição  c) Disjunção  d) Condicional  e) Bicondicional
> [!success]- Gabarito
> **Letra b.**

**48.** A negação de uma **tautologia** é:
a) outra tautologia  b) uma contradição  c) uma contingência  d) uma disjunção  e) indefinido
> [!success]- Gabarito
> **Letra b.** $\neg\top = \bot$.

**49.** A negação de uma **contradição** é:
a) contradição  b) tautologia  c) bicondicional  d) disjunção  e) condicional
> [!success]- Gabarito
> **Letra b.** $\neg\bot = \top$.

**50.** "Todo solteiro é não casado" é exemplo de:
a) Contradição  b) Tautologia  c) Disjunção exclusiva  d) Sentença aberta  e) Paradoxo
> [!success]- Gabarito
> **Letra b.** Verdadeira em qualquer cenário (linha 12 da tabela mestra em [[03 - Relações Lógicas e Conectivos]]).

---

## Bloco F — Equivalência, implicação e argumentos (aplicação)

> Aplica as regras de [[16 - Equivalência Lógica]], [[17 - Implicação Lógica]] e [[18 - Argumentos Válidos]].

**51.** $P \to Q$ é equivalente a:
a) $\neg P \lor Q$  b) $P \lor \neg Q$  c) $\neg P \land Q$  d) $Q \to P$  e) $P \land \neg Q$
> [!success]- Gabarito
> **Letra a.** Mesma coluna VFVV. Veja [[16 - Equivalência Lógica]].

**52.** A **contrapositiva** de $P \to Q$ é:
a) $Q \to P$  b) $\neg Q \to \neg P$  c) $\neg P \to \neg Q$  d) $P \to \neg Q$  e) $\neg P \lor Q$
> [!success]- Gabarito
> **Letra b.** $P \to Q \equiv \neg Q \to \neg P$.

**53.** $\neg(P \lor Q)$ é equivalente a (De Morgan):
a) $\neg P \lor \neg Q$  b) $\neg P \land \neg Q$  c) $P \land Q$  d) $P \to Q$  e) $P \oplus Q$
> [!success]- Gabarito
> **Letra b.**

**54.** $P \leftrightarrow Q$ é equivalente a:
a) $P \oplus Q$  b) $(P \to Q) \land (Q \to P)$  c) $P \land Q$  d) $\neg P \lor Q$  e) $(P \to Q) \lor (Q \to P)$
> [!success]- Gabarito
> **Letra b.** O bicondicional é a ida e a volta do condicional.

**55.** Para checar se $P \Rightarrow Q$, monta-se a tabela de $P \to Q$ e verifica-se se a coluna é:
a) toda F  b) toda V  c) alternada  d) VFVF  e) qualquer uma serve
> [!success]- Gabarito
> **Letra b.** Implicação = condicional tautológico. Veja [[17 - Implicação Lógica]].

**56.** $P \land Q$ implica logicamente:
a) $P$  b) $\neg P$  c) $\neg Q$  d) $P \oplus Q$  e) nada
> [!success]- Gabarito
> **Letra a.** $(P \land Q) \to P$ é tautologia.

**57.** O argumento "$P \to Q$; $\neg Q$; logo $\neg P$" é a regra:
a) Modus Ponens  b) Modus Tollens  c) silogismo disjuntivo  d) afirmação do consequente  e) De Morgan
> [!success]- Gabarito
> **Letra b.**

**58.** O argumento "$P \lor Q$; $\neg P$; logo $Q$" chama-se:
a) silogismo hipotético  b) silogismo disjuntivo  c) Modus Ponens  d) falácia  e) contrapositiva
> [!success]- Gabarito
> **Letra b.**

**59.** O argumento "$P \to Q$; $Q$; logo $P$" é:
a) válido (Modus Ponens)  b) inválido (afirmação do consequente)  c) válido (Modus Tollens)  d) inválido (De Morgan)  e) válido (silogismo)
> [!success]- Gabarito
> **Letra b.** Furada clássica: $P \to Q$ não autoriza ir de $Q$ para $P$.

**60.** O argumento "$P \to Q$; $\neg P$; logo $\neg Q$" é:
a) válido  b) inválido (negação do antecedente)  c) Modus Tollens  d) Modus Ponens  e) válido (contrapositiva)
> [!success]- Gabarito
> **Letra b.** Outra falácia: negar $P$ não autoriza negar $Q$.

**61.** "$P \to Q$; $Q \to R$; logo $P \to R$" chama-se:
a) silogismo disjuntivo  b) silogismo hipotético  c) Modus Ponens  d) falácia  e) De Morgan
> [!success]- Gabarito
> **Letra b.**

**62.** A validade de um argumento garante que:
a) os fatos são verdadeiros  b) se as premissas forem V, a conclusão é V  c) há 5 alternativas  d) a conclusão é opinião  e) a tabela tem 4 linhas
> [!success]- Gabarito
> **Letra b.** Veja [[18 - Argumentos Válidos]].

---

Hora do desafio final: **[[15 - Banco de Questões — Nível 3 (Avançado)|Nível 3 (Avançado)]]**.
