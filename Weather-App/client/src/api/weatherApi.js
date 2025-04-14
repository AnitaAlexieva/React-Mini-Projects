import { requester } from "../utils/requester"


export const  getWreather = async (cityName) =>{
    const data = await requester(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=443e51215c2f4f0eaf705b1659b6d924&units=metric`,
        "GET"
    )

    const weather = await data.json();
    return weather;
}