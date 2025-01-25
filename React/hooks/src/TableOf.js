import React from 'react'
import './TableOne.css'
class TableOf extends React.Component {

    renderTableOf = () => {
        let i = 1;
        let array = [];
 
         while (i <= 10) {
             let index = i;
             // defining ui
             let ui = (
                 <button className="cell-button"
                     style={{ backgroundColor: "lightblue", fontSize: "20px" }}
                     onClick={() => {
                          this.buttonClick(index);
                           }}
                           >
                     {index}
 
                 </button>
             );
 
             // ADDING UI TO ARRAY
             array.push(ui);
             // LOOP INDEX
             i++
         };
 
         return <div className="row">{array}</div>
     };
 
     buttonClick=(index)=>{
         console.log("index==", index);
         this.setState({tableOf:index});
     }
 
     render() {
         return (
         <div className='table'>
             {this.renderTableOf()}
             {/* {this.renderTable()} */}
         </div>
         )
     };
 
 
 }
 export default TableOf;

