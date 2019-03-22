const lugar = require('./lugar/lugar')
const clima = require('./lugar/clima')

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            deman: true
        }
    }).help()
    .argv;

console.log(argv.direccion);


const getInfo = async(dir) => {
    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng)
        return `El clima de ${dir} es de ${temp}.`
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)