// Solicitar o pedir mediante ventana el ingreso de su edad y mostrarlo por consola
// Declarar la sigte palabra nomelavoyallevar imprimir por consola una letra por renglon
// Declarar un arrat vacio, ejecutar un bucle que vaya del 80 al 100 inclusive agregar cada uno de los numeros por array y mostrarlo por consola todo entero
// Declara un array vacío

// Se tiene la siguiente matriz: hay que efectuar la suma de diagonal principal y restarle la suma de la diagonal secundaria
let matriz=[[1,2,3],[7,8,9],[4,5,6]];

let sumaDiagonalPrincipal = 0;
let sumaDiagonalSecundaria = 0;

for (let i = 0; i < matriz.length; i++) {
    sumaDiagonalPrincipal += matriz[i][i];
    sumaDiagonalSecundaria += matriz[i][matriz.length - 1 - i];
}

let resultado = sumaDiagonalPrincipal - sumaDiagonalSecundaria;

console.log("Suma de la diagonal principal:", sumaDiagonalPrincipal);
console.log("Suma de la diagonal secundaria:", sumaDiagonalSecundaria);
console.log("Resultado:", resultado);
