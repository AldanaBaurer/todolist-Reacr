import React from 'react'
import { checkValue } from '../utils/stringUtils.js'

export class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: "",
            company: "",
            city: "",
            country: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInput(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }
    
    submit(e){
        e.preventDefault();

        if(
            checkValue(this.state.position) &&
            checkValue(this.state.company) &&
            checkValue(this.state.city) &&
            checkValue(this.state.country)
        ){
            const offer = {
                id:1+Math.random(),
                position: this.state.position,
                company: this.state.company,
                city: this.state.city,
                country: this.state.country
            }
            this.props.onSubmit(offer)

            this.setState({
                id: "",
                position: "",
                company: "",
                city: "",
                country: ""
            })
        }else{
            alert("No has completado todos los campos")
        }
    }

    render(){
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <div className="input-group">
                    <i className="fas fa-briefcase"></i>
                    <input type="text" name="position" placeholder="Ingrese el puesto" onChange={(e) => this.handleInput(e)} value={this.state.position}/>
                </div>
                <div className="input-group">
                    <i className="fas fa-building"></i>
                    <input type="text" name="company" placeholder="Ingrese la empresa" onChange={(e) => this.handleInput(e)} value={this.state.company}/>
                </div>
                <div className="input-group">
                    <i className="fas fa-map-marker-alt"></i>
                    <input type="text" name="city" placeholder="Ingrese la ciudad" onChange={(e) => this.handleInput(e)} value={this.state.city}/>
                </div>
                <div className="input-group">
                    <i className="fas fa-flag"></i>
                    <input type="text" name="country" placeholder="Ingrese el país" onChange={(e) => this.handleInput(e)} value={this.state.country}/>
                </div>
                <button type="submit" className="btn-add">Agregar</button>
            </form>
        );
    }
}