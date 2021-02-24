//divisivel por 3 >> fizz
//divisivel por 5 >> buzz
//div por 3 e 5 >> fizzbuzz
//ñ divisivel por 3 ou 5 >> entrada
//ñ é numero >> 'nao é um numero'
const resultado = fizzBuzz(1);
console.log(resultado);~

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um numero';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz' ;
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
   
    return entrada;
}