import React, { useEffect, useState } from 'react';


const ChuckNorrisJoke = () => {
    const [joke, setJoke] = useState()
    
    function handleFetch(){
        const url = 'https://api.chucknorris.io/jokes/random';
        fetch(url)
            .then(response => response.json())
            .then((json)=> {
                setJoke(json)
                console.log(json.value);
            });
        
    }

    return (
        <div>
        <button onClick ={handleFetch}>Find a Joke</button>
        <p>{joke.value}</p>
        </div>
    )
}

export default ChuckNorrisJoke;

