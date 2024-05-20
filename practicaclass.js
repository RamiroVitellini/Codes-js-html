/*
1. Crea una función que tome dos números como parámetros y devuelva su suma:
2. Crea una función que tome un número como parámetro y devuelva «par» si es par y «impar» si es impar:
3. Crea una función que tome un array como parámetro y devuelva el número de elementos del array:
4. Crea una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto:
5. Crea una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto:
6. Crea una función que tome un array de números como parámetro y devuelva el número más grande del array:
7. Crea una función que tome un array de strings como parámetro y devuelva un nuevo array con todos los strings en mayúsculas:
8. Crea una función que tome dos números como parámetros y devuelva el resultado de elevar el primer número a la potencia del segundo número:
9. Crea una función que tome un array de números como parámetro y devuelva la suma de todos los números del array:
10. Crea una función que tome un objeto como parámetro y devuelva un array con todas las propiedades del objeto:11. Crear un objeto «persona» con las propiedades «nombre» y «edad» y mostrarlas en la consola.
12. Crear un array «numeros» con los números del 1 al 5 y mostrarlos en la consola.
13. Agregar una propiedad «direccion» al objeto «persona» con las propiedades «calle» y «numero» y mostrarlas en la consola.

//1
const suma = (a, b) =>{
    return a +b; 
}
console.log(suma(2,3))

//2
const num = (a) => {
    if(a % 2 === 0 ){
        return 'par';
    }else {
        return 'impar';
    }
}
console.log(num(3))

//3
function contarray(array){
    return array.length; 
}
console.log(contarray([1,2,3,4]))

//4
function devolobj (obj){
    return Object.keys(obj).lenght;
}

//5
function mayus (objeto){
    return objeto.toUpperCase();
}
console.log(mayus('hola mundo'))

//6
function encontrarNumeroMayor (array){
    let mayor = array[0]
    for (let i= 1; i > array.lenght; i++){
        if (array[i]> mayor){
            mayor = array[i]
        }
    }
    return mayor
 }
console.log(nummayor[2,7,3,9,4])


//7
const ArrayMays = (array)=>{
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++){
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
console.log(ArrayMays(['hola', 'mundo'])); 

//8
const NumPotencia = (base, exponente) => {
    return Math.pow(base, exponente); 
}
console.log(NumPotencia(2,4))

//9
const ArraySumaTodo = (array) =>{
    let suma = 0;
    for( let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
console.log(ArraySumaTodo([1,2,4,5,6]))

//10
const tomarObj = (objeto) =>{
    return Object.keys(objeto)
}
console.log(tomarObj({a: 1, b: 2, c: 3}))

//11
let Person = {
    nombre: 'Juan',
    edad: 25
}
console.log(Person.nombre)
console.log(Person.edad)

//12
let array = [1,2,3,4,5];

for(let i = 0; i <array.length; i++){
    console.log(array[i]);
}

//13
Person.direccion = {
    calle: 'El greco',
    numero: 144
}
console.log(Person.direccion.calle)
console.log(Person.direccion.numero)

const AreaTriangulo = (base, altura)=>{
    return(base*altura)/2;
}

const AreaRectangulo = (base, altura)=>{
    return(base*altura);
}

const AreaCirculo = (radio)=>{
    return(Math.PI * radio * radio);
}

const funcionCalcular= () =>{
    let figura = prompt('Ingrese la figura a calcular el área (triángulo, rectuángulo, circulo): ')
    switch (figura){
        case "triangulo":
        case "triángulo":
            let baseTriangulo = parseFloat(prompt('Ingrese la base del triángulo: '))
            let AlturaTriangulo = parseFloat(prompt('Ingrese la altura del triángulo: '))
            if(isNaN(baseTriangulo) || isNaN(AlturaTriangulo) || baseTriangulo <= 0 || AlturaTriangulo <= 0){
                console.log('Por favor ingrese un numero valido');
            } else {
                console.log (`Su triángulo de base ${baseTriangulo} y altura ${AlturaTriangulo} es ${AreaTriangulo(baseTriangulo,AlturaTriangulo)}`)
            }
            break;

            case "rectángulo":
            case "rectangulo":  
                let baseRectangulo = parseFloat(prompt("Ingresa la base del rectángulo:"));
                let alturaRectangulo = parseFloat(prompt("Ingresa la altura del rectángulo:"));
                if (isNaN(baseRectangulo) || isNaN(alturaRectangulo) || baseRectangulo <= 0 || alturaRectangulo <= 0) {
                console.log("Por favor, ingresa valores numéricos positivos para la base y la altura.");
              } else {
                console.log(`El área del rectángulo es: ${areaRectangulo(baseRectangulo, alturaRectangulo)}`);
              }
              break;
        
            case "círculo":
            case "circulo":  
              let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
              if (isNaN(radio) || radio <= 0) {
                console.log("Por favor, ingresa un valor numérico positivo para el radio.");
              } else {
                console.log(`El área del círculo es: ${areaCirculo(radio)}`);
              }
              break;
        
            default:
              console.log("Figura no reconocida. Por favor, elige entre triángulo, rectángulo o círculo.");
          }
        }
        
        calcularArea();

    const ImparPar = (num)=>{
        let num = parseInt(prompt('Ingrese un numero:'))
        if(isNaN(num)||num <= 0){
            console.log('Ingrese otro valor')
        }else{
            return num 
        }
        for(let i = 1; i <= num; i++);
            if (i %2 == 0){
                console.log(`${i} es par`)
        }else{
            console.log(`${i} es impar`)
        } 
    }
    */

    