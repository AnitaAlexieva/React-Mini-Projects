export default function Quote() {
    return (
        <div className="quote">
            <div className="search">
                <form className="category-form">
                    <input type="text" name="category" placeholder="Write category..." />
                    <button type="submit">Serach</button>
                </form>
                <button className="random-btn" type="submit">Random Quote</button>
            </div>
            <div className="quote-div">
                <p className="quote-p">"You generated quote will appear here"</p>
                <p>- Author</p>
            </div>
        </div>
    )
}