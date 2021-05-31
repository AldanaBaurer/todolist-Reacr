import React from 'react'

export class CitiesForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            city: {
                id: "",
                name: "",
                parentCountry: ""
            },
            cities: [],
            countries: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities")),
            })
        }
        if(localStorage.getItem("countries") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("countries")),
            })
        }
    }

    handleCity = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: JSON.parse(e.target.value),
		});
	};

    
    submitForm = (e) => {
        e.preventDefault();

        const newCity = {
            id: 1+Math.random(),
            name: this.state.city,
            parentCountry: this.state.parentCountry
        }

        this.props.addCity(newCity);

        this.setState({
            city: {
                id: "",
                name: "",
                parentCountry: ""
            }
        })
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
                            value={JSON.stringify(this.state.parentCountry)}
                            name="parentCountry"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            {this.state.countries.map((country) => (
                                <option key={country.id} value={JSON.stringify(country)}>{country.name}</option>
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