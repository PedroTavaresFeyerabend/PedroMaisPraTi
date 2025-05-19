let numA = 0
let numB = 1
let i = 0
let proximo 

console.log('Os 10 primeiros números da sequência de Fibonacci:')

for ( i = 1; i <= 10; i++) {
    console.log(numA)          
    proximo = numA + numB       
    numA = numB                  
    numB = proximo      
}