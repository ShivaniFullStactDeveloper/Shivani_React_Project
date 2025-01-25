import React from 'react'
import './MyComponent.css';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // alert: false, //example property in the state

            // second

            counterone: 0, //example property in the state
            countertwo: 0, //example property in the state
            lastClick: null, //example property in the state
            buttonArray: []
        };
    }



    // Third program
    counterIncrement = (index, buttonClick) => {
        console.log(buttonClick)
        // Create a copy of the buttonArray to update the state
        const copiedArray = [...this.state.buttonArray];
        copiedArray[index] = false;

        this.setState({ lastClick: buttonClick })
        this.setState({ counterone: ++this.state.counterone });

    };


    renderScore = () => {
        // program one
        return <text>{this.props.teamName}</text>;
    };


    renderButton = (index, playerName) => {
        let buttonStyle = { backgroundColor: " green" }

        { this.props.teamName === "INDIA" ? buttonStyle = { backgroundColor: "lightblue" } : buttonStyle = { backgroundColor: "yellow" } }



        return (
            <button style={buttonStyle} className='button' onClick={() => this.counterIncrement(playerName)}>
                {playerName}
            </button>
        );


    }

    render() {

        // const styleOne = { backgroundColor:"yellow", fontSize:"20px" , color:"black"};
        // const styleTwo = { backgroundColor:"pink", fontSize:"20px" , color:"black"};
        // const styleThree = { backgroundColor:"blue", fontSize:"20px" , color:"black"};
        return (
            <div className='team'>


                {this.renderScore()}
                {this.state.buttonArray[0] ? this.renderButton(0, "One") : null}
                {this.state.buttonArray[1] ? this.renderButton(1, "Two") : null}
                {this.state.buttonArray[2] ? this.renderButton(2, "Three") : null}
                {this.state.buttonArray[3] ? this.renderButton(3, "Four") : null}
                {this.state.buttonArray[4] ? this.renderButton(4, "Five") : null}
                {this.state.buttonArray[5] ? this.renderButton(5, "Six") : null}
                {this.state.buttonArray[6] ? this.renderButton(6, "Seven") : null}
                {this.state.buttonArray[7] ? this.renderButton(7, "Eight") : null}
                {this.state.buttonArray[8] ? this.renderButton(8, "Nine") : null}
                {this.state.buttonArray[9] ? this.renderButton(9, "Ten") : null}
                {this.state.buttonArray[10] ? this.renderButton(10, "Eleven") : null}


            </div>
        );
    }
}
export default MyComponent;