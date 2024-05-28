import { leon, lobo, oso, serpiente, aguila } from './tiposDeAnimales.js'
import animales from './animales.js'

let imagenDelAnimal;
let sonidoDelAnimal;
let ListaDeAnimales = [];
let animal;

document.getElementById("animal").addEventListener("change", async (evento) => {
    let animalSeleccionado = evento.target.value;
    const datosDelArchivoJSON = await animales.getDatos();
    const objetoDelAnimal = datosDelArchivoJSON.find((objeto) => {
        return objeto.name === animalSeleccionado

    })
    imagenDelAnimal = `../imgs/${objetoDelAnimal.imagen}`
    sonidoDelAnimal = objetoDelAnimal.sonido;
    const elementoPreview = document.getElementById("preview");
    preview.style.background = `url(${imagenDelAnimal})`
})


document.getElementById("btnRegistrar").addEventListener("click", async () => {
    //Elementos de HTML
    const elementoHTMLDelNombre = document.getElementById("animal");
    const elementoHTMLDeLaEdad = document.getElementById("edad");
    const elementoHTMLDeLosComentarios = document.getElementById("comentarios");


    //Valores de Elementos de HTML
    const nombreDelAnimal = document.getElementById("animal").value
    const edadDelAnimal = document.getElementById("edad").value
    const comentariosDelAnimal = document.getElementById("comentarios").value

    // Obtener datos del archivo JSON
    const datosDelArchivoJSON = await animales.getDatos();







    if (nombreDelAnimal && edadDelAnimal && comentariosDelAnimal) {
        switch (nombreDelAnimal) {
            case "Leon":
                console.log("Creare un Leon")
                animal = new leon(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                console.log(animal)
                break;

            case "Lobo":
                console.log("Creare un Lobo")
                animal = new lobo(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                console.log(animal)
                break;

            case "Oso":
                console.log("Creare un Oso")
                animal = new oso(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                console.log(animal)
                break;

            case "Serpiente":
                console.log("Creare una Serpiente")
                animal = new serpiente(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                console.log(animal)
                break;

            case "Aguila":
                console.log("Creare un Aguila")
                animal = new aguila(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                console.log(animal)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
        }




        ListaDeAnimales.push(animal)

        console.log(ListaDeAnimales)

        elementoHTMLDelNombre.selectedIndex = 0;
        elementoHTMLDeLaEdad.selectedIndex = 0;
        elementoHTMLDeLosComentarios.value = "";
    } else {
        alert("Llena todos los campos")
    }

})