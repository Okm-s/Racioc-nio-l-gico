# Introdução - 05 Banco de Questões

> Índice: [[Apostila de Introdução ao Raciocínio Lógico]]

Este banco **não** testa decoreba — testa **abstração**. As etapas sobem de nível: você vai sentir, na pele, o ponto em que a intuição falha e só a **forma** salva. Gabarito recolhido; tente antes de abrir e repare na **Lição** de cada questão.

---

## Etapa 1 — Lógica não é a verdade do mundo

**1.** Seja $P$ = "A Lua é feita de queijo". A proposição $P \lor \neg P$ é:
a) falsa, porque a Lua não é de queijo  b) verdadeira, independentemente do conteúdo  c) depende da astronomia  d) sem sentido  e) é uma pergunta
> [!success]- Gabarito
> **Letra b.** $P \lor \neg P$ é [[11 - Tautologia e Contradição|tautologia]]: sempre V, não importa o que $P$ diga.
> **Lição:** o valor lógico vem da **forma**, não do conteúdo real.

**2.** "Todo dragão cospe fogo. Falkor é um dragão. Logo, Falkor cospe fogo." Esse argumento é:
a) inválido, porque dragões não existem  b) válido, a conclusão decorre das premissas  c) verdadeiro de fato  d) sem sentido  e) uma falácia
> [!success]- Gabarito
> **Letra b.** A conclusão **decorre** das premissas. Validade independe de o conteúdo ser real. Veja [[18 - Argumentos Válidos]].
> **Lição:** não confunda **válido** (forma) com **verdadeiro** (fato).

**3.** A validade de um argumento depende de:
a) as premissas serem fatos reais  b) a forma garantir a conclusão  c) a conclusão ser agradável  d) o número de premissas  e) a opinião de quem lê
> [!success]- Gabarito
> **Letra b.**
> **Lição:** olhe a **estrutura**, não os fatos.

---

## Etapa 2 — As palavras enganam

**4.** "Quer café ou chá?" No sentido **lógico** de "ou", responder "quero os dois" é:
a) contraditório  b) coerente — o "ou" lógico é inclusivo  c) impossível  d) uma negação  e) um paradoxo
> [!success]- Gabarito
> **Letra b.** O "ou" lógico ([[06 - Disjunção]]) **admite ambos**. O "ou" que exclui é a [[07 - Disjunção Exclusiva]].
> **Lição:** a palavra do dia a dia ≠ a palavra técnica.

**5.** "Se você passar, eu te dou um presente." Logicamente, isso **obriga** a não dar o presente caso você **não** passe?
a) sim  b) não — negar o antecedente não conclui nada  c) sim, é bicondicional  d) é contradição  e) é tautologia
> [!success]- Gabarito
> **Letra b.** Tratar "se… então" como "só se" é leitura **cotidiana**. O [[08 - Condicional|condicional]] nada diz quando você não passa (negação do antecedente é [[18 - Argumentos Válidos|falácia]]).
> **Lição:** condicional **não** é bicondicional.

**6.** Em lógica, a palavra **"argumento"** significa:
a) uma discussão acalorada  b) um conjunto de premissas e conclusão  c) um número  d) uma opinião forte  e) um insulto
> [!success]- Gabarito
> **Letra b.** Veja [[18 - Argumentos Válidos]].
> **Lição:** o sentido **técnico** manda na prova.

**7.** Um argumento **válido** pode ter premissas **falsas**?
a) não, válido = verdadeiro  b) sim, validade é só a forma  c) nunca  d) só em matemática  e) é um paradoxo
> [!success]- Gabarito
> **Letra b.**
> **Lição:** "válido" fala da **forma**, não da verdade das premissas.

---

## Etapa 3 — Ignore o conteúdo, use a forma

**8.** "Todo *blerg* é *fluzz*. Alguns *fluzz* são *quux*. Logo, alguns *blerg* são *quux*." O argumento é:
a) válido  b) inválido  c) verdadeiro  d) impossível avaliar sem saber o que é *blerg*  e) tautologia
> [!success]- Gabarito
> **Letra b — inválido.** Os *fluzz* que são *quux* podem estar **fora** dos *blerg*. Desenhe os [[Conjuntos - 05 Problemas com Diagramas de Venn|diagramas de Venn]] e veja que a conclusão **não é forçada**.
> **Lição:** você **não precisa** saber o significado — e a intuição que "soa certo" engana. Use a forma.

**9.** "Nenhum $A$ é $B$. Todo $C$ é $B$. Logo, nenhum $C$ é $A$." Esse argumento é:
a) válido  b) inválido  c) depende do conteúdo  d) só se $A$ existir  e) uma falácia
> [!success]- Gabarito
> **Letra a — válido.** $C$ está dentro de $B$; $A$ está fora de $B$; então $C$ e $A$ não se tocam. Veja [[18 - Argumentos Válidos]].
> **Lição:** a forma (e o desenho) resolve, sem conteúdo nenhum.

**10.** Se $p \to q$ é verdadeiro e $q$ é falso, então $p$ é:
a) verdadeiro  b) falso  c) indefinido  d) também depende de $q$  e) um paradoxo
> [!success]- Gabarito
> **Letra b.** Modus Tollens: se fosse $p$ verdadeiro, $q$ teria de ser verdadeiro. Veja [[18 - Argumentos Válidos]].
> **Lição:** puro mecanismo — sem história, sem significado.

---

## Etapa 4 — Abstração pura

**11.** A coluna de $(p \land q) \to p$ (ordem VV, VF, FV, FF) é:
a) VFFF  b) VVVV  c) VFVV  d) FFFV  e) VVVF
> [!success]- Gabarito
> **Letra b.** É sempre verdadeira — **tautologia**. Monte a [[02 - Tabela-verdade]].
> **Lição:** só símbolos, e a verdade aparece sozinha.

**12.** A negação de "todo $x$ tem a propriedade $P$" é:
a) nenhum $x$ tem $P$  b) algum $x$ não tem $P$  c) todo $x$ não tem $P$  d) existe $x$ com $P$  e) $x$ não existe
> [!success]- Gabarito
> **Letra b.** Veja [[10 - Quantificadores]].
> **Lição:** um contraexemplo derruba o "todo".

**13.** Se $p \oplus q$ é verdadeiro e $p$ é verdadeiro, então $q$ é:
a) verdadeiro  b) falso  c) indefinido  d) igual a $p$  e) um paradoxo
> [!success]- Gabarito
> **Letra b.** A [[07 - Disjunção Exclusiva|exclusiva]] exige valores **diferentes**.
> **Lição:** a estrutura decide; nem precisa saber o que são $p$ e $q$.

**14.** Olhando para trás: a habilidade que mais pesou para acertar estas questões foi:
a) decorar fatos  b) saber se a frase é real  c) **abstrair** — trocar conteúdo por estrutura  d) opinar  e) calcular rápido
> [!success]- Gabarito
> **Letra c.**
> **Lição final:** abstração é **músculo**. Quanto mais você resolve pela forma, mais forte ela fica — e mais fácil fica **toda** a matéria. Volte aos fundamentos em [[Apostila de Lógica Proposicional]].
