/*
Consiga:
  - Crea una clase Pelicula
  - La clase Pelicula tendrá título, director, año y género.
  - Crea un método que devuelva toda la información de la película
  - Pide 3 películas y guárdalas en un array
  - Las películas se introducirán al arrancar el programa pidiendo los datos con prompt.
  - Validar que los campos no se introduzcan vacíos
  - Validar que el año sea un número y que tenga 4 dígitos
  - Validar que el género sea: acción, comedia o drama
  - Crea una función que muestre todas las películas
  - Crea una función que muestre los directores ordenados alfabéticamente
  - Crea una función que pida un género y muestre la información de las películas que pertenezcan a ese género usando el método que devuelve la información
*/

class Pelicula {
    constructor(tittle, author, year, gender){
        this.tittle = tittle
        this.author = author
        this.year = year
        this.gender = gender
    }
    
    GetAuthors(){
        return this.author
    }

    getGender(){
        return this.gender
    }

    PelisInfo(){
        return `Tittle: ${this.tittle}, Author: ${this.author}, Year: ${this.year}, Gender: ${this.gender}`
    }

}

let pelis = []

while (pelis.length > 3){
    let title = prompt("Que titulo tiene la pelicula: ")
    let author = prompt("Quien es el autor de la pelicula: ")
    let year = prompt("Que año es la pelicula: ")
    let gender = prompt("Que genero es la pelicula: ").toLocaleUpperCase()

    if (title != '' &&
        author != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == 'accion' || gender == 'comedia' || gender == 'drama')){
            pelis.push(new Pelicula(title, author, year, gender))
        }
}

const showallPeli= () => {
    console.log(pelis)
}

const showAuthors = () =>{
    let authors = []
    for(const peli of pelis){
        author.push(pelis.GetAuthors())
    }
    console.log(authors.sort()); 
}

const getGender = () =>{
    const gender = prompt("Ingrese el genero a buscar: ")
    for(const peli of pelis){
        if (pelis.getGender() == gender){
            console.log (peli.PelisInfo)
        }
    }
}


