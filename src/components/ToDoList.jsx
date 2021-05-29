import React from 'react'

export class ToDoList extends React.Component{

    constructor(){
        super();
    }
    
    render(){
        return (
            <li className="list-group" key={this.props.id}>
                <label>{this.props.offer.position}</label>
                <label>{this.props.offer.company}</label>
                <label>{this.props.offer.city}</label>
                <label>{this.props.offer.country}</label>
                <button className="btn-delete" onClick={() => this.props.onDelete(this.props.id)}><i class="fas fa-trash-alt"></i></button>
            </li>
        );
    }
}