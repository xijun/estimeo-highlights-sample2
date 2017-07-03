/**
 * Created by Adrien on 30/06/2017.
 */
import React from 'react'
import Welcome from '../components/Welcome'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HighlightGrid from '../components/HighlightGrid'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import fetch from 'isomorphic-unfetch'

/**
 * Make sure react-tap-event-plugin only gets injected once
 * Needed for material-ui
 */
if (!process.tapEventInjected) {
    injectTapEventPlugin()
    process.tapEventInjected = true
}

const muiTheme = {
    palette: {
        accent1Color: deepOrange500
    }
}

/**
 * Equivalent to the `render` function of React
 * @param props
 * @returns {XML}
 * @constructor
 */
const Index = (props) => {
    const {userAgent} = props.userAgent
    return (
        /** Wrapper around the application to include material-ui **/
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
            <div>
                {/** Specify the header of the application **/}
                <Header />

                <div className="container grey100">

                    {/** Specify the welcome title / message **/}
                    <Welcome title="Bienvenue !" msg="Voici quelques start-ups mise en avant par Estimeo."/>

                    {/** Specify the list of the highlights **/}
                    <HighlightGrid highlights={props.highlights} />

                    {/** Specify the footer **/}
                    <Footer />
                </div>
            </div>
        </MuiThemeProvider>
    )
}

/**
 * Get the initial properties (async) to fill the list of highlights
 * @param context
 * @returns {Promise.<{userAgent: *, highlights: *}>}
 */
Index.getInitialProps = async function(context) {
    /**
     * Ensures material-ui renders the correct css prefixes server-side
     */
    let userAgent
    if (process.browser) {
        userAgent = navigator.userAgent
    } else {
        userAgent = context.req.headers['user-agent']
    }

    /**
     * Fetch the data
     */
    const res = await fetch('http://localhost:3000/api/s/all')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    /**
     * List of the properties of this component, which we can access via `props.*`
     */
    return {
        userAgent: userAgent,
        highlights: data
    }
}

/**
 * Export the component / page
 */
export default Index