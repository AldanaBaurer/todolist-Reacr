import React from 'react'

export class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: "",
            company: "",
            city: "",
            country: "",
            offers: [],
            countries: [],
            cities: [],
            companies: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("countries") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("countries")),
            })
        }
        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities")),
            })
        }
        if(localStorage.getItem("companies") != null){
            this.setState({
                companies: JSON.parse(localStorage.getItem("companies")),
            })
        }
    }
 
    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }
    
    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: JSON.parse(e.target.value),
		});
	};
    
    addOffer(){

        const newOffer = {
            id:1+Math.random(),
            position: this.state.position,
            company: this.state.company,
            city: this.state.city,
            country: this.state.country
        }

        const offers = [...this.state.offers];

        offers.push(newOffer);

        this.setState({
            offers,
            position: "",
            company: "",
            city: "",
            country: ""
        })
    }

    render(){
        return (
            <>
                <div className="inputs-form">
                    <label> Puesto</label>
                    <input 
                        type="text" 
                        name="position" 
                        placeholder="Ingrese el puesto" 
                        onChange={(e) => this.handleInput(e)} 
                        value={this.state.position}/>
                </div>
                <div className="selecs-form">
                    <div className="select-form">
                        <label>Seleccione un pais</label>
                        <select 
                            className="select" 
                            id="selectCountries"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.cities.parentCountry)}
                            name="country"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            {this.state.countries.map((country) => (
                                <option key={country.id} value={JSON.stringify(country)}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select-form">
                        <label>Seleccione una cuidad</label>
                        <select 
                            className="select" 
                            id="selectCities"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.city)}
                            name="city"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            { this.state.cities.map((city) => city.parentCountry.id === this.state.country.id ? <option key={city.id} value={JSON.stringify(city)}>{city.name}</option> : JSON.stringify({}))}
                        </select>
                    </div>
                    <div className="select-form">
                        <label>Seleccione una empresa</label>
                        <select 
                            className="select" 
                            id="selectCompany"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.company)}
                            name="company"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            { this.state.companies.map((company) => company.parentCity.parentCountry.id === this.state.country.id && company.parentCity.id === this.state.city.id ? <option key={company.id} value={JSON.stringify(company)}>{company.name}</option> : JSON.stringify({}))}
                        </select>
                    </div>
                </div>
                <button className="btn-add" onClick={() => this.addOffer(this.state.position,this.state.company,this.state.city,this.state.country)}>Agregar</button>
            </>
        );
    }
}