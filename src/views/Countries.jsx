import React from 'react'
import { CountriesForm } from '../components/CountriesForm'

export class Countries extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("countries") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("countries"))
            })
        }
    }

    addCountry = (newCountry) => {
        this.setState({
            countries: [...this.state.countries, newCountry]
        })
    }

    saveCountry = () => {
        window.localStorage.setItem("countries", JSON.stringify(this.state.countries))
    }

    render(){
        return (
            <div className="save-localS">
                <CountriesForm addCountry={this.addCountry} />
                <button type="submit" className="btn-form" onClick={this.saveCountry}>Guardar<i className="fas fa-save"></i></button>
            </div>
        );
    }
}