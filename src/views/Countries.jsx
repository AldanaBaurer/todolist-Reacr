import React from 'react'
import { CountriesForm } from '../components/CountriesForm'
import {getDataCountries,postDataCountries, deleteDataCountries} from '../clients/countriesClient'

export class Countries extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            countries: [],
            countriesFromAPI: []
        }
    }

    updateCountriesFromAPI = (datos) => {
        this.setState({
            countriesFromAPI: datos
        })
    }

    componentDidMount(){
        getDataCountries(this.updateCountriesFromAPI)
    }
    
    addCountry = (newCountry) => {
        postDataCountries(newCountry)
    }

    deleteCountry = (id) =>{
        if(deleteDataCountries(id)){
            alert('El país se ha eliminado con éxito')
        }
    }

    render(){
        return (
            <div className="save-localS">
                <CountriesForm addCountry={this.addCountry} />
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.countriesFromAPI.map(country => 
                                <tr className="list-group" key={country.id}>
                                    <td className="table-item">{country.name}</td>
                                    <td className="item-delete"> 
                                        <button className="btn-delete" onClick={() => this.deleteCountry(country.id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}