import React from 'react'
import { ToDoForm } from '../components/ToDoForm'
import { ToDoList } from '../components/ToDoList'
import { getData } from '../clients/positionsClient'
import { getDataCountries } from '../clients/countriesClient'
import { getDataCities } from '../clients/citiesClient'
import { getDataCompanies } from '../clients/companiesClient'

export class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            offers: [],
            positionsFromAPI: [],
            countriesFromAPI: [],
            citiesFromAPI: [],
            companiesFromAPI: [],
            apiError: false,
        }
        this.deleteOffer = this.deleteOffer.bind(this)
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

    deleteOffer(id) {
        const offers = [...this.state.offers]

        const deleteOffer = offers.filter(item => item.id !== id)

        this.setState({offers: deleteOffer});
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
                    <div className="inputs main">
                        <ToDoForm onSubmit={this.addOffer} 
                            countriesFromAPI={this.state.countriesFromAPI}
                            citiesFromAPI={this.state.citiesFromAPI}
                            companiesFromAPI={this.state.companiesFromAPI}
                            positionsFromAPI={this.state.positionsFromAPI}
                        />
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
                                { this.state.offers.map(offer => 

                                    <tr className="list-group" key={this.props.id}>
                                        <td className="table-item">{this.props.position}</td>
                                        <td className="table-item">{this.props.company}</td>
                                        <td className="table-item">{this.props.city}</td>
                                        <td className="table-item">{this.props.country}</td>
                                        <td className="item-delete">
                                            <button className="btn-delete" onClick={() => this.props.onDelete(this.props.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>
            </>
        )
    }
}