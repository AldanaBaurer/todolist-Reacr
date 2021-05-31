import React from 'react'
import { Redirect } from 'react-router-dom'

export class NotFound extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            redirect : false
        }
    }

    redirectPrincipal = () => {
        this.setState({
            redirect: true
        })
    }
    render() {
        return (
            <main>
                <h1>Página no encontrada</h1>
                <button className="btn-add" onClick={this.redirectPrincipal}>Volver a la home</button>
                { this.state.redirect ? <Redirect to="/"/> : null }
            </main>

        )
    }
}