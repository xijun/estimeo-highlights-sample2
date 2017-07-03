/**
 * Created by Adrien on 30/06/2017.
 */
import React from 'react';


const style = {
    textAlign: 'center'
}


const Welcome = (props) => (
    <div style={style}>
        <h1>{props.title}</h1>
        <p>{props.msg}</p>
    </div>
);

export default Welcome;