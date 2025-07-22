let palavraCorreta = '';
let emojiAtual = '';
let silabasCorretas = [];
let indiceAtual = 0;

const licoes = [
    // Animais famosos e frutas com emoji (mantidos igual)
    { palavra: 'GATO', silabas: ['GA', 'TO'], emoji: '🐱' },
    { palavra: 'CACHORRO', silabas: ['CA', 'CHO', 'RRO'], emoji: '🐶' },
    { palavra: 'LEÃO', silabas: ['LE', 'ÃO'], emoji: '🦁' },
    { palavra: 'ELEFANTE', silabas: ['E', 'LE', 'FAN', 'TE'], emoji: '🐘' },
    { palavra: 'COELHO', silabas: ['CO', 'E', 'LHO'], emoji: '🐰' },
    { palavra: 'URSO', silabas: ['UR', 'SO'], emoji: '🐻' },
    { palavra: 'TIGRE', silabas: ['TI', 'GRE'], emoji: '🐯' },
    { palavra: 'CAVALO', silabas: ['CA', 'VA', 'LO'], emoji: '🐴' },
    { palavra: 'PANDA', silabas: ['PAN', 'DA'], emoji: '🐼' },
    { palavra: 'GIRAFA', silabas: ['GI', 'RA', 'FA'], emoji: '🦒' },
    { palavra: 'PEIXE', silabas: ['PEI', 'XE'], emoji: '🐟' },
    { palavra: 'PAPAGAIO', silabas: ['PA', 'PA', 'GA', 'IO'], emoji: '🦜' },
    { palavra: 'CORUJA', silabas: ['CO', 'RU', 'JA'], emoji: '🦉' },
    { palavra: 'FLAMINGO', silabas: ['FLA', 'MIN', 'GO'], emoji: '🦩' },
    { palavra: 'GOLFINHO', silabas: ['GOL', 'FI', 'NHO'], emoji: '🐬' },
    { palavra: 'HIPOPÓTAMO', silabas: ['HI', 'PO', 'PÓ', 'TA', 'MO'], emoji: '🦛' },
    { palavra: 'IGUANA', silabas: ['I', 'GUA', 'NA'], emoji: '🦎' },
    { palavra: 'JACARÉ', silabas: ['JA', 'CA', 'RÉ'], emoji: '🐊' },
    { palavra: 'MACACO', silabas: ['MA', 'CA', 'CO'], emoji: '🐒' },
    { palavra: 'ORNITORRINCO', silabas: ['OR', 'NI', 'TO', 'RRI', 'NCO'], emoji: '🦦' },
    { palavra: 'QUATI', silabas: ['QUA', 'TI'], emoji: '🦝' },
    { palavra: 'RAPOSA', silabas: ['RA', 'PO', 'SA'], emoji: '🦊' },
    { palavra: 'SABIÁ', silabas: ['SA', 'BI', 'Á'], emoji: '🐦' },
    { palavra: 'TARTARUGA', silabas: ['TAR', 'TA', 'RU', 'GA'], emoji: '🐢' },
    { palavra: 'ZEBRA', silabas: ['ZE', 'BRA'], emoji: '🦓' },
    { palavra: 'CISNE', silabas: ['CIS', 'NE'], emoji: '🦢' },
    { palavra: 'ONÇA', silabas: ['ON', 'ÇA'], emoji: '🐆' },
    { palavra: 'BÚFALO', silabas: ['BÚ', 'FA', 'LO'], emoji: '🐃' },
    { palavra: 'CANGURU', silabas: ['CAN', 'GU', 'RU'], emoji: '🦘' },
    { palavra: 'COALA', silabas: ['CO', 'A', 'LA'], emoji: '🐨' },
    { palavra: 'LAGARTIXA', silabas: ['LA', 'GAR', 'TI', 'XA'], emoji: '🦎' },
    { palavra: 'PAVÃO', silabas: ['PA', 'VÃO'], emoji: '🦚' },
    { palavra: 'FALCÃO', silabas: ['FAL', 'CÃO'], emoji: '🦅' },
    { palavra: 'ANDORINHA', silabas: ['AN', 'DO', 'RI', 'NHA'], emoji: '🐦' },
    { palavra: 'GALO', silabas: ['GA', 'LO'], emoji: '🐓' },
    { palavra: 'GALINHA', silabas: ['GA', 'LI', 'NHA'], emoji: '🐔' },
    { palavra: 'PATO', silabas: ['PA', 'TO'], emoji: '🦆' },

    // Frutas
    { palavra: 'MAÇÃ', silabas: ['MA', 'ÇÃ'], emoji: '🍎' },
    { palavra: 'BANANA', silabas: ['BA', 'NA', 'NA'], emoji: '🍌' },
    { palavra: 'LARANJA', silabas: ['LA', 'RAN', 'JA'], emoji: '🍊' },
    { palavra: 'MELANCIA', silabas: ['ME', 'LAN', 'CIA'], emoji: '🍉' },
    { palavra: 'ABACAXI', silabas: ['A', 'BA', 'CA', 'XI'], emoji: '🍍' },
    { palavra: 'MORANGO', silabas: ['MO', 'RAN', 'GO'], emoji: '🍓' },
    { palavra: 'UVA', silabas: ['U', 'VA'], emoji: '🍇' },
    { palavra: 'PÊRA', silabas: ['PÊ', 'RA'], emoji: '🍐' },
    { palavra: 'GOIABA', silabas: ['GO', 'IA', 'BA'], emoji: '🥭' },
    { palavra: 'KIWI', silabas: ['KI', 'WI'], emoji: '🥝' },
    { palavra: 'MANGA', silabas: ['MAN', 'GA'], emoji: '🥭' },
    { palavra: 'CEREJA', silabas: ['CE', 'RE', 'JA'], emoji: '🍒' },
    { palavra: 'CAQUI', silabas: ['CA', 'QUI'], emoji: '🧡' },
    { palavra: 'AMORA', silabas: ['A', 'MO', 'RA'], emoji: '🫐' },
    { palavra: 'FRAMBOESA', silabas: ['FRAM', 'BO', 'E', 'SA'], emoji: '🍓' },
    { palavra: 'LIMÃO', silabas: ['LI', 'MÃO'], emoji: '🍋' },
    { palavra: 'TANGERINA', silabas: ['TAN', 'GE', 'RI', 'NA'], emoji: '🍊' },
    { palavra: 'CAJU', silabas: ['CA', 'JU'], emoji: '🌰' },
    { palavra: 'PITANGA', silabas: ['PI', 'TAN', 'GA'], emoji: '🍒' },
    { palavra: 'MARACUJÁ', silabas: ['MA', 'RA', 'CU', 'JÁ'], emoji: '🍈' },

    // Países (sem emoji)
    { palavra: 'BRASIL', silabas: ['BRA', 'SIL'], emoji: '' },
    { palavra: 'CANADA', silabas: ['CA', 'NA', 'DA'], emoji: '' },
    { palavra: 'FRANCA', silabas: ['FRAN', 'CA'], emoji: '' },
    { palavra: 'ALEMANHA', silabas: ['A', 'LE', 'MAN', 'HA'], emoji: '' },
    { palavra: 'CHINA', silabas: ['CHI', 'NA'], emoji: '' },
    { palavra: 'JAPAO', silabas: ['JA', 'PAO'], emoji: '' },
    { palavra: 'INDIA', silabas: ['IN', 'DI', 'A'], emoji: '' },
    { palavra: 'ARGENTINA', silabas: ['AR', 'GEN', 'TI', 'NA'], emoji: '' },
    { palavra: 'MEXICO', silabas: ['ME', 'XI', 'CO'], emoji: '' },
    { palavra: 'ITALIA', silabas: ['I', 'TA', 'LIA'], emoji: '' },
    { palavra: 'ESPANHA', silabas: ['ES', 'PAN', 'HA'], emoji: '' },
    { palavra: 'INGLATERRA', silabas: ['IN', 'GLA', 'TER', 'RA'], emoji: '' },
    { palavra: 'RUSSIA', silabas: ['RUS', 'SIA'], emoji: '' },
    { palavra: 'AUSTRALIA', silabas: ['AU', 'STRA', 'LIA'], emoji: '' },
    { palavra: 'PORTUGAL', silabas: ['POR', 'TU', 'GAL'], emoji: '' },
    { palavra: 'HOLANDA', silabas: ['HO', 'LAN', 'DA'], emoji: '' },
    { palavra: 'SUECIA', silabas: ['SUE', 'CIA'], emoji: '' },
    { palavra: 'NORUEGA', silabas: ['NO', 'RU', 'E', 'GA'], emoji: '' }
];

