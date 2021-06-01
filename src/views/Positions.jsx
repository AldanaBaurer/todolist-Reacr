import React from 'react'
import { PositionsForm } from '../components/PositionsForm'
import { getDataCompanies } from '../clients/companiesClient'
import {deleteDataPositions, getData, postData } from '../clients/positionsClient'

export class Positions extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            positions: [],
            companiesFromAPI: [],
            positionsFromAPI: []
        }
    }

    updateCompaniesFromAPI = (datos) => {
        this.setState({
            companiesFromAPI: datos
        })
    }

    updatePositionsFromAPI = (datos) => {
        this.setState({
            positionsFromAPI: datos
        })
    }

    componentDidMount(){
        getDataCompanies(this.updateCompaniesFromAPI)
        getData(this.updatePositionsFromAPI)
    }

    addPosition = (position, description, organizationId) => {
        postData(position, description, organizationId)
    }

    deletePosition = (id) =>{
        deleteDataPositions(id);
    }

    render(){
        return(
            <>
            <div className="save-localS">
                <PositionsForm addPosition={this.addPosition} companiesFromAPI={this.state.companiesFromAPI} />
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>Puesto</th>
                                <th>Descriptión</th>
                                <th>Organización</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.positionsFromAPI.map(position => 
                                <tr className="list-group" key={position.id}>
                                    <td className="table-item">{position.position}</td>
                                    <td className="table-item">{position.description}</td>
                                    <td className="table-item">{position.organization.name}</td>
                                    <td className="item-delete">
                                        <button className="btn-delete" onClick={() => this.deletePosition(position.id)}>
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