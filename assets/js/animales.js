//Obtener datos desde animales.json

let animales = (() => {
    const url = "http://127.0.0.1:5500/animales.json";
    console.log('paso url')

    const getDatos = async () => {
        console.log('entro')
        let respuesta = await fetch(url);
        let { animales } = await respuesta.json()
        console.log('getdatos')

        return animales;
    }
    return { getDatos };
})();

export default animales;