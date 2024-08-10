"use client"; // Error Components must be a client component
import { exportTraceState } from "next/dist/trace";
import { useEffect, useState } from "react";

interface ErrorProps {
    error: Error, 
    reset: () => void,
}

const Error = ({error, reset}: ErrorProps) =>{
    useEffect(()=>{
        console.log(error);
    },[error]);

    return(
        <div>
            <h2>Something went Wrong!</h2>
            <button onClick={()=>reset()}>Try Again</button>
        </div>
    )
}

export default Error;