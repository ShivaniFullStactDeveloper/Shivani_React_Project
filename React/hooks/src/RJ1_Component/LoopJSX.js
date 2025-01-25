import React from "react";

export default class LoopJSX extends React.Component {

    render() {
        const fruits = ["apple", "banana", "Orange", "Mango", "Pineapple"];

        return (
            <div>
                <h1>Fruit List</h1>
                <ul>
                    {fruits.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        );
    };
}