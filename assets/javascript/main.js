let nombreJugador = prompt("Ingrese el nombre del jugador");
let edadJugador = Number(prompt("Ingrese la edad del jugador"));
let alturaJugador = Number(prompt("Ingrese la altura del jugador en cm"));
let posicion = prompt("Ingrese la posicion del jugador");


if (nombreJugador !== "" && edadJugador > 15 && alturaJugador >= 160) {
    
    console.log("El jugador " + nombreJugador + " cumple con los requisitos.");

    
    if (edadJugador >= 18) {
        console.log("Clasifica para la categoría: ADULTO"); 
    } else {
        console.log("Clasifica para la categoría: JUVENIL"); 
    }

} else {
    
    if (nombreJugador === "") {
        console.log("Error: El nombre no puede estar vacío."); 
    } else if (isNaN(edadJugador) || edadJugador <= 15) {
        console.log("Error: Edad no válida o menor a 15 años."); 
    } else {
        console.log("El jugador no cumple con la altura mínima de 160 cm."); 
    }
}