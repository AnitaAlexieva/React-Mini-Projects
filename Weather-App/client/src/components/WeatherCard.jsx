import { useEffect, useState } from "react"

export default function WeatherCard() {

    return (
        <>
            <form className="weather-serach">
                <input className="search-input" type="text" name="search" placeholder="My location is..." />
                <button className="search-btn" type="submit">Search</button>
            </form>
            <div className="weather-card">
                <h3 className="weather-h3">Weather in Plovdiv</h3>
                <div className="weather-info">
                    <div className="weather-text">
                        <p>Tempreture: 23</p>
                        <p>Weatehr description:Cloudy</p>
                        <p>Wind speed: 1km/h</p>
                    </div>
                    <div className="weather-icon">
                        <p>Icon</p>
                    </div>
                </div>
            </div>
        </>
    )
}