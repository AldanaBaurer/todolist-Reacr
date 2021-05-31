import React from 'react'
import { CompaniesForm } from '../components/CompaniesForm'
import { getDataCities } from '../clients/citiesClient'
import {deleteDataCompanies, getDataCompanies, postDataCompanies } from '../clients/companiesClient'

export class Companies extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            companies: [],
            citiesFromAPI: [],
            companiesFromAPI: []
        }
    }

    updateCitiesFromAPI = (datos) => {
        this.setState({
            citiesFromAPI: datos
        })
    }

    updateCompaniesFromAPI = (datos) => {
        this.setState({
            companiesFromAPI: datos
        })
    }

    componentDidMount(){
        getDataCities(this.updateCitiesFromAPI)
        getDataCompanies(this.updateCompaniesFromAPI)
    }

    addCompanies = (company, placeId) => {
        postDataCompanies(company,placeId)
    }

    deleteCompanies = (id) =>{
        deleteDataCompanies(id);
    }

    render(){
        return(
            <>
            <div className="save-localS">
                <CompaniesForm addCompanies={this.addCompanies} citiesFromAPI={this.state.citiesFromAPI} />
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>Cuidad</th>
                                <th>Organización</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.companiesFromAPI.map(company => 
                                <tr className="list-group" key={company.id}>
                                    <td>{company.place.name}</td>
                                    <td>{company.name}</td>
                                    <td>
                                        <button className="btn-delete" onClick={() => this.deleteCompany(company.id)}>
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