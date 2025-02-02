import React from 'react'
import './TableOne.css'

class TableOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {tableOf: 1}

    }
    
renderCell = (tableOf, number) => {
        return (
            <div className='row'>
                <table className='cell-button'>{tableOf}</table>
                <text className='multi'>{" x "}</text>
                <table className='cell-button'>{number}</table>
                <text className='multi'>{" = "}</text>
                <table className='cell-button'>{tableOf * number}</table>
            </div>
        );
    };

    renderTable = () => {
        let i = 1;
        let array = [];

        while (i <= 10) {
            array.push(this.renderCell(this.state.tableOf,i));

            i++
        }
        return array;
    }

    render() {
        return (
        <div className='table'>
        
            {this.renderTable()}
        </div>
        )
    };


}
export default TableOne;