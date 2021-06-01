import React from 'react'
import { ToDoForm } from '../components/ToDoForm'
import { getData } from '../clients/positionsClient'
import { getDataCountries } from '../clients/countriesClient'
import { getDataCities } from '../clients/citiesClient'
import { getDataCompanies } from '../clients/companiesClient'

export class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            positionsFromAPI: [],
            countriesFromAPI: [],
            citiesFromAPI: [],
            companiesFromAPI: [],
            apiError: false,
        }
        
    }

    getPositionsFromAPI = (datos) => {
        this.setState({
            positionsFromAPI: datos
        })
    }

    getCountriesFromAPI = (datos) => {
        this.setState({
            countriesFromAPI: datos
        })
    }

    getCitiesFromAPI = (datos) => {
        this.setState({
            citiesFromAPI: datos
        })
    }

    getCompaniesFromAPI = (datos) => {
        this.setState({
            companiesFromAPI: datos
        })
    }

    
    componentDidMount(){

        getData(this.getPositionsFromAPI)
        getDataCountries(this.getCountriesFromAPI)
        getDataCities(this.getCitiesFromAPI)
        getDataCompanies(this.getCompaniesFromAPI)

    }

    render() {
        return (
            <>
                <main>
                    <ToDoForm onSubmit={this.addOffer}
                        countriesFromAPI={this.state.countriesFromAPI}
                        citiesFromAPI={this.state.citiesFromAPI}
                        companiesFromAPI={this.state.companiesFromAPI}
                        positionsFromAPI={this.state.positionsFromAPI}
                    />
                </main>
            </>
        )
    }
}