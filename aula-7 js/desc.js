let price = 800;
let valorDesconto = 0.25;

function saleStatus(price, valorDesconto) {
    let desconto = price * valorDesconto;
    let total = price - desconto;
    console.log("Valor do produto $ ", price +  ", valor do produto com desconto $ ", total )
}
saleStatus(price,valorDesconto);
