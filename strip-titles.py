# Remove o H1 inicial (título) de cada nota em content/, evitando título duplicado
# (o Quartz já exibe o título via ArticleTitle). Roda em content/, não no vault.
import glob, re, os
base = os.path.join(os.path.dirname(__file__), "content")
n = 0
for p in glob.glob(os.path.join(base, "**", "*.md"), recursive=True):
    t = open(p, encoding="utf-8").read()
    m = re.match(r"^(---\n.*?\n---\n)(.*)$", t, re.S)
    pre, body = (m.group(1), m.group(2)) if m else ("", t)
    lines = body.split("\n")
    i = 0
    while i < len(lines) and lines[i].strip() == "":
        i += 1
    if i < len(lines) and re.match(r"^#\s+\S", lines[i]):
        del lines[i]
        if i < len(lines) and lines[i].strip() == "":
            del lines[i]
        new = pre + "\n".join(lines)
        if new != t:
            open(p, "w", encoding="utf-8").write(new)
            n += 1
print("H1 removidos de", n, "notas")
