> Anterior: [[Conjuntos - 04 Operações com Conjuntos]] · Próximo: [[Conjuntos - 06 Banco de Questões]] · Índice: [[Apostila de Conjuntos]]

São os problemas de "quantas pessoas fazem X, Y, Z". A ferramenta é o **diagrama de Venn**: desenhar os conjuntos sobrepostos e **preencher de dentro para fora**.

## Dois conjuntos — a fórmula

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

> Exemplo: 30 alunos; 18 jogam futebol, 15 jogam vôlei, 7 jogam os dois. Quantos jogam **só futebol**?
> Só futebol $= 18 - 7 = 11$. Total que joga algo $= 18 + 15 - 7 = 26$. Nenhum esporte $= 30 - 26 = 4$.

## A regra de ouro

> [!tip] Comece pela interseção
> Sempre preencha **primeiro a região do meio** (quem está em todos), depois vá subtraindo para achar as regiões "só de um". Assim ninguém é contado duas vezes.

Para três conjuntos:
$$n(A \cup B \cup C) = n(A)+n(B)+n(C) - n(A\cap B) - n(A\cap C) - n(B\cap C) + n(A\cap B\cap C)$$

## Exemplo resolvido (modelo da Q10 da Prova 3)

20 professores. **7** pesquisadores (P), **6** trabalham **só** com extensão (X), **12** com ensino (E). Regras: nenhum pesquisador é extensionista ($P \cap X = \varnothing$); **5** ensinam e pesquisam ($E \cap P = 5$); existe extensionista que ensina ($E \cap X \ge 1$). Quanto varia "**só ensino**"?

1. **Só pesquisa** $= 7 - 5 = 2$ (P não toca X).
2. Seja $k = n(E \cap X) \ge 1$.
3. **Ensino (12)** $=$ (só ensino) $+ (E\cap P = 5) + (E\cap X = k)$ → **só ensino $= 7 - k$**.
4. Restrições: $k \ge 1$ e $7 - k \ge 0$ → $1 \le k \le 7$ → **só ensino varia de 0 a 6**.

> Resolve a [[Q10P3]] (resposta: intervalo $[0, 6]$).

---

Pratique no [[Conjuntos - 06 Banco de Questões]].

---

## Pratique

**Questão.** Numa turma de 40 alunos, 25 gostam de matemática, 20 gostam de português e 10 gostam das duas. Quantos não gostam de nenhuma das duas?

a) 5  
b) 10  
c) 15  
d) 25  
e) 35

> [!success]- Gabarito  
> **Letra a.** $n(M \cup P) = 25 + 20 - 10 = 35$. Não gostam de nenhuma: $40 - 35 = 5$.
