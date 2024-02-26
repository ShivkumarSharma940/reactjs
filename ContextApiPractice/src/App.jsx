import C from "./C"
import React,{createContext} from "react";

const data = createContext();
const mydata = createContext();


function App(){
   
    let name = "girish";
    let age = 22;

    return (
        <>
            <data.Provider value={name}>
            <mydata.Provider value={age}>

            <C></C>
            </mydata.Provider>
                
                
            </data.Provider>
       </>
    )
}

export {App,data, mydata};