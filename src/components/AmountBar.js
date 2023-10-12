
import { useState } from "react";
import getRendomUser from '../Api';
import './AmountBar.css';
function AmountBar({ getData }) {
    const MINI = 1;
    const MAX = 100;
    const [amount, setAmount] = useState(MINI);
    const [cat, setCat] = useState();
    const handleClick = async () => {
        const results = await getRendomUser(amount);
        getData(results);
        // console.log(results);
    }
    const handleInput = (e) => {
        // console.log(e.target.value);
        if(e.target.value>100){
            setAmount(100);
        }
        else{
            setAmount(e.target.value);
        }
        
    }
    return (
        <div className="bar">
            <input value={amount} onChange={handleInput} type="number" min={MINI} max={MAX}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default AmountBar;