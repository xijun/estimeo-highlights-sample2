/**
 * Created by Adrien on 30/06/2017.
 */
import React from 'react'
import Header from '../components/Header'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import fetch from 'isomorphic-unfetch'

if (!process.tapEventInjected) {
    injectTapEventPlugin()
    process.tapEventInjected = true
}

const muiTheme = {
    palette: {
        accent1Color: deepOrange500
    }
}

const Startup = (props) => {
    const {userAgent} = props.userAgent
    return (
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
            <div>
                <Header />
                {/** TODO **/}
                <p>Todo</p>
            </div>
        </MuiThemeProvider>
    )
}
Startup.getInitialProps = async function(context) {
    let userAgent
    if (process.browser) {
        userAgent = navigator.userAgent
    } else {
        userAgent = context.req.headers['user-agent']
    }
    const res = await fetch('http://localhost:3000/api/s/' + context.query.id)
    const data = await res.json()

    console.log(`Data: ${data}`)

    return {
        userAgent: userAgent,
        startup: data
    }
}

export default Startup