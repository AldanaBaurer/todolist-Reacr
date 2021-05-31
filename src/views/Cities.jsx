
import React from 'react'
import { CitiesForm } from '../components/CitiesForm';

export class Cities extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cities: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities"))
            })
        }
    }

    addCity = (newCity) => {
        this.setState({
            cities: [...this.state.cities, newCity]
        })
    }

    saveCity = () => {
        window.localStorage.setItem("cities", JSON.stringify(this.state.cities))
    }

    render(){
        return(
            <>
            <div className="save-localS">
                <CitiesForm addCity={this.addCity} countries={this.state.countries} />
                <button type="submit" className="btn-form" onClick={this.saveCity}>Guardar<i className="fas fa-save"></i></button>
            </div>
            </>
        )
    }
}