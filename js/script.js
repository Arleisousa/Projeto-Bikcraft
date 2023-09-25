//ativar links do menu

const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = location.href
    const href = link.href

    if(url.includes(href)) {
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink)


//perguntas frequentes


const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta =  document.getElementById(controls)
    

    resposta.classList.toggle('ativa')
    const ativa = reposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)
}


function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}


perguntas.forEach(eventosPerguntas)