function mostrarLicoes() {
    document.getElementById('tela-inicial').classList.add('escondido');
    document.getElementById('tela-licoes').classList.remove('escondido');

    const container = document.getElementById('lista-licoes');
    container.innerHTML = '';

    licoes.forEach((li) => {
        const btn = document.createElement('button');
        btn.textContent = `${li.emoji} ${li.palavra}`;
        btn.onclick = () => iniciarLicao(li.palavra, li.silabas, li.emoji);
        container.appendChild(btn);
    });
}

function iniciarLicao(palavra, silabas, emoji) {
    palavraCorreta = palavra;
    silabasCorretas = silabas;
    emojiAtual = emoji;
    indiceAtual = licoes.findIndex(l => l.palavra === palavra);

    document.getElementById('tela-licoes').classList.add('escondido');
    document.getElementById('tela-atividade').classList.remove('escondido');

    document.getElementById('emoji').innerText = emoji;
    document.getElementById('resposta').innerText = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('btn-proximo').classList.add('escondido');

    const resposta = document.getElementById('resposta');
    resposta.classList.remove('acerto');
    resposta.classList.remove('erro');

    const embaralhadas = [...silabas].sort(() => Math.random() - 0.5);
    const sugestoesDiv = document.getElementById('sugestoes');
    sugestoesDiv.innerHTML = '';

    embaralhadas.forEach(s => {
        const div = document.createElement('div');
        div.className = 'silaba';
        div.innerText = s;
        div.setAttribute('draggable', true);
        div.ondragstart = arrastar;
        sugestoesDiv.appendChild(div);
    });
}

