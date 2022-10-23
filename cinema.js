const catalogo = require('../database/catalogo.json')

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)

// for (let index = 0; index < catalogo.length; index++) {
//     console.log(catalogo[index].titulo)
    
// }

// catalogo.forEach(filme => {

//     if (filme.emCartaz) {

//         console.log(filme.titulo)

//     }

// }
// )
let filterFilmes = catalogo.filter(filme => filme.emCartaz)

console.log(filterFilmes)

// let idade = 18
// let nome = "fabricio"

// console.log("Oi meu é " + nome + "minha idade é " + idade)

//console.log(`Oi meu é ${nome} e minha idade é ${idade}`)
// for (const filme of catalogo) {

//     if(filme.emCartaz){

//     console.log(filme.titulo)
//     }
    
// }

//console.log(catalogo[1].titulo)

//teste do git

//vamover se deu certo