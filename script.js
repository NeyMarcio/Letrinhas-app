let licoes = [];
let licaoAtual = 0;

const licoesFacil = [
    { palavra: 'BOLA', silabas: ['BO', 'LA'], imagem: 'imagens/BOLA.png' },
    { palavra: 'PATO', silabas: ['PA', 'TO'], imagem: 'imagens/PATO.png' },
    { palavra: 'SAPO', silabas: ['SA', 'PO'], imagem: 'imagens/SAPO.png' },
    { palavra: 'LUVA', silabas: ['LU', 'VA'], imagem: 'imagens/LUVA.png' },
    { palavra: 'CAMA', silabas: ['CA', 'MA'], imagem: 'imagens/CAMA.png' },
    { palavra: 'RATO', silabas: ['RA', 'TO'], imagem: 'imagens/RATO.png' },
    { palavra: 'MALA', silabas: ['MA', 'LA'], imagem: 'imagens/MALA.png' },
    { palavra: 'CASA', silabas: ['CA', 'SA'], imagem: 'imagens/CASA.png' },
    { palavra: 'PEIXE', silabas: ['PEI', 'XE'], imagem: 'imagens/PEIXE.png' },
    { palavra: 'CAFÉ', silabas: ['CA', 'FÉ'], imagem: 'imagens/CAFÉ.png' },
    { palavra: 'FOTO', silabas: ['FO', 'TO'], imagem: 'imagens/FOTO.png' },
    { palavra: 'GALO', silabas: ['GA', 'LO'], imagem: 'imagens/GALO.png' },
    { palavra: 'VACA', silabas: ['VA', 'CA'], imagem: 'imagens/VACA.png' },
    { palavra: 'LATA', silabas: ['LA', 'TA'], imagem: 'imagens/LATA.png' },
    { palavra: 'PENA', silabas: ['PE', 'NA'], imagem: 'imagens/PENA.png' },
    { palavra: 'LAGO', silabas: ['LA', 'GO'], imagem: 'imagens/LAGO.png' },
    { palavra: 'MOTO', silabas: ['MO', 'TO'], imagem: 'imagens/MOTO.png' },
    { palavra: 'SACO', silabas: ['SA', 'CO'], imagem: 'imagens/SACO.png' },
    { palavra: 'RODA', silabas: ['RO', 'DA'], imagem: 'imagens/RODA.png' },
    { palavra: 'PIPA', silabas: ['PI', 'PA'], imagem: 'imagens/PIPA.png' },
];

const licoesMedio = [
    { palavra: 'BONECA', silabas: ['BO', 'NE', 'CA'], imagem: 'imagens/BONECA.png' },
    { palavra: 'DADO', silabas: ['DA', 'DO'], imagem: 'imagens/DADO.png' },
    { palavra: 'FACA', silabas: ['FA', 'CA'], imagem: 'imagens/FACA.png' },
    { palavra: 'MESA', silabas: ['ME', 'SA'], imagem: 'imagens/MESA.png' },
    { palavra: 'BEBÊ', silabas: ['BE', 'BÊ'], imagem: 'imagens/BEBÊ.png' },
    { palavra: 'CACHORRO', silabas: ['CA', 'CHO', 'RRO'], imagem: 'imagens/CACHORRO.png' },
    { palavra: 'JANELA', silabas: ['JA', 'NE', 'LA'], imagem: 'imagens/JANELA.png' },
    { palavra: 'CANETA', silabas: ['CA', 'NE', 'TA'], imagem: 'imagens/CANETA.png' },
    { palavra: 'PIMENTA', silabas: ['PI', 'MEN', 'TA'], imagem: 'imagens/PIMENTA.png' },
    { palavra: 'FUTEBOL', silabas: ['FU', 'TE', 'BOL'], imagem: 'imagens/FUTEBOL.png' },
    { palavra: 'PASSARO', silabas: ['PAS', 'SA', 'RO'], imagem: 'imagens/PASSARO.png' },
    { palavra: 'MÁQUINA', silabas: ['MÁ', 'QUI', 'NA'], imagem: 'imagens/MÁQUINA.png' },
    { palavra: 'MÚSICA', silabas: ['MÚ', 'SI', 'CA'], imagem: 'imagens/MÚSICA.png' },
    { palavra: 'PERFUME', silabas: ['PER', 'FU', 'ME'], imagem: 'imagens/PERFUME.png' },
    { palavra: 'GARRAFA', silabas: ['GAR', 'RA', 'FA'], imagem: 'imagens/GARRAFA.png' },
    { palavra: 'MONTANHA', silabas: ['MON', 'TA', 'NHA'], imagem: 'imagens/MONTNHA.png' },
    { palavra: 'ESCOLA', silabas: ['ES', 'CO', 'LA'], imagem: 'imagens/ESCOLA.png' },
    { palavra: 'PESCADOR', silabas: ['PES', 'CA', 'DOR'], imagem: 'imagens/PESCADOR.png' },
    { palavra: 'LIMONADA', silabas: ['LI', 'MO', 'NA', 'DA'], imagem: 'imagens/LIMONADA.png' },
    { palavra: 'PAPELÃO', silabas: ['PA', 'PE', 'LÃO'], imagem: 'imagens/PAPELÃO.png' },
    { palavra: 'CANTORA', silabas: ['CAN', 'TO', 'RA'], imagem: 'imagens/CANTORA.png' },
    { palavra: 'PEDRA', silabas: ['PE', 'DRA'], imagem: 'imagens/PEDRA.png' },
];

