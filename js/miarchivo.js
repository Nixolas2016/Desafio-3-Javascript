
const juegos = [ {
    id: 1,
    nombre: "Among Us",
    desarrollador: "Innersloth",
    etiquetas: ["Multijugador", "Cooperativos en línea", "Espacios"],
},{
    id: 2,
    nombre: "Fall Guys",
    desarrollador: "Mediatonic",
    etiquetas: ["Multijugador", "Juegos de fiesta", "Para toda la familia"],
},{
    id: 3,
    nombre: "Fallout 4",
    desarrollador: "Bethesda Game Studios",
    etiquetas: ["Mundo abierto", "Posapocalípticos", "Exploración"],
},{
    id: 4,
    nombre: "Mafia: Edición Definitiva",
    desarrollador: "Hangar 13",
    etiquetas: ["Acción", "Mundo abierto", "Crímenes"],
} ]

juegos.splice(3, 4);

console.log(juegos)
