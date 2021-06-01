
import React from 'react'
import { CitiesForm } from '../components/CitiesForm';
import { getDataCountries } from '../clients/countriesClient'
import {deleteDataCities, getDataCities, postDataCities } from '../clients/citiesClient'

export class Cities extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cities: [],
            countriesFromAPI: [],
            citiesFromAPI: []
        }
    }

    updateCountriesFromAPI = (datos) => {
        this.setState({
            countriesFromAPI: datos
        })
    }

    updateCitiesFromAPI = (datos) => {
        this.setState({
            citiesFromAPI: datos
        })
    }

    componentDidMount(){

        getDataCountries(this.updateCountriesFromAPI)
        getDataCities(this.updateCitiesFromAPI)

    }

    addCity = (city , countrieId) => {
        postDataCities(city, countrieId)
    }

    deleteCity = (id) =>{
        if(deleteDataCities(id)){
            alert('La cuidad se ha eliminado con éxito')
        }
    }

    render(){
        return(
            <>
            <div className="save-localS">
                <CitiesForm addCity={this.addCity} countriesFromAPI={this.state.countriesFromAPI} />
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>País</th>
                                <th>Cuidad</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.citiesFromAPI.map(city => 
                                <tr className="list-group" key={city.id}>
                                    <td className="table-item">{city.countrie.name}</td>
                                    <td className="table-item">{city.name}</td>
                                    <td className="item-delete">
                                        <button className="btn-delete" onClick={() => this.deleteCity(city.id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    }
}