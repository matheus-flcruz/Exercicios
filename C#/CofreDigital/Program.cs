using System;

class Program
{
    static void Main()
    {
        // 1. Definição de Dados (Fortemente Tipados)
        string senhaMestra = "Senac2026";
        string senhaDigitada;
        int tentativasRestantes = 3;
        bool acessoGarantido = false;

        Console.WriteLine("=== SISTEMA DE SEGURANÇA: COFRE DIGITAL ===");

        // 2. Loop de Proteção (Prevenindo Força Bruta)
        while (tentativasRestantes > 0 && !acessoGarantido)
        {
            Console.Write($"\nDigite a senha (Tentativas restantes: {tentativasRestantes}): ");
            senhaDigitada = Console.ReadLine();

            if (senhaDigitada == senhaMestra)
            {
                acessoGarantido = true;
            }
            else
            {
                tentativasRestantes--;
                Console.WriteLine("Senha INCORRETA!");
            }
        }

        // 3. Resultado Final
        if (acessoGarantido)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("\n[ACESSO CONCEDIDO] Cofre aberto com sucesso.");
        }
        else
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("\n[SISTEMA BLOQUEADO] Muitas tentativas falhas. Alerta enviado!");
        }
        
        Console.ResetColor();
    }
}