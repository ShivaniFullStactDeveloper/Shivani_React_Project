import React from "react";
import "./DynamicImageState.css";

export default class DynamicImageState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: "apple", 
        };
    }

    fruitImages = {
        apple: "https://freshsensations.com.au/cdn/shop/products/Apple_Red_Delicious.png?v=1555678920",
        banana: "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjQwMDBkOWQxODAzNTQzOWIzNTRkMTM0Yzg0NzZhNjFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=1f9ff610dcf16db66520535b5486ac743ef10be7766d32b1f02c8cd959b31703",
        orange: "https://onlinetarkari.com/wp-content/uploads/2020/06/orange-600x600-500x500-1.jpg",
    };

    handleFruitChange = (event) => {
       if (event == null) {
        if (this.state.fruit === "apple") {
            this.setState({ fruit: "banana" });
        }
        else if (this.state.fruit === "banana") {
            this.setState({ fruit: "orange" });
        }
        else {
            this.setState({ fruit: "apple" });
        }
       }
       else{
        this.setState({ fruit: event.target.value });
       }
    };

    render() {
        return (
            <div className="main-container">
                <h1>Select a fruit</h1>
                <select value={this.state.fruit} onChange={this.handleFruitChange}>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select>
                <img 
                    src={this.fruitImages[this.state.fruit]} 
                    alt={this.state.fruit} 
                    className="fruit-image"
                    onClick={()=>this.handleFruitChange(null)}
                />
            </div>
        );
    }
}