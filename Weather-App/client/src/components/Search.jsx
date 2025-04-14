export default function Search() {
    return (
        <div className="weather-serach">
            <input className="search-input" type="text" name="search" placeholder="My location is..." />
            <button className="search-btn" type="submit">Search</button>
        </div>
    )
}