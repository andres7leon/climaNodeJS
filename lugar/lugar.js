const axios = require('axios')

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '58900637bamsh6a05dd6f2bc811ap1677c0jsn6370aa598a13' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados para esta ciudad')
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}