/**
 * Created by Adrien on 30/06/2017.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import VideoLibrary from 'material-ui/svg-icons/av/video-library';
import Link from 'next/link'


const containerImgStyles = {
    'height': '30vh',
    'zIndex': '0'
}

const noContainerImgStyles = {
    'backgroundColor': '#fff',
    'zIndex': '999'
}

const youtubeColor = {
    color: '#c4302b'
}

function handleClick(link) {
    window.open(link,'_blank');
}

const StartupCard = (props) => (

    <Card
        zDepth={0}>

    </Card>
);

export default StartupCard;