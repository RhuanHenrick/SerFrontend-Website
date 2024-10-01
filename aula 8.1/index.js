// //Laços de Repetição //
// // For Loop //
// for(let i=1; i<=10; i++){
//     console.log("O Número é: ", i )
// }

// //While Loop //
// let i=1;
// while (i<=10) {
//     console.log("Número é: ", i)
//     i++

// }
// //Do While Loop // mesmo resultado do while porem ele verifca depois do processamento
//  let index = 1;
//  do{
//     console.log("O valor é: ", index);
//     index++
//  }
//  while(index<=20)

// //For in Loop//
// const myCar = {
//     model: "BMW",
//     year: 2020,
//     color: "White",
//     km: 68000
// }
// for(let key in myCar) {
//     console.log(key, myCar[key])
// }
// //For... of Loop
// const produtos=["smartphone","smartwatch","notebook"]

// for(let produto of produtos) {

//     if(produto=="notebook"){
//         console.log("Achou o produto")
//     }
//     console.log(produto)
// }

// //OOP//
// const book = {
//     title:"A metamorfose",
//     author:"Franz Kafka",
//     pages:96,
//     price: 63.90,
// }
// console.log(book)
//tambem tem como criar funçoes dentro de objetos//


//Factoty Fuction //

// function creatBook(title, author, pages, price) {
    
//     const book = {

//         title:title,
//         author: author,
//         pages: pages,
//         price: price,

//     }
//     return book
// }
// const book1 = creatBook("A Metarmofose" , "Franz Kafka" , 96 , 63.90)
// book1.title="Na Colônia Penal "

// console.log(book1)

//Constructor Function //

class createBook{

    constructor(title, author, pages, price){

    this.title = title;
    this.autor = author;
    this.pages = pages;
    this.price = price;

    }
}
const book1 = new createBook("A Metarmofose", "Franz Kafka", 96,63.90)
console.log(book1)

const book2 = new createBook("Meu Pé de Laranja Lima","José Mauro de Vasconcelos",193,45.90)
console.log(book2)

const book3 = new createBook("Coraline","Neil Gaiman",224,52.90)
console.log(book3)


class createMovies{
    constructor(Name, author,time, platform, tems){
        this.Name = Name;
        this.author = author;
        this.time = time;
        this.platform = platform;
        this.tems = tems;
    }
}
    const movie1 = new createMovies("Avengers","Joe Russo, Anthony Russo","3h e 01m","Disney Plus", "Ficção Científica");
    console.log(movie1)