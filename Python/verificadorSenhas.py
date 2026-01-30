print("=== ANALISADOR DE SEGURANÇA DE SENHA ===")
senha = input("Crie uma nova senha para o sistema: ")

# Critérios de avaliação
tem_oito_caracteres = len(senha) >= 8
tem_numero = False

# Verificando se existe pelo menos um número na senha
for caractere in senha:
    if caractere.isdigit():
        tem_numero = True
        break # Se achou um, já podemos parar o loop

# Lógica de Diagnóstico
if tem_oito_caracteres and tem_numero:
    print("\n✅ SENHA FORTE: Você está protegido!")
elif tem_oito_caracteres:
    print("\n⚠️ SENHA MÉDIA: Adicione números para melhorar.")
else:
    print("\n❌ SENHA FRACA: Muito curta e vulnerável.")