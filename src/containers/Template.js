import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/Template'

class Template extends Component {
    render() {
        return (
            <div>
                <NavDrawer/>
                <Header>
                    TicTacTuring
                </Header>
                <Main>
                    {this.props.children}
                </Main>
            </div>
        )
    }
}

export default Template