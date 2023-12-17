import './Counter.css'
import {useState} from "react";
import CounterButton from './CounterButton';

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterFunction(by) {
        setCount(count + by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterFunction}/>
            <CounterButton by={3} incrementMethod={incrementCounterFunction}/>
        </>
    
    )
}