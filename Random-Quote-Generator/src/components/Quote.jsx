import { useEffect, useState } from "react";
import { requester } from "../utils/requester";

export default function Quote() {
    const takeRandom = async () => {
        const data = await requester('/api/api/qotd', 'GET');
        console.log(data);

        setQuote(data.quote.body);
        setAuthor(data.quote.author);
    };
    return (
        <div className="quote">
            <div className="search">
                <form className="category-form">
                    <input type="text" name="category" placeholder="Write category..." />
                    <button type="submit">Serach</button>
                </form>
                <button className="random-btn" onClick={takeRandom}>
                    Random Quote
                </button>
            </div>
            <div className="quote-div">
                <p className="quote-p">{quote}</p>
                <p>- {author}</p>
            </div>
        </div>
    );
}
