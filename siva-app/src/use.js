import { useState } from "react"

export default function Use(){
    const [count,setName]=useState(0);
    return(
        <>
        <button className="btn border-secondary" onClick={()=>setName(count+1)}>+</button>
        <p>Value:{count}</p>
        <button className="btn border-secondary" onClick={()=>setName(count-1)}>-</button>
        <button className="btn border-secondary" onClick={()=>setName(0)}>Reset</button>

        <button onClick={()=>setName(count+1)}>clicked:{count}</button>
        </>
    )
}