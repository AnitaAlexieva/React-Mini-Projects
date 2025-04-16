import { useEffect, useState } from "react"
import { getWreather } from "../api/weatherApi"

export default function WeatherCard() {

    const [city, setCity] = useState('Plovdiv')
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const weatherData = await getWreather(city)
            setWeather(weatherData);
        }
        fetchWeather();
    }, [city])

    const WeatherHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const cityName = formData.get('search')


        setCity(cityName);
        console.log(city)
    }

    return (
        <>
            <form className="weather-serach" onSubmit={WeatherHandler}>
                <input className="search-input" type="text" name="search" placeholder="My location is..." />
                <button className="search-btn" type="submit">Search</button>
            </form>



            {weather ? (
                <div className="weather-card">
                    <h3 className="weather-h3">Weather in {city}</h3>
                    <div className="weather-info">
                        <div className="weather-text">
                            <p>Tempreture: {weather.main.temp} °C</p>
                            <p>Weather description: {weather.weather[0].description}</p>
                            <p>Wind speed: {weather.wind.speed} km/h</p>
                        </div>
                        <div className="weather-icon">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather icon"
                            />
                        </div>

                    </div>
                    <div className="btn-container">
                        <button className="more-btn">Read More</button>
                    </div>
                </div>
            ) : (
                <p>Loading weather...</p>
            )}

        </>
    )
}