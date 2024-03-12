function contact() {
    window.open('https://api.whatsapp.com/send?phone=5548996480085');
}

function resume() {
    window.open('https://www.linkedin.com/in/ryan-pereira-lima/');
}

function irGitLP() {
    window.open('https://github.com/ryanpzr/landing-page');
}

function irGitAL() {
    window.open('https://github.com/ryanpzr/agulha-e-linha');
}

function irDeployAL() {
    window.open('https://agulha-e-linha.up.railway.app/');
}

function irGitMC() {
    window.open('https://github.com/ryanpzr/menu-mamma_carmela');
}

function irDeployMC() {
    window.open('https://www.mammacarmela.com.br/');
}

function irGitCSU() {
    window.open('https://github.com/ryanpzr/crud-sign-up');
}

function irDeployCSU() {
    window.open('https://github.com/ryanpzr/crud-sign-up/archive/refs/heads/main.zip');
}

function redirect(id) {

    window.location.href = "#" + id;
}

const idiomas = {

    'pt-BR': {
        'cardapioMC': 'Cardápio Online',
        'catalogoAL': 'Catálogo Agulha e Linha',
        'sobreMim': 'Sobre mim',
        'mainH1': 'Olá, meu nome é',
        'mainH1name': 'Ryan Pereira Lima!',
        'mainP': 'Sou desenvolvedor Web e apaixonado por técnologia.',
        'aboutMe...': 'Sobre mim...',
        'aboutMeP01': 'Olá, meu nome é Ryan e tenho 19 anos. Comecei minha jornada no mercado de trabalho como Jovem Aprendiz na ENGIE Brasil aos 17 anos, e tenho como objetivo de carreira trabalhar para uma empresa com o foco em técnologia e programação.',
        'aboutMeP02': 'Estou graduando Ciências da Computação na Universidade do Sul de Santa Catarina, e possuo conhecimento em desenvolvimento com HTML, CSS, JavaScript, Java, NodeJs e MySQL.',
        'aboutMeP03': 'Me reconheço como um grande entusiasta em novas tecnologias do mercado, com aprendizado adquirido dia após dia e uma enorme vontade de me destacar em meio ao ambiente de trabalho.',
        'hireMe': 'Contrate-me',
        'resume': 'Currículo',
        'projects': 'Projetos',
        'contact': 'Contate-me',
        'email': 'ryanpereiralimads@gmail.com',
        'number': '(48) 99648-0085',
        'linkedin': 'Ryan Pereira Lima',
        'github': '@ryanpzr'
    },

    'en-US': {

        'cardapioMC': 'Menu Online',
        'catalogoAL': 'Catalog Agulha e Linha',
        'sobreMim': 'About me',
        'mainH1': 'Hi, my name is',
        'mainH1name': 'Ryan Pereira Lima!',
        'mainP': 'I am a Web developer and passionate about technology.',
        'aboutMe...': 'About Me...',
        'aboutMeP01': 'Hi, my name is Ryan, and I am 19 years old. I have started my journey in the job market as a young apprentice at ENGIE BRASIL when I was 17  and my career goal is to work for a company that focuses on technology and programming. ',
        'aboutMeP02': 'I have been an undergraduate student in  computer science at UNISUL ( University of South Santa Catarina). I have a lot of  knowledge in developing with HTML, CSS, JavaScript, Java, Spring-Boot and MySQL.',
        'aboutMeP03': 'I see myself  as a team player, a great enthusiastic in  new technologies on the market, with learning acquired skills on a daily basis, plus an enormous desire to stand out in the work environment.',
        'hireMe': 'Hire Me',
        'resume': 'Resume',
        'projects': 'Projects',
        'contact': 'Contact Me',
        'email': 'ryanpereiralimads@gmail.com',
        'number': '(48) 99648-0085',
        'linkedin': 'Ryan Pereira Lima',
        'github': '@ryanpzr'

    }


}

let currentLanguage = 'pt-BR';

const buttonMudarIdioma = document.querySelector('.lenguage');
const imgBR = document.getElementById('imgBr');
const imgEUA = document.getElementById('imgEua');
imgEUA.style.display = "none";

buttonMudarIdioma.addEventListener('click', function () {


    if (currentLanguage === 'pt-BR') {
        currentLanguage = 'en-US';
        imgBR.style.display = "none";
        imgEUA.style.display = "block";
    } else {
        currentLanguage = 'pt-BR';
        imgEUA.style.display = "none";
        imgBR.style.display = "block";

    }
    atualizarIdioma();

})

function atualizarIdioma() {

    const elementosComTexto = document.querySelectorAll('[data-texto]');
    elementosComTexto.forEach(elemento => {
        const chave = elemento.dataset.texto;
        elemento.textContent = idiomas[currentLanguage][chave];
    });
}
