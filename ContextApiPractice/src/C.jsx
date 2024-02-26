import {data,mydata} from "./App"
import React,{useContext} from "react";{}



function C(){
    let name = useContext(data);
    let age = useContext(mydata);
    
    return (
        <>

        <h1>{name} {age}</h1>
            {/* <data.Consumer>
                {
                    (name)=>{
                        
                        return (
                            <mydata.Consumer>
                                {
                                    (age)=>{
                                            return(
                                                <h1>{name} {age}</h1>
                                            )
                                    }
                                }
                            </mydata.Consumer>
                        )
                    }
                }
            </data.Consumer> */}
        </>
    )
}

export default C;
