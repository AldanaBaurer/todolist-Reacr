import React from 'react'

export class ToDoList extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
    }
    
    render(){
        return (
            
            <tr className="list-group" key={this.props.id}>
            <td className="table-item">{this.props.position}</td>
            <td className="table-item">{this.props.company}</td>
            <td className="table-item">{this.props.city}</td>
            <td className="table-item">{this.props.country}</td>
            <td className="item-delete">
                <button className="btn-delete" onClick={() => this.props.onDelete(this.props.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
        );
    }
}