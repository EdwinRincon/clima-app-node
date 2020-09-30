const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodeCity = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeCity}`,
        headers: { 'x-rapidapi-key': 'f76a3b0106msh03e99cbf439015ap197596jsnd48a87f89a39' }
    });

    try {
        const resp = await instance.get();
        const data = resp.data;
        const city = data.name;
        const lat = data.coord.lat;
        const lng = data.coord.lon;
    
        return {
            city,
            lat,
            lng
        }
    } catch (error) {
       console.log(`No hay resultados para ${direccion}`);
       return {
           YourInput: direccion,
           CorrectInput: 'Madrid,es',
           CorrectInput2: 'London,uk',
           lat: null,
           lng: null
       };
    }
    
}


module.exports = {
    getLugarLatLng
}
