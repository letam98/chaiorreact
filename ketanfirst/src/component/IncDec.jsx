import { useState } from "react";

const  IncDec = () =>{

    const [counter,setCounter]=useState(0);

    const incrementData = () =>{
        setCounter(preCounter => preCounter+1);
        setCounter(preCounter => preCounter+1);
        setCounter(preCounter => preCounter+1);
        setCounter(preCounter => preCounter+1);
        setCounter(preCounter => preCounter+1);

    }

    const decrementData = () =>{
        setCounter(counter-1);
    }

    return(
        <>
        <h1>{counter}</h1>
        <button type="text" onClick={incrementData}>Increment</button>
        <button type="text" onClick={decrementData}>Increment</button>
        </>
    );

}
export default IncDec;