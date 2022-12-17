// Função que cria artigos baseados nos dados de uma lista de arrays de um objeto
function appendArticle(articleList) {
  for(let i = 0; i < articleList.length; i++) {
    // Cria um novo elemento <article>
    const newArticle = document.createElement('article')

    // Popula o novo elemento <article> para cada repetição com os dados do índice i da lista de arrays
    newArticle.id = `post-${1+i}`
    newArticle.innerHTML = 
    `<h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>`

    // Variável que recupera o conteúdo da <main>
    const main = document.querySelector('main')

    // Adiciona o novo elemento <article> criado no DOM da <main>
    main.appendChild(newArticle)
  }
}

const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

appendArticle(arrayPostagens)

/*
const newArticle = document.createElement('article')

newArticle.id = 'post-1'
newArticle.innerHTML = 
`<h3>Pop Vegan</h3>
<p class="subtitulo">Comida vegana para todos!</p>
<div class="data">06/07/2022</div>
<p>Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)</p>`

const main = document.querySelector('main')

main.appendChild(newArticle)
*/