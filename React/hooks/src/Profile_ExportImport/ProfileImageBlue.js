import React from "react";
import './ProfileImage.css';
import fevimage from '../Assets/Images/gallaryimage.png'

export default class ProfileImageBlue extends React.Component {
    render(){

        return(
            <div className="portfolio-div2">
            <img src={fevimage} className="image"/>
        </div>
        );
    };
}
