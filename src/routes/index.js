import React from 'react'
import {Route} from 'react-router'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

const Routes = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path={'/profile'} component={Profile} />
        </div>
    )
}

// const Routes = createRoutes()

export default Routes