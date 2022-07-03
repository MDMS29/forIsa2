
const formulario = document.querySelector("#formulario");
var arreglo = [1, 2 , 3]; //ARREGLO

// arreglo.push(4); //agrega un elemento de ultimo en el arreglo
// console.log(arreglo);

// arreglo.unshift(0); //agrega un elemento de primero en el arreglo
// console.log(arreglo);

// arreglo.pop();//elimina el ultimo elemento del arreglo
// console.log(arreglo);

// arreglo.shift();//elimina el primer elemento del arreglo
// console.log(arreglo);
 


// formulario.addEventListener("submit", function(e){
//     e.preventDefault();
//     const nombre = document.querySelector(".nombre").value;
//     const numero = document.querySelector(".arreglo").value;
//     const resultado = document.querySelector("#resultado");
//     const resultado1 = document.querySelector("#resultado1");

//     arreglo.push(nombre); //agrega a el arreglo el Nombre ingresado
//     arreglo.push(Number(numero)); //agrega a el arreglo el Numero ingresado
//     resultado.textContent = document.write(arreglo); //muestra el arreglo en el documento
//     console.log(arreglo);  //muestra en consola
    
//     let suma = arreglo[0] + 8; //suma el primer arreglo del arreglo
//     console.log(suma); //muestra el resultado en el documento
//     resultado1.textContent = document.write(suma);//muestra en consola
// });


/*------- .forEach --------*/
// arreglo.forEach(element => console.log(element)); //recorre todo el arreglo y muestra cada uno de los elementos


/*------- .map --------*/
// var multi = arreglo.map(function(x){ //recorre el arreglo y crea un nuevo array con los mismos elementos    
//     return x*3; //retornara la multiplicacion de cada elemento
// })
// console.log(multi);


// /*------- .filter --------*/
// var filtro = arreglo.filter(arreglo => arreglo == 3); //busca en el arreglo todo los valores que queremos encontrar
// console.log(filtro) //imprime los valores encontrados por el filtro

/*------- .split() -----------*/
// let vocales = ["a","e","i","o","u"];
// for(let i = 0; i < vocales.length; i++){
//     var miCadena = "Hola Mundo. Cómo estas hoy?";
//     var divisiones = miCadena.split(vocales[i], 3)/*corta la cadena por n espacios*/.join('**');
//     console.log(i + " "+ divisiones)
// }
//  var miCadena = "Hola Mundo. Cómo estas hoy?";
//  var divisiones = miCadena.split(" "); //corta la cadena por n espacios
//  console.log(divisiones);


/*------- .join() -----------*/ //une los elementos de la matriz
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


/*------- .reverse() -----------*/
// const elements = ['Fire', 'Air', 'Water'];
// function solution(elements){
//     for(let i = 0; i < elements.length; i++){
//         let palabra = elements[i].split('').reverse().join('')
//         console.log(i + " "+ palabra)
//     }
// } 
// solution(elements);

// const elements = 'Fire';
// let suma = elements.split('').reverse().join('');
// console.log(suma);



/*------- for in -----------*/
//  const numbers = [45, 4, 9, 16, 25];
//  let txt = "";
//  for (let x in numbers) {
//    txt += numbers[x] + "<hr>"; //puedes poner cualquier etiqueta para diferenciar 
//  }
//  document.write(txt);
//  console.log(txt); 