const licoesDificil = [
    { palavra: 'HIPOPÓTAMO', silabas: ['HI', 'PO', 'PÓ', 'TA', 'MO'], imagem: 'imagens/HIPOPÓTAMO.png' },
    { palavra: 'MARACUJÁ', silabas: ['MA', 'RA', 'CU', 'JÁ'], imagem: 'imagens/MARACUJÁ.png' },
    { palavra: 'ORNITORRINCO', silabas: ['OR', 'NI', 'TOR', 'RIN', 'CO'], imagem: 'imagens/ORNITORRINCO.png' },
    { palavra: 'ELEFANTE', silabas: ['E', 'LE', 'FAN', 'TE'], imagem: 'imagens/ELEFANTE.png' },
    { palavra: 'ABACAXI', silabas: ['A', 'BA', 'CA', 'XI'], imagem: 'imagens/ABACAXI.png' },
    { palavra: 'JARDINEIRO', silabas: ['JAR', 'DI', 'NEI', 'RO'], imagem: 'imagens/JARDINEIRO.png' },
    { palavra: 'LANTERNA', silabas: ['LAN', 'TER', 'NA'], imagem: 'imagens/LANTERNA.png' },
    { palavra: 'MELANCIA', silabas: ['ME', 'LAN', 'CI', 'A'], imagem: 'imagens/MELANCIA.png' },
    { palavra: 'PARALELEPÍPEDO', silabas: ['PA', 'RA', 'LE', 'LE', 'PÍ', 'PE', 'DO'], imagem: 'imagens/PARALELEPÍPEDO.png' },
    { palavra: 'TELEFONE', silabas: ['TE', 'LE', 'FO', 'NE'], imagem: 'imagens/TELEFONE.png' },
    { palavra: 'COMPUTADOR', silabas: ['COM', 'PU', 'TA', 'DOR'], imagem: 'imagens/COMPUTADOR.png' },
    { palavra: 'TELEVISÃO', silabas: ['TE', 'LE', 'VI', 'SÃO'], imagem: 'imagens/TELEVISÃO.png' },
];

function selecionarNivel(nivel) {
    if (nivel === 'facil') {
        licoes = [...licoesFacil];
    } else if (nivel === 'medio') {
        licoes = [...licoesMedio];
    } else if (nivel === 'dificil') {
        licoes = [...licoesDificil];
    }

    embaralharLicoes();
    mostrarLicoes();
}

function embaralharLicoes() {
    licoes.sort(() => Math.random() - 0.5);
}

function mostrarLicoes() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('tela-licoes').style.display = 'block';

    const lista = document.getElementById('lista-licoes');
    lista.innerHTML = '';
    licoes.forEach((licao, index) => {
        const botao = document.createElement('button');
        botao.textContent = `${licao.palavra}`;
        botao.onclick = () => iniciarLicao(index);
        lista.appendChild(botao);
    });
}

function iniciarLicao(indice) {
    licaoAtual = indice;
    const licao = licoes[licaoAtual];
    document.getElementById('tela-licoes').style.display = 'none';
    document.getElementById('tela-atividade').style.display = 'block';
    const emojiDiv = document.getElementById('emoji');
    emojiDiv.innerHTML = `<img src="${licao.imagem}" alt="${licao.palavra}" class="imagem-licao">`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('btn-proximo').classList.add('escondido');

    const sugestoes = document.getElementById('sugestoes');
    sugestoes.innerHTML = '';
    const silabasEmbaralhadas = [...licao.silabas].sort(() => Math.random() - 0.5);

    silabasEmbaralhadas.forEach((silaba) => {
        const span = document.createElement('span');
        span.textContent = silaba;
        span.className = 'silaba';
        span.style.cursor = 'pointer';

        // Ao clicar na sílaba da sugestão, adiciona na resposta
        span.addEventListener('click', () => {
            adicionarSilabaNaResposta(silaba);
        });

        sugestoes.appendChild(span);
    });

    const resposta = document.getElementById('resposta');
    resposta.innerHTML = '';
}

// Adiciona sílaba na resposta e permite remover clicando
function adicionarSilabaNaResposta(silaba) {
    const resposta = document.getElementById('resposta');
    const span = document.createElement('span');
    span.textContent = silaba;
    span.className = 'silaba resposta-silaba';
    span.style.cursor = 'pointer';

    // Ao clicar na sílaba da resposta, remove ela
    span.addEventListener('click', () => {
        resposta.removeChild(span);
        verificarResposta();
    });

    resposta.appendChild(span);
    verificarResposta();
}

function verificarResposta() {
    const resposta = Array.from(document.getElementById('resposta').children)
        .map((el) => el.textContent)
        .join('');

    const licao = licoes[licaoAtual];
    const feedback = document.getElementById('feedback');

    if (resposta.length === licao.palavra.length) {
        if (resposta === licao.palavra) {
            feedback.textContent = '✅ Correto!';
            document.getElementById('btn-proximo').classList.remove('escondido');
        } else {
            feedback.textContent = '❌ Tente novamente.';
            document.getElementById('btn-proximo').classList.add('escondido');
        }
    } else {
        feedback.textContent = '';
        document.getElementById('btn-proximo').classList.add('escondido');
    }
}

function proximaLicao() {
    if (licaoAtual + 1 < licoes.length) {
        iniciarLicao(licaoAtual + 1);
    } else {
        voltarMenu();
    }
}

function reiniciar() {
    iniciarLicao(licaoAtual);
}

function voltarMenu() {
    document.getElementById('tela-atividade').style.display = 'none';
    document.getElementById('tela-licoes').style.display = 'none';
    document.getElementById('tela-inicial').style.display = 'block';
}
