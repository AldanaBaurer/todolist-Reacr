import React from 'react'

export class CompaniesForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            company: {
                id: "",
                name: "",
                parentCity: ""
            },
            companies: [],
            cities: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("companies") != null){
            this.setState({
                companies: JSON.parse(localStorage.getItem("companies")),
            })
        }

        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities")),
            })
        }
    }

    handleCompany = (e) => {
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

        const newCompany = {
            id: 1+Math.random(),
            name: this.state.company,
            parentCity: this.state.parentCity
        }

        this.props.addCompany(newCompany);

        this.setState({
            company: {
                id: "",
                name: "",
                parentCity: ""
            }
        })
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
                            value={JSON.stringify(this.state.parentCity)}
                            name="parentCity"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            {this.state.cities.map((city) => (
                                <option key={city.id} value={JSON.stringify(city)}>{city.name}</option>
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