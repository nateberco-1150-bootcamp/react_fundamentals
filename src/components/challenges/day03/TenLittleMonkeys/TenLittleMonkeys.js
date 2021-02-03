import {useState} from 'react';
const Monkeys = () => {
    const [count, setCount] = useState (10);

    function handleClick () {
        //Subract count
        if(count != 0) {
        setCount(count - 1)
        }
    }
    
    return (
        <div>
            <h1>Ten Little Monkeys</h1>
            <p>{count != 0 ? `${count} little monkeys jumping on the bed` : "no more monkeys jumping on the bed"}</p>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );       
};
export default Monkeys;