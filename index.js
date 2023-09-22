function Conversor(){
    
let valor
let temperatura
let result

console.log("Digite 'f' para Fahrenheit:\n")
console.log("Digite 'c' para Celsius: \n")
temperatura = prompt()

console.log("Digite o valor que deseja converter:\t")
valor = parseFloat(prompt())

switch(temperatura){
case 'f':
result = valor - 32 * 5/9
console.log("A conversão para graus Celsius é: ", result)
break		 
case 'c': 
result = valor * 9/5 +32
console.log("A conversão para graus Fahrenheit é: ", result)
break
 
   }
}