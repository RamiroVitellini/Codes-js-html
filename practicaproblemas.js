/*
let pass = 0
let numeros = []

    while(pass <8){
        let vec = parseInt(prompt('Ingrese un numero: '))
        numeros.push(vec)
        pass +=1
    }

    const TotalNum = (array)=>{
        let cont = 0
        for(i in array){
            cont +=i
        }
        console.log(cont)
        console.log(array.reduce((cont, vec) => cont+vec))
    }

    const mayor36 = (array) =>{
        let mayor36 = []
        for( i of array){
            if (i>=36){
            mayor36.push(i)
            }
        }
        console.log(mayor36.reduce((cont, num)=> cont+num))
    }
    
    const mayor50 = (array) =>{
        for (i of array){
            if(i>=50){
                console.log(i)
            }
        }
    }
*/

//2 Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente. 
//El tamaño del vector es a elección.
/*
let pass = 'cont'
let vec1 = []
let vec2 = []

    while(pass != 'listo'){
        let input = prompt('Ingrese un número, y escriba listo cuando quiera salir: ').toLowerCase();
    if (input == 'listo') {
        pass = 'listo';
    } else {
        let num = parseFloat(input);
        if (isNaN(num)) {
            console.log('Esto no es un número');
        } else {
            vec1.push(num);
        }
    }
}

    //1,2,3,4-listo
    const NumVec2 = (array) =>{
        for(let i = 0; i<array.length; i++){
        let num2 = parseInt(prompt('Ingrese un numero: '))
        vec2.push(num2)
        }
    }

    const Sumavec1vec2 = (array, array2)=>{
        vec3 = []
        for(i in array){
        let resultado = array[i] + array2[i]
        vec3.push(resultado)
        }
        console.log(vec3)
    }

    NumVec2(vec1)
    console.log(vec1)
    console.log(vec2)
    Sumavec1vec2(vec1,vec2)
*/

    function cargarVectores(vec1, vec2) {

        for (let f = 0; f < vec1.length; f++) {
            let valor = prompt('Ingrese componente del primer vector:', '');
            vec1[f] = parseInt(valor);
        }
        for (let f = 0; f < vec2.length; f++) {
            let valor = prompt('Ingrese componente del segundo vector:', '');
            vec2[f] = parseInt(valor);
        }
    }

    function sumarVectores(vec1, vec2, vecsuma) {
        for (let f = 0; f < vecsuma.length; f++) {
            vecsuma[f] = vec1[f] + vec2[f];
        }
    }

    function imprimirVector(vecsuma) {
        for (let f = 0; f < vecsuma.length; f++) {
            document.write(vecsuma[f] + ' ');
        }
    }

    let vec1 = new Array(5);
    let vec2 = new Array(5);
    let vecsuma = new Array(5);
    cargarVectores(vec1, vec2);
    sumarVectores(vec1, vec2, vecsuma);
    imprimirVector(vecsuma);
