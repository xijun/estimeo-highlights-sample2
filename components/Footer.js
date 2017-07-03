/**
 * Created by Adrien on 28/06/2017.
 */
import React from 'react'
import Divider from 'material-ui/Divider';

const style = {
    margin: 32,
    textAlign: 'center'
};

const Footer = () => (
    <div style={style}>
        <Divider inset={true}/>
        <p>Footer made by someone with love </p>
    </div>
);

export default Footer;