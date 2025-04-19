import { useEffect, useState } from "react";
import { requester } from "../utils/requester";

export default function Quote() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [tag, setTag] = useState('');

    useEffect(() => {
        setQuote('"Your generated quote will appear here"');
        setAuthor('Author');
    }, []);

    const takeRandom = async () => {
        const data = await requester('/api/api/qotd', 'GET');
        console.log(data);

        setQuote(data.quote.body);
        setAuthor(data.quote.author);
    };

    const takeByTag = async (tag) => {
        const response = await fetch(`/api/api/quotes/?filter=${tag}&type=tag`, {
            headers: {
                Authorization: `Token token="1a8cc6a5d4e18416cb9ce4611465a139"`,
            },
        });
    
        const data = await response.json();
        console.log(data);
    
        if (data.quotes && data.quotes.length > 0) {
            const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
            setQuote(randomQuote.body);
            setAuthor(randomQuote.author);
        } else {
            setQuote("No quotes found for this tag.");
            setAuthor("");
        }
    };
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tag.trim()) {
            takeByTag(tag); 
        }else{
            tag.trim();
            takeByTag(tag);
        }
    };
    

    const handleTagChange = (e) => {
        setTag(e.target.value);
    };

    return (
        <div className="quote">
            <div className="search">
                <form className="category-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="tag"
                        placeholder="Write category..."
                        value={tag}
                        onChange={handleTagChange}
                    />
                    <button type="submit">Search</button>
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
