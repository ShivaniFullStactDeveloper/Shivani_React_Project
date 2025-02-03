import React from "react";
import './PortFolio.css'

import BulbJSX from './RJ1_Component/BulbJSX';
import Actors from './Actors';
import DynamicImageState from "./RJ1_Component/DynamicImageState";
import Table from "./Table";
// import indexProfile from "./Profile_ExportImport/indexProfile";

 class PortFolio extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Active: false,
      project: null,
      titleName: ""

    }
  }

  // project list component
  projects=[
    {name: "Bulb", component: <BulbJSX/>},
    {name: "Actors", component: <Actors/>},
    {name: "Dynamic image", component: <DynamicImageState/>},
    {name: "Table", component: <Table/>},
    // {name: "Profile", component: <indexProfile/>}
  ];

  // fnction 
  checkClick = (project) =>{
    this.setState({
      Active: true,
      project: project.component,
      titleName: project.name,
    })
  };

  render(){
    return(
      <div className="container">
        {/* project section */}
        <div className="project-container">
          { this.projects.map((project, index) =>(
            <div key={index} 
            className="project" 
            onClick={() => this.checkClick(project)}>

            <h3>{project.name}</h3>
          </div>
          ))}
        </div>

        {/* project show section */}
        <div className="sec-container">
          {this.state.Active && (
            <div >
              {/* <h2>{this.state.titleName}</h2> */}
              {this.state.project}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PortFolio;