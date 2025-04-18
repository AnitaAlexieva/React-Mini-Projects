import Quote from "./Quote";

export default function Header() {
    return (
        <div className='app-wrapper'>
            <div className="header-div">
                <p className="p-heading">Hello, let's see your quote for today!</p>
            </div>
           <Quote/>
        </div>
    )
}