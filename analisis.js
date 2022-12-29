//console.log(salarios);

// Análisis personal para juanita
// .find devuelve el primer objeto que coincide


function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);
//     const personaEnBusqueda = "Bruce";
// const persona = salarios.find((persona) => {
//     return persona.name == personaEnBusqueda;
// });
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    //console.log(medianaSalarios);
    return medianaSalarios;

}

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i = 1; i < trabajos.length ; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    //console.log(porcentajesCrecimiento);

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    
    //console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
    //console.log({nuevoSalario})
}


// Análisis empresarial
/* {
  Industrias Mokepon: {
    2018: [salario]
  }
  Industrias Mokepon: {
    2018: [salario, salarios, salarios]
    2019: 
    2025: 
    2026: 
  },
  Industrias Mokepon: {},
  Industrias Mokepon: {},
  Industrias Mokepon: {},
} */

const empresas = {};
for (persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);

    }
}
console.log({empresas});

function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]){
        console.warn("la empresa no existe");
        return;
    } else if(!empresas[nombre][year]){
        console.warn("La empresa no dio salarios ese año");
    }else{
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }

}

function proyeccionPorEmpresa(nombre){
    if (!empresas[nombre]){
        console.warn("la empresa no existe");
    }else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });// [800, 900, 2000]
        
        
        let porcentajesCrecimiento = [];

    for(let i = 1; i < listaMedianaYears.length ; i++){
        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
    }
}

// Analisis General
function medianaGeneral(){
    // FORMA 1 MAS ENTENDIBLE DE HACER ESTE ARREGLO CON NOMBRES Y MEDIANA
    // const nombres = salarios.map(persona => persona.name);
    // const medianaPorCadaNombre = nombres.map(nombre => medianaPorPersona(nombre));
    // console.log({nombres, medianaPorCadaNombre});

    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;
 // slice copia, splice quita del arreglo original
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length); // obtiene el array entre limite y length
    const medianaTop10 = PlatziMath.calcularMediana(top10);

    console.log({top10});
    console.log({medianasOrdenadas});

    return medianaTop10;

}