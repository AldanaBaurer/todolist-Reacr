import React from 'react'

export class CompaniesForm extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            company: {
                name: "",
                placeId: ""
            },
            companies: [],
            cities: []
        }
    }

    handleCompany = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: {
                name: e.target.value,
                placeId: ""
            }
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: {
                name: this.state.company.name,
                placeId: JSON.parse(e.target.value)
            }
		});
	};

    
    submitForm = (e) => {

        if((this.state.company.name).trim() === "" || (this.state.company.placeId) === ""){
            alert("No existen datos!")
        }else{
            e.preventDefault();

            const newCompany = {
                name: this.state.company.name,
                placeId: this.state.company.placeId
            }

            this.props.addCompanies(newCompany);

            this.setState({
                company: {
                    name: "",
                    placeId: ""
                }
            })
        }
    };

    render(){
        return(
            <>
            <div className="inputs">
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div className="input-form">
                        <label> Ingrese una empresa</label>
                        <input 
                            name="company" 
                            type="text" 
                            value={this.state.company.name} 
                            onChange={(e) => this.handleCompany(e)} 
                            />
                    </div>
                    <div className="selec-form">
                        <label>Seleccione una cuidad</label>
                        <select 
                            className="select" 
                            id="selectCities"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.company.placeId)}
                            name="company"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            {this.props.citiesFromAPI.map((city) => (
                                <option key={city.id} value={JSON.stringify(city.id)}>{city.name}</option>
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