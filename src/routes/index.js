import React from 'react'
import {Route} from 'react-router'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'

const Routes = () => {
    return (
        <div>
            <Route exact path='/' component={TicTacToe} />
            <Route exact path='/home' component={TicTacToe} />
            <Route path={'/profile'} component={Profile} />
        </div>
    )
}

// const Routes = createRoutes()

export default Routes