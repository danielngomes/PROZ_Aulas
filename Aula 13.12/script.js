// Função que troca o nome dos links da tag <a> do header e footer pelos nomes dos links contidos num atributo do objeto
function linksChange(elementList) {
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].getElementsByTagName('a')[0].innerText = `${objectLists.mainNameLinks[i]}`
    }
}

/* Função que troca os nomes e links direto no HTML da tag <li> do header e footer pelos nomes e links contidos num 
atributo do objeto */
function networksChange(elementList) {
    // O For com o i percorre os nós da lista de elementos (2 nós)
    for (let i = 0; i < elementList.length; i++) {
        // O For com o j percorre os nós da lista i que possuem a tag <li> (3 nós para cada i)
        for (let j = 0; j < elementList[i].getElementsByTagName('li').length; j++) {
            // Para cada nó da lista i que tem a tag <li> se troca o HTML do elemento <li> pelo abaixo
            elementList[i].getElementsByTagName('li')[j].innerHTML = 
            `<a href="${objectLists.networkLinks[j]}" target="_blank">${objectLists.networkNameLinks[j]}</a>`
        }
    }
}

/* Função que troca os nomes dos títulos, autores e data do post direto no HTML da tag <p> pelos nomes contidos num 
atributo do objeto */
function postChange(elementList) {
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].getElementsByTagName('h3')[0].innerText = `${objectLists.postTitle[i]}`
        elementList[i].getElementsByClassName('post-autor')[0].innerHTML = 
        `<strong>Autor:</strong> ${objectLists.postAuthors[i]} `
        elementList[i].getElementsByClassName('post-data')[0].innerHTML = 
        `<strong>Data:</strong> ${objectLists.postDate[i]}`
    }
}

// Objeto com arrays utilizados nas funções
const objectLists = {
    mainNameLinks: ['Home Page', 'Products', 'Blog Page', 'Contact'],
    networkLinks: ['https://www.instagram.com', 'https://www.linkedin.com', 'https://www.facebook.com'],
    networkNameLinks: ['Instagram', 'LinkedIn', 'Facebook'],
    postTitle: ['Excelente curso', 'Melhor impossível'],
    postAuthors: ['Daniel Augusto', 'Cynthia Câmara'],
    postDate: ['15/12/2022', '16/12/2022']
}

// Variável que captura a lista de <li> que possuem a classe em questão
const headerLinkElements = document.getElementsByClassName('elementos_nav')
// Variável que captura a lista de <li> que são filhos do seletor em questão
const footerLinkElements = document.querySelector('footer ul').children

linksChange(headerLinkElements)
linksChange(footerLinkElements)

// Variável que captura a lista de <ul> que possuem a classe em questão
const networkLinkElements = document.querySelectorAll('.lista_redes')

networksChange(networkLinkElements)

// Variável que captura a lista de <article> que possuem a classe em questão
const post = document.getElementsByClassName('post')

postChange(post)