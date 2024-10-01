// console.log(" Java Script Funcionando ")
// let meuNome1 = "Rhuan";
// let meuNome2 = "Henrick";
// let idade = 18;

// console.log("My name is", meuNome1, meuNome2, "and I have" , idade, "years old ")

// // const age = 18
// // age = 19;
// // console.log( age) dara erro por conta da idade do const(constante) ser diferente !//
// let itemName = "Pen"
// let price = 3.99
// let itemAvaliable = true
// let itemColor = null

// console.log( "Nome do produto:",itemName,"preço do produto:",price,"cor do item:",itemColor )

// // ultilizando chaves no vc pode criar variaveis para aplicar oisas a um determinado produto//
// let Pen = {

//     itemName : "Pen",
//     price : 3.99,
//     itemAvaliable :true,
//     itemColor : null,

// }
// console.log(Pen)
// Pen.itemColor = "Red"

// console.log(Pen)

// //Arrays - (Lista) //

// let cars = ["Golf", "Civic", "Corola", "Jetta", "Polo"]
// console.log( cars [0])

// //Functions - (Funções) //


// function saleStatus(status, total) {
//     console.log("Transaction", status, "Total: $ ", total  );
// }


// saleStatus("Approved", 1000)
// saleStatus("Repproved", -999)


// //  contas em js //

// let num1 = 5;
// let num2 = 10;

// console.log(num1+num2)

// let num3 = 10;
// let num4 = 15;

// console.log(num3*num4)

// let num5 = 30;
// let num6 = 6;

// // tipos de contas em js //

// console.log(num5/num6)
// console.log(num5%num6)
// console.log(num5**num6)
// console.log(Math.sqrt(9))

// // atribuir 1 ou retirar um do valor//

// let total = 5;
// console.log(++total)
// console.log(--total)

// // tipos de calculos, realiza a conta sem mostrar o valor e dps de puxar a variavel novamento o valor cai //

// console.log(total++)
// console.log(total--)
// console.log(total)

// // incremento de valor //
// let num7 = 10;
// console.log(num7+=20)
// console.log(num7-=20)
// console.log(num7*=20)
// console.log(num7/=20)

// // indentificação de valores//
// let final = 8;
// console.log(final>0)
// console.log(final<0)
// console.log(final>=8)
// console.log(final<=2)
// console.log(final == 8)
// console.log(final =!8)

// let num8 = 5;
// let num9 = "5";

// console.log(num8 == num9)

// // === é para indentificar o que tem dentro da variavel //

// console.log(num8 === num9)

// //operadores ternários  //

// let driver = 120;
// let speed = driver > 110? "Auta Velocidade" : "Velocidade Baixa "
// console.log(speed)


// // verdadeiro ou falso usando a logica && (só da certo de for v and v or f and f ) //

// let temIdadeMinima = true;
// let temCarteiraMotorista = true;
// let podeDirigir = temIdadeMinima && temCarteiraMotorista;
// console.log(podeDirigir)


// // lógica || OU//

// let idadeIdoso = 65;
// let rg = true;
// let carteirinha = true;
// console.log(idadeIdoso >=idadeIdoso && rg || carteirinha)

// // precedencia de operadores, calculando celsius em fire e vice-versa//

// let valornum = (3 + 4) *2;
// console.log(valornum)

// let celsius = 10
// let fire = (celsius * 9/5) +32
// console.log(fire)

// calculo = (fire-32) * 5/9
// console.log(calculo)

// //Builf-In Objects//

// // console.log(Math.max(2,1,431,32,89,9822,19))
// // console.log(math.min(2,1,431,32,89,9822,19))
// // console.log(math.round(3.5))
// // console.log(math.Pi())

// //string //

// let message = "Olá, tudo bem?"

// // indentificação de valores dentro de textos //

// console.log(message.startsWith("Olá")) // para saber do inicio //
// console.log(message.endsWith("bem?")) // para saber do final //
// console.log(message.includes("tudo")) //  para saber do meio //


// // Template Literals // 


// // para gerar textos automaticos a uma pessoa //

// let name= "Jéssica"
// const email = "Hi, how are you " + name + "? \n The meet is schedule for 10AM!\n"
// console.log(email)

// // ultilizando `´ vc pode criar um texto grande sem ter que colocar \n para pular linha, apenas dando enter da certo! //

// const email2 = `Hi ${name},
// The meet is schedule for 10AM! `
// console.log(email2)

// //Entendendo as arrays a fundo //

// const num = [7,8,9]

// //Para acrescentar valores em lista eu ultilizo var.push // 

// num.push(10)

// //Para acrescentar valores no começo da minha lista eu ultilizo unshift // 

// num.unshift(1,2,3)

//  // Para acrescentar valores em posições especificas da minha lista eu ultilizo var.splice //
//  //O primeiro valor é a casa, o segundo valor é par modificar um valor, e o terceiro é o que vai ser acrescentado! //

//  num.splice(3, 0, 4,5,6)

//  //...//

// console.log(num.indexOf(8))
// //para saber se tem algo incluido dentro da minha variavel eu ultilizo var.include e valor // 
// console.log(num.includes(21))

// //Arrays de referencia //

// const movies=[

//     {id:1, title: "Avengers", rating: 4.7},
//     {id:1, title: "Fast and Furious", rating: 4.9},
//     {id:1, title: "John Wick", rating: 4.5},

// ]
// console.log(movies.find(function(movie){
//     return movie.title === "John Wick"
// }))

// // Arrow Function //
// //Para verificar itens dentro das minhas listas //

// console.log(movies.find(movie=>movie.title==="Avengers"))


// //Removendo itens da Array //
// //Para remover um item de uma array eu ultilizo var.pop()

// const last = num.pop()
// console.log(num)

// //Para remover um item do começo eu ultilizo var.shift()

// const first = num.shift()
// console.log(num)

// //Para remover um valor dentro de uma arrau, selecionando as casa eu ultilizo var.splice()

// const qualquer = num.splice(3,3)
// console.log(num)

//Esvaiando uma array // Para remover todos os itens de uma array eu ultilizo var = [var]

let numbers = [1,2,3,4]
// numbers = []

//outras formas de zerar uma array ou remover uma determinada quantia de itens //

// numbers.length = 0

// numbers.splice(0, numbers.length/2) //posso remover valores tanto no 0 quanto dividir sobre /2 ou etc...
// console.log(numbers)

//Concatenando arrays //

let letters = ["a", "b", "c", "d"]
all = numbers.concat(letters)
console.log(all)

 // fatiamento de arrays //

half = all.slice(3, 5)
console.log(half)


//Como converter string em arrays//

// let valors= Array(message)
// console.log(valors)

//joiining arrays //

let clientes = ["Ana","joao","maria","paulinho","beatriz", "silvio"]
let clientesJoin = clientes.join("-") //colocar traço no nomes //
console.log(clientesJoin)


//Organizar em ordem alafabetica //

clientes.sort() //Para colocar em ordem alfabetica //
clientes.reverse() //Para colocar em ordem contraria // 
console.log(clientes)