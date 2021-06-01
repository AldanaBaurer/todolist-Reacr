import React from 'react'

export class PositionsForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            position: {
                position: "",
                description: "",
                organizationId: ""
            },
            positions: [],
            companies: []
        }
    }

    handlePosition = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: {
                position: e.target.value
            }
        });
    };

    handleDescription = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: {
                position: this.state.position.position,
                description: e.target.value
            }
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: {
                position: this.state.position.position,
                description: this.state.position.description,
                organizationId: JSON.parse(e.target.value)
            }
		});
	};

    submitForm = (e) => {
        if((this.state.position.position).trim() === "" && (this.state.position.description).trim() === "" && (this.state.position.organizationId).trim() === ""){
            alert("No se han ingresado datos")
        }else{
            e.preventDefault();
            this.props.addPosition(this.state.position.position, this.state.position.description, this.state.position.organizationId)
        
            this.setState({
                position: {
                    position: "",
                    description: "",
                    organizationId: ""
                }
            })
        }
    }

    render() {
        return(
            <>
            <div className="inputs">
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div className="input-form">
                        <label> Ingrese la posición</label>
                        <input 
                            name="position" 
                            type="text" 
                            value={this.state.position.position} 
                            onChange={(e) => this.handlePosition(e)} 
                            />
                    </div>
                    <div className="input-form">
                        <label> Ingrese una descripción</label>
                        <input 
                            name="position" 
                            type="text" 
                            value={this.state.position.description} 
                            onChange={(e) => this.handleDescription(e)} 
                            />
                    </div>
                    <div className="selec-form">
                        <label>Seleccione una empresa</label>
                        <select 
                            className="select" 
                            id="selectPositions"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.position.organizationId)}
                            name="position"
                        >
                            <option value={JSON.stringify({})}>Selecciona una opción</option>
                            { this.props.companiesFromAPI.map((company) => (
                                <option key={company.id} value={JSON.stringify(company.id)}>{company.name}</option>
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