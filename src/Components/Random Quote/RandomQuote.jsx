import React, { useState } from 'react'
import { AiFillCaretRight } from "react-icons/ai"
import { AiOutlineLogout } from "react-icons/ai"
import "./RandomQuote.css"
const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Jonahn Wolfan Von Gother"
    })
    // const [setClick] = useState ();

    // const handleClick =() => setClick (random);
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',',1)} `);
    }
    loadQuotes();
    let iconStyles = {color: "white", fontSize: "36px", cursor: "pointer", height: "36px"};

    

  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {quote.author.split(',',1)}</div>
                <div className="icons">
                    <div className="icons-img1" onClick={()=>{random()}}> 
                        <AiFillCaretRight style={iconStyles} />
                    </div>
                    <div className="icons-img1" onClick={()=>{twitter()}}> 
                        <AiOutlineLogout style={iconStyles} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote