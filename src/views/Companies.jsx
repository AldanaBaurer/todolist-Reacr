import React from 'react'
import { CompaniesForm } from '../components/CompaniesForm'

export class Companies extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("companies") != null){
            this.setState({
                companies: JSON.parse(localStorage.getItem("companies"))
            })
        }
    }

    addCompany = (newCompany) => {
        this.setState({
            companies: [...this.state.companies, newCompany]
        })
    }

    saveCompany = () => {
        window.localStorage.setItem("companies", JSON.stringify(this.state.companies))
    }

    render(){
        return(
            <>
            <div className="save-localS">
                <CompaniesForm addCompany={this.addCompany} cities={this.state.cities} />
                <button type="submit" className="btn-form" onClick={this.saveCompany}>Guardar<i className="fas fa-save"></i></button>
            </div>
            </>
        )
    }
}