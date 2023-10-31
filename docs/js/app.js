function contact() {
    window.open('https://api.whatsapp.com/send?phone=5548996480085');
}

function resume() {
    window.open('https://drive.google.com/file/d/14y_FTAYxMtnvMUORlvRNl5YBDeJE2ZIP/view?usp=drive_link');
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
        'mainH1name': 'Ryan Pereira Lima',
        'mainP': 'Sou desenvolvedor Web e apaixonado por técnologia.',
        'aboutMe...': 'Sobre mim...',
        'aboutMeP01': 'Fazer',
        'aboutMeP02': 'Fazer',
        'aboutMeP03': 'Fazer',
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
        'mainH1name': 'Ryan Pereira Lima',
        'mainP': 'Im a Web developer and passionate about technology.',
        'aboutMe...': 'About Me...',
        'aboutMeP01': 'Fazer',
        'aboutMeP02': 'Fazer',
        'aboutMeP03': 'Fazer',
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
