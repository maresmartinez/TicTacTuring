import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Template extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>TicTacTouring</h1>
                    <Button variant="contained" color="primary" onClick={() => console.log('CLICK')}>
                        Test Button
                    </Button>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Template