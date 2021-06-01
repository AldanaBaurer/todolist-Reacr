import React from 'react'
import { ToDoList } from './ToDoList';
// import { checkObjet } from '../utils/stringUtils'

export class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: "",
            company: "",
            city: "",
            country: "",
            offers: []
        }
        this.deleteOffer = this.deleteOffer.bind(this)
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

        function checkObjet(obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) return false;
            }
          
            return true;
        }
        if(checkObjet(this.state.position) || checkObjet(this.state.company) || checkObjet(this.state.city) || checkObjet(this.state.country)){
            alert("No se han ingresado datos")

        } else {
            const newOffer = {
            id:1+Math.random(),
            position: this.state.position.position,
            company: this.state.company.name,
            city: this.state.city.name,
            country: this.state.country.name
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
            alert("Oferta de trabajo creada")
        }
    }

    deleteOffer(id) {
        const offers = [...this.state.offers]

        const deleteOffer = offers.filter(item => item.id !== id)

        this.setState({offers: deleteOffer})
        
        alert('La oferta de trabajo se ha eliminado con éxito')
        
    }

    render(){
        return (
            <>
                <div className="inputs main">
                    {this.state.apiError && <p>¡Se produjo un error al conectarse con la API Rest!</p>}

                    <div className="selecs-form">
                        <div className="select-form">
                            <label>Seleccione un pais</label>
                            <select 
                                className="select" 
                                id="selectCountries"
                                onChange={(e) => this.handleSelect(e)}
                                value={JSON.stringify(this.state.country)}
                                name="country"
                            >
                                <option value={JSON.stringify({})}>Selecciona una opción</option>
                                {this.props.countriesFromAPI.map((country) => (
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
                                { this.props.citiesFromAPI.map((city) => city.countrie.id === this.state.country.id ? <option key={city.id} value={JSON.stringify(city)}>{city.name}</option> : JSON.stringify({}))}
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
                                { this.props.companiesFromAPI.map((company) => company.place.countrieId == this.state.country.id && company.placeId == this.state.city.id ? <option key={company.id} value={JSON.stringify(company)}>{company.name}</option> : JSON.stringify({}))}
                            </select>
                        </div>
                        <div className="select-form">
                            <label>Seleccione un puesto</label>
                            <select 
                                className="select" 
                                id="selectPosition"
                                onChange={(e) => this.handleSelect(e)}
                                value={JSON.stringify(this.state.position)}
                                name="position"
                            >
                                <option value={JSON.stringify({})}>Selecciona una opción</option>
                                { this.props.positionsFromAPI.map((position) => position.organizationId == this.state.company.id && position.organization.placeId == this.state.city.id ? <option key={position.id} value={JSON.stringify(position)}>{position.position}</option> : JSON.stringify({}))}
                            </select>
                        </div>
                    </div>
                    <button className="btn-add" onClick={() => this.addOffer(this.state.position,this.state.company,this.state.city,this.state.country)}>Agregar</button>
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
                                { this.state.offers.map(offer => (
                                    <ToDoList offers={this.state.offers} offer={offer} id={offer.id} key={offer.id} position={offer.position} company={offer.company} city={offer.city} country={offer.country} onDelete={this.deleteOffer}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </>
        );
    }
}