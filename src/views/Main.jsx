import React from 'react'
import { ToDoForm } from '../components/ToDoForm'
import { ToDoList } from '../components/ToDoList'

export class Main extends React.Component{

    constructor(props){
    super(props)
    this.state = {
        offers: [],
        countries: [],
        cities: [],
        companies: []
    }
    this.deleteOffer = this.deleteOffer.bind(this)
}

componentDidMount(){
    if(localStorage.getItem("countries") != null){
        this.setState({
            countries: JSON.parse(localStorage.getItem("countries")),
        })
    }
    if(localStorage.getItem("cities") != null){
        this.setState({
            cities: JSON.parse(localStorage.getItem("cities")),
        })
    }
    if(localStorage.getItem("companies") != null){
        this.setState({
            companies: JSON.parse(localStorage.getItem("companies")),
        })
    }
}

deleteOffer = (id) => {
    this.setState({
        offers: this.state.offers.filter((offer, index) => index !== id)
    });
}

render() {
    return (
        <>
            <main>
                <div className="inputs main">
                    <ToDoForm onSubmit={this.addOffer}/>
                </div>
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>Puesto</th>
                                <th>Empresa</th>
                                <th>Cuidad</th>
                                <th>Pais</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.offers.map((offer) => {
                                return < ToDoList offers={this.state.offers} key={offer.id} offer={offer} id={offer.id} position={offer.position} country={offer.country} city={offer.city} company={offer.company} onDelete={this.deleteOffer}></ToDoList>
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}
}