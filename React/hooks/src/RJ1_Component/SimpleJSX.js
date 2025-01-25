import React from "react";

export default class SimpleJSX extends React.Component {

    render(){
        return (
            <div style={{backgroundColor:"white", padding:"20px", color:"black"}}>
                <h1>{"Good Mornning"}</h1>
                <p>{"Welcome to react"}</p>
            </div>
        )
    }
}