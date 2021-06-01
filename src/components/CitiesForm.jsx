import React from 'react'

export class CitiesForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            city: {
                name: "",
                countrieId: ""
            },
            cities: [],
            countries: []
        }
    }

    handleCity = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: {
                name: e.target.value,
                countrieId: ""
            }
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: {
                name: this.state.city.name,
                countrieId: JSON.parse(e.target.value)
            }
		});
	};

    
    submitForm = (e) => {

        if((this.state.city.name).trim() === "" || (this.state.city.countrieId) === ""){
            alert("No se han ingresado datos")
        }else{
            e.preventDefault();

            this.props.addCity(this.state.city.name, this.state.city.countrieId);

            this.setState({
                city: {
                    name: "",
                    countrieId: ""
                }
            })
            alert("Cuidad creada")
        }
    };

    render(){
        return(
            <>
            <div className="inputs">
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div className="input-form">
                        <label> Ingrese una ciudad</label>
                        <input 
                            name="city" 
                            type="text" 
                            value={this.state.city.name} 
                            onChange={(e) => this.handleCity(e)} 
                            />
                    </div>
                    <div className="selec-form">
                        <label>Seleccione un pais</label>
                        <select 
                            className="select" 
                            id="selectCountries"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.city.countrieId)}
                            name="city"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            {this.props.countriesFromAPI.map((country) => (
                                <option key={country.id} value={JSON.stringify(country.id)}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn-add">Agregar</button>
                </form>
            </div>
            </>
        )
    }
}