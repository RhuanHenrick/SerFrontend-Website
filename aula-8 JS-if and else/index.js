//If and Else

let driverSpeed = 120
if( driverSpeed > 110) {
    console.log("Alta Velocidade! Multado.")
}
else{
console.log("Velocidade Recomendada, fique de olhos nos radares!")
}

// // else if (driverSpeed >=100 && driverSpeed<=110 ) {
//     // console.log("Cuidado! Proximo ao limite de Velocidade da via ! ")
// }

let airportName = "GRU"
switch ( airportName) {
    case "MCO":
    console.log("Orlando Internacional Airport")
    break;

    case "LAX":
        console.log("Los Angeles Internacional Airport")
        break;

        case "LAS":
            console.log("Las Vegas Internacional Airport")
            break;
            case "GRU":
                console.log("Guarulhos Internacional Airport")
                break;
default:
    console.log("Airport not found")
    break;
}
