import { useState } from "react";

export default function Form(){

    const[name,setName]=useState("");
    function handle(e) {
        // console.log("Data changed");
        console.log(e.target.value);
        setName(e.target.value);
    }
    return(
        <>
        <h1>Hello {name}</h1>
        <input
        onChange={handle}
        type="text" placeholder="Enter ur name" />
        <button>Submit</button>
        </>
    )
}