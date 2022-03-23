let arrPelis = [
    {
        nombre: "SHERK",
        idioma: "español",
    },
    {
        nombre: "IRON MAN",
        idioma: "español",
    },
    {
        nombre: "ERA DE HIELO",
        idioma: "ingles",
    },
    {
        nombre: "RAPIDOS Y FURIOSOS",
        idioma: "español",
    },
    {
        nombre: "PIRATAS DEL CARIBE",
        idioma: "español",
    },
    {
        nombre: "HARRY POTTER",
        idioma: "ingles",
    },
];
let peliculas = [];

let search = prompt("Ingresa el idioma");
for (let i = 0; i < arrPelis.length; i++) {
    if (search == arrPelis[i].idioma) {
        peliculas.push(arrPelis[i].nombre,arrPelis[i].idioma);    
    }   
}
document.write(peliculas);