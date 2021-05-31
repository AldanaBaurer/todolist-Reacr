import React from 'react'
import { isObjectEmpty } from '../utils/stringUtils'

export class CountriesForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            country: {
                id: '',
                name: ''
            }
        }
    }

    handleCountry = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    submitForm = (e) => {
        e.preventDefault();

            const newCountry = {
                id: 1+Math.random(),
                name: this.state.country
            }

            this.props.addCountry(newCountry);

            this.setState({
                country: {
                    id: "",
                    name: ""
                }
            })
    }

    render() {
        return(
            <div className="inputs">
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div className="input-form">
                            <label>Ingrese un país</label>
                            <input type="text" name="country" onChange={(e) => this.handleCountry(e)} value={this.state.country.name}/>
                        </div>
                        <button type="submit" className="btn-add">Agregar</button>
                </form>
            </div>
        )
    }
}

