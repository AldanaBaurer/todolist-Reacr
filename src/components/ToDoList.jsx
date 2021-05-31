import React from 'react'

export class ToDoList extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
    }
    
    render(){
        return (
            <tr className="list-group" key={this.props.id}>
                <td>{this.props.position}</td>
                <td>{this.props.company}</td>
                <td>{this.props.city}</td>
                <td>{this.props.country}</td>
                <td>
                    <button className="btn-delete" onClick={() => this.props.onDelete(this.props.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        );
    }
}