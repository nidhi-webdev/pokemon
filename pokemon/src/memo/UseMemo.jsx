import { useState } from "react";


const Expensive = () => {
     const sum = () => {
        console.log("Calculating Sum");

        let i = 0;
        for(i = 0; i <= 1000000000; i++) {
         i = i + 1 
        }
        return i;  
     }

     const total =  sum()
     return <p> Sum: {total} </p>
}


