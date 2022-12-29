const PlatziMath = {};
//// Funcion calcular Promedio con ciclo for, comentar otras opciones
// function calcularPromedio(lista){
//     //sumar todos los elementos del array / cantidad de elementos
//     let sumaLista = 0;
//     for(let i = 0; i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
//     }
//     console.log(sumaLista / lista.length);
//     return sumaLista / lista.length;
// }

//// Funcion calcular Promedio con funcion reduce, comentar otras opciones
// function calcularPromedio(lista){
//     //sumar todos los elementos del array / cantidad de elementos
    
//     function sumarTodosElementos(valorAcumulado, nuevoValor){
//         return valorAcumulado + nuevoValor;
//     }

//     const sumaLista = lista.reduce(sumarTodosElementos);
//     console.log(sumaLista / lista.length);
//     return sumaLista / lista.length;
// }

// Funcion calcular Promedio con arrow function, comentar otras opciones
PlatziMath.calcularPromedio = function calcularPromedio(lista){
    //sumar todos los elementos del array / cantidad de elementos
    
    const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

    const sumaLista = lista.reduce(sumarTodosElementos);
    return sumaLista / lista.length; // devuelve promedio
}


PlatziMath.esPar = function esPar(lista){
    //numero % 2 true false
    // if(lista.length % 2){
    //     return false;
    // }else{
    //     return true;
    // }
    return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        if (valorAcumulado > nuevoValor){
            return 1;
        }else if (valorAcumulado == nuevoValor){
            return 0;
        }else if(valorAcumulado < nuevoValor){
            return -1;
        }

        // forma rapida y sencilla return valorAcumulado - nuevoValor;
    }
    // forma rapida y sencilla const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, indiceAOrdenar){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[indiceAOrdenar] - nuevoValor[indiceAOrdenar];
        // forma rapida y sencilla return valorAcumulado - nuevoValor;
    }
    // forma rapida y sencilla const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar){ // mediana cuando es par
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{ // mediana cuando es impar
        const indexMitadListaImpar = Math.floor(lista.length / 2); // llegar a la mitad
        return lista[indexMitadListaImpar];
    }

}

PlatziMath.calcularModa = function calcularModa(lista){
    const listaCount = {};
    for(let i = 0; i < lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento] +=1;
        }else{ // primera vez carga en 1
            listaCount[elemento] = 1;
        }
    }


    const listaArray = Object.entries(listaCount);
    const listaBidimensionalOrdenada =  ordenarListaBidimensional(listaArray, 1);
    const listaOrdenadaMaxNumber = listaBidimensionalOrdenada[listaBidimensionalOrdenada.length -1];
    //console.log(listaCount, listaArray, listaBidimensionalOrdenada, listaOrdenadaMaxNumber);
    //console.log("la moda es: " + listaOrdenadaMaxNumber[0]);
    const moda = listaOrdenadaMaxNumber[0];
    return moda;

}


// RETO CLASE 19 

// En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

// Input

// const obj = {
//   123: 'Juanito Alcachofa',
//   456: 'Juanita Alcaparra',
// };

// solution(obj);

// Output

// [
//   {
//     id: "123",
//     name: 'Juanito Alcachofa',
//   },
//   {
//     id: "456",
//     name: 'Juanita Alcaparra',
//   },
// ]

// SOLUCION RETO CLASE 19

//  function solution(obj) {
//     return Object.entries(obj).map(value => {
//       return { id: value[0], name: value[1] }
//     })
//   }

//reto numero 20, conseguir media armonica
const arr5 = [2, 5, 6];
PlatziMath.mediaH = function mediaH(array) {
    if (array.includes(0)) {
        return 'Number must be different from zero.'
    } else {
        let mh = array.length / array.reduce((acc, elem) => acc + (1 / elem), 0);
        return mh;
    }
    console.log(`Media Armonica: ${mediaH(arr5)}`); 
}

//Expected output => Media Armonica: 3.4615384615384617