// Helpers - utils
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumlado = 0, nuevoElemento){
            return valorAcumlado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

function esPar(numero) {
    return (numero % 2 === 0);
    /*if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }*/
}

// Calculadora de mediana

//Mediana General

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);



function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)


// mediana del top 10%


const spliceStar = (salariosColSorted.length *90)/100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(spliceStar, spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log(medianaGeneralCol, medianaTop10Col )