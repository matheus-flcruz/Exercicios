// 1. Criamos um "mapa" de teclas. Isso é muito eficiente!
const mapaTeclas = {
    'q': 'alfaia',
    'w': 'agbe',
    'e': 'caixa',
    'a': 'atabaque',
    's': 'gonge',
    'd': 'mineiro'
};

// 2. Função única para tocar o som e ativar o brilho
function ativarInstrumento(id) {
    const botao = document.querySelector(`#${id}`);
    const som = document.querySelector(`#som-${id}`);

    if (botao) {
        botao.classList.add('tocando');
        
        // Se houver áudio, toca. Se não, mostra o log (útil para teste)
        if (som && som.src.includes('.mp3')) {
            som.currentTime = 0;
            som.play().catch(() => console.log(`Áudio de ${id} não carregado.`));
        } else {
            console.log(`Tum-pá! Som de ${id} ativado.`);
        }
    }
}

function desativarInstrumento(id) {
    const botao = document.querySelector(`#${id}`);
    if (botao) botao.classList.remove('tocando');
}

// 3. Eventos de Teclado (Geral)
window.addEventListener('keydown', (e) => {
    const tecla = e.key.toLowerCase();
    const instrumentoId = mapaTeclas[tecla]; // Procura a tecla no nosso mapa

    if (instrumentoId) {
        ativarInstrumento(instrumentoId);
    }
});

window.addEventListener('keyup', (e) => {
    const tecla = e.key.toLowerCase();
    const instrumentoId = mapaTeclas[tecla];

    if (instrumentoId) {
        desativarInstrumento(instrumentoId);
    }
});

// 4. Eventos de Clique (Para quem usa o mouse)
document.querySelectorAll('.instrumento').forEach(botao => {
    botao.addEventListener('mousedown', () => ativarInstrumento(botao.id));
    botao.addEventListener('mouseup', () => desativarInstrumento(botao.id));
});