import React from 'react'

export class CountriesForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            country: {
                name: ''
            }
        }
    }

    handleCountry = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: {
                name: e.target.value
            }
        });
    }
    
    submitForm = (e) => {

        if((this.state.country.name).trim() === ""){
            alert("No se han ingresado datos")
        }else{
            e.preventDefault();

            this.props.addCountry(this.state.country.name);

            this.setState({
                country: {
                    name: ""  
                }
            })

            alert("País creado")

        }  
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

