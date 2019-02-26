import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Template extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>TicTacTouring</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withRouter(Template)