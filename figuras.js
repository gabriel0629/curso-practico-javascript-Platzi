// Codigo del cuadrado

console.group('Cuadrados')

/*const ladoCuadro = 5;
console.log('Los lados del cuadrado miden: '+ ladoCuadro + 'cm')
*/

function perimetroCuadrado(lado) {
    /*p = lado * 4
    return console.log('El perimetro del cuadro es: ' + p + ' cm')*/
    return lado * 4;
}

perimetroCuadrado()

//console.log('El perimetro del cuadro es: ' + perimetroCuadrado + ' cm')
function areaCudrado(lado) {
    return lado**2
}

areaCudrado()

/*const areaCudrado = ladoCuadro**2
console.log('El area del cudrado es: ' + areaCudrado + ' cm^2')
*/
console.groupEnd();

// Codigo del triángulo

console.group('Triángulos')
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
*/

/*
console.log(
    'Los lados del triangulo miden: ' 
    +ladoTriangulo1 
    + ' cm, '
    +ladoTriangulo2
    + ' cm, ' 
    +baseTriangulo 
    + ' cm.' 
    );
const alturaTraingulo = 5.5;
console.log('La altura del triangulo mide: '+ alturaTraingulo + ' cm');
*/

function perimetroTriangulo(laTr1, laTr2,laBas) {
    return laTr1 + laTr2 + laBas;
}

perimetroTriangulo()

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log('El perimetro del traingulo es: ' + perimetroTriangulo +' cm')

function areaTriangulo(altTri, laBas){
    return (altTri*laBas)/2;
}

areaTriangulo()

//const areaTriangulo = (alturaTraingulo * baseTriangulo) / 2;
//console.log('El area del triangulo es: ' + areaTriangulo + ' cm^2')

console.groupEnd()

// Código del circulo

console.group('Circulos')

// Variables 

//Radio
//const radioCirculo = 4;

//Diametro

function diametroCirculo(radio) {
    return radio * 2 ;
}

diametroCirculo()

/*const diametroCiruclo = radioCirculo * 2;
console.log('El diametro de la circunferencia es: ' + diametroCiruclo + ' cm')*/

// Pi
//const PI = 3.1415;
const PI = Math.PI
console.log('El valor de PI es: ' + PI)

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
perimetroCirculo()

//const perimetroCirculo = diametroCiruclo * PI;
//console.log('El perimetro de la circunferencia es: ' + perimetroCirculo +' cm')

// Área de la circunferencia

function areaCirculo(radio){
    return (radio**2) * PI;
}
areaCirculo()
//const areaCirculo = (radioCirculo**2) * PI;
//console.log('El área de la circunferencia es: ' + areaCirculo +' cm^2')

console.groupEnd()

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const permitro = perimetroCuadrado(value);
    alert(permitro)
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = areaCudrado(value);
    alert(perimetro)
}

// Funcion calcular altura triángulo isoceles

/*function alturaTraingulo(l1, l2, base){
    if (l1 === l2 && l1 !== base) {
        console.log('El triangulo es isoseceles')
        const altura = Math.sqrt((l1**2) - (base**2)/4)
        console.log('la altura es: ' + altura)
    }else {
      console.log('No es triangulo isoceles')
    }
}*/

