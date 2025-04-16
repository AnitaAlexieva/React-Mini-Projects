import { useEffect, useState } from "react"
import { getWreather } from "../api/weatherApi"

export default function WeatherCard() {

    const [city, setCity] = useState('Plovdiv')
    const [weather, setWeather] = useState(null)
    const [isClicked, setIsClicked] = useState(false);

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
    if (!weather) {
        return <p>Loading weather...</p>;
    }
   
    const ChangeBackground = (temp) =>{
        if(temp <= 0) return 'bg-freezing'
        if(temp <=10) return 'bg-cold'
        if(temp <= 18) return 'bg-mild'
        if(temp <=25) return 'bg-warm'
        if(temp <= 35) return 'bg-hot';
        return 'bg-very-hot'
    }

    return (
        <>
        <div className={`app-wrapper ${ChangeBackground(weather.main.temp)}`}>
            
            <form className="weather-serach" onSubmit={WeatherHandler}>
                <input className="search-input" type="text" name="search" placeholder="My location is..." />
                <button className="search-btn" type="submit">Search</button>
            </form>

            {!isClicked ? (
                <div className="weather-card">
                    <div className="weather-info">
                        <div className="weather-text">
                        <h3 className="weather-h3">Weather in {city}</h3>
                            
                            <p>Weather description: {weather.weather[0].description}</p>
                            <p>Wind speed: {weather.wind.speed} km/h</p>
                        </div>
                        <div className="weather-icon">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather icon"
                            />
                            <p className="temp">{weather.main.temp} °C</p>
                        </div>

                    </div>
                    <div className="btn-container">
                        <button className="more-btn" onClick={()=> setIsClicked(true)}>Read More</button>
                    </div>
                </div>
            ) : (
                <div className="weather-card">
                    <div className="weather-info">
                        <div className="weather-text">
                            <h3 className="weather-h3">Weather in {city}</h3>
                            <p>Feels like: {weather.main.feels_like} °C</p>
                            <p>Max tempreture: {weather.main.temp_max}</p>
                            <p>Min tempreture: {weather.main.temp_min}</p>
                            <p>Clouds: {weather.clouds.all}</p>
                            <p>Weather description: {weather.weather[0].description}</p>
                            <p>Wind speed: {weather.wind.speed} km/h</p>
                        </div>
                        <div className="weather-icon">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather icon"
                                />
                            <p className="temp">{weather.main.temp} °C</p>
                        </div>

                    </div>
                    <div className="btn-container">
                        <button className="more-btn" onClick={()=> setIsClicked(false)}>Show Less</button>
                    </div>
                </div>
            )}
        </div>

        </>
    )
}