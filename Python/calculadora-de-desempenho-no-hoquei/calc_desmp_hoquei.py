# 1. Coletando os dados (Lembre-se: input() sempre retorna uma String!)
nome_jogador = input("Digite o nome do jogador: ")
time = input("Digite o nome do time: ")

# 2. Conversão de tipos (Casting)
# Precisamos converter para int (inteiro) para fazer cálculos
partidas = int(input("Total de partidas jogadas: "))
gols = int(input("Total de gols marcados: "))

# 3. Cálculo da média
# DICA: Se a divisão der um número quebrado, o Python cria um float automaticamente
media_gols = gols / partidas

# Adicione isso logo após o cálculo da média
if media_gols >= 1.0:
    status = "Artilheiro de Elite ⭐"
elif media_gols >= 0.5:
    status = "Bom Desempenho 👍"
else:
    status = "Precisa de mais treino 🏑"

# 4. Exibindo o resultado com f-string (mais moderno e limpo)
print("\n" + "="*30)
print(f"ESTATÍSTICAS DE: {nome_jogador}")
print(f"Time: {time}")
print(f"Média de Gols: {media_gols:.2f}") # O :.2f limita a duas casas decimais
print("="*30)
print(f"Status do Atleta: {status}")