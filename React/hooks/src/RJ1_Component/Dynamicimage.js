import React ,{useState} from "react";
import './DynamicImage.css'

 function DynaminImage(){
    const [selectFruit, setSelectFruit]= useState("apple");

    // image for different fruits
    const fruitImage= {
        Apple: "https://freshsensations.com.au/cdn/shop/products/Apple_Red_Delicious.png?v=1555678920",
        Banana: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6FFeO_EoVx8gYAF1HkpR_iNl7L4_Iogmpw&s",
        Orange: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",

    };

    const onSelectChange = (event) => {
        console.log("selectFruit");
        setSelectFruit(event.target.value)
    };

return(
    <div>
        <h1>Select a fruit</h1>

{/* Dropdown to select a fruit */}
        <select onChange={onSelectChange}>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
        </select>

        <h2>You selected: {selectFruit}</h2>

        <img className="image" src={fruitImage[selectFruit]}
        alt={selectFruit}/>
    </div>
)
}

export default DynaminImage;