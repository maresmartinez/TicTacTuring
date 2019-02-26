import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import Template from './containers/Template'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const client = new ApolloClient({
    link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cjs5hdfph3n370154h4u587p5'}),
    cache: new InMemoryCache()
})

render (
    <ApolloProvider client={client}>
        <Router basename='/'>
            <div>
                <Template />
                <Routes />
            </div>
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
)