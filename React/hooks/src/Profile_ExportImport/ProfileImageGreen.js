import React from "react";
import './ProfileImage.css';

export default class ProfileImageGreen extends React.Component {
    render(){
        const defaultImage= "https://static.thenounproject.com/png/4595376-200.png";

        return(
            <div className="portfolio-div3">
            <img src={defaultImage} className="image"/>
        </div>
        );
    };
}
