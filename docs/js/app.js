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
        'sobreMim': 'Sobre mim'
    },

    'en-US': {

        'cardapioMC': 'Menu Online',
        'catalogoAL': 'Catalog Agulha e Linha',
        'sobreMim': 'About me',

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
