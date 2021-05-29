import React from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDoList } from './ToDoList'

export class ToDo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            offers: []
        }
        this.addOffer = this.addOffer.bind(this)
        this.deleteOffer = this.deleteOffer.bind(this)
    }

    addOffer(Offer){
        this.setState({
            offers: [...this.state.offers, Offer]
        })
    }

    deleteOffer = (id) => {
        this.setState({
            offers: this.state.offers.filter((offer, index) => index !== id)
        });

    }
 
    render() {
        return (
            <>
                <h1>To Do List</h1>
                <main>
                    <div className="inputs">
                        <ToDoForm onSubmit={this.addOffer}/>
                    </div>
                    <div className="list">
                        <ul>
                            {this.state.offers.map((offer, index) => {
                                return < ToDoList key={index} offer={offer} onDelete={() => this.deleteOffer(index)}></ToDoList>
                            })}
                        </ul>
                    </div>
                </main>
            </>
        )
    }
}