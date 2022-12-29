//Calcular perimetro y area de un cuadrado
console.group("Cuadrado");

const ladroCuadrado = 5;
const perimetroCuadrado = ladroCuadrado * 4;

const areaCuadrado = ladroCuadrado * ladroCuadrado;

function calcularPerimetroCuadrado(lado1){
    return{
        perimetro: lado1 * 4,
        area: lado1 * lado1,
    }
}

console.log({
    ladroCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});
console.groupEnd("Cuadrado");
// Calcular perimetro y area de un triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimtroTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAlturaTriangulo(lado1, base){
    if(lado1 == base) {
        console.warn("este no es un triangulo isosceles");
    }else{
        // h = raizcuadrada  (lado1**2 - (b**2)/4)
        return Math.sqrt((lado1**2) - ((base** 2)/ 4));
    }
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
	/*
	Calcula la altura (hb) de un triangulo escaleno
	a = lado1
	b = base
	c = lado2
	*/
	const x = (c**2 - a**2 + b**2) / (2 * b);
	const h = Math.sqrt(c**2 - x**2);

	return h;
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd("Triangulo");

// Calcular perimetro y area de un circulo
console.group("Circulo");
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    PI,
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo,
})

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio,2);
    return{
        circunferencia: diametro * PI,
        area: radioAlCuadrado * Math.PI.toFixed(4),
    }
}
console.groupEnd("Circulo");


// Reto 
//En este desafío debes calcular la altura sin decimales de un
//triángulo escaleno (todos sus lados son distintos) o false en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

//Input

//trianguloEscaleno(16,8,10)
//trianguloEscaleno(6,6,6)

//Output

//4
//false