function arrastar(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function permitirSoltar(event) {
    event.preventDefault();
}

function soltar(event) {
    event.preventDefault();
    const silaba = event.dataTransfer.getData("text");
    const resposta = document.getElementById("resposta");

    resposta.innerText += silaba;

    if (resposta.innerText === palavraCorreta) {
        document.getElementById("feedback").innerText = `🎉 Muito bem! Você formou ${emojiAtual} ${palavraCorreta}!`;
        document.getElementById("feedback").style.color = "green";
        resposta.classList.add('acerto');
        document.getElementById("btn-proximo").classList.remove('escondido');
    } else if (resposta.innerText.length >= palavraCorreta.length) {
        document.getElementById("feedback").innerText = "❌ Tente novamente!";
        document.getElementById("feedback").style.color = "red";
        resposta.classList.add('erro');
        setTimeout(() => {
            resposta.classList.remove('erro');
            resposta.innerText = '';
        }, 1000);
    }
}

function reiniciar() {
    iniciarLicao(palavraCorreta, silabasCorretas, emojiAtual);
}

function voltarMenu() {
    document.getElementById('tela-atividade').classList.add('escondido');
    document.getElementById('tela-licoes').classList.remove('escondido');
}

function proximaLicao() {
    const proximo = (indiceAtual + 1) % licoes.length;
    const li = licoes[proximo];
    iniciarLicao(li.palavra, li.silabas, li.emoji);
}
