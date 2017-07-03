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
        <CardHeader
            style={noContainerImgStyles}
            title={props.author}
            subtitle="Fondateur(s)"
            avatar={props.avatar}
        />
        <CardMedia style={containerImgStyles}
                   overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}
        >
            <img src={props.img} alt="" />
        </CardMedia>
        <CardActions style={noContainerImgStyles}>
            <Link as={`/s/${props._id}`} href={`/startup?id=${props._id}`} prefetch>
                <a>
                    <FlatButton label="Voir"/>
                </a>
            </Link>
            <Link href={props.website} prefetch>
                <a target="_blank">
                    <FlatButton label="Site"/>
                </a>
            </Link>
            <Link href={props.youtubeLink} prefetch>
                <a target="_blank">
                    <FlatButton
                        label="Youtube"
                        labelPosition="before"
                        primary={true}
                        icon={<VideoLibrary />}
                        style={youtubeColor}
                    />
                </a>
            </Link>
        </CardActions>
    </Card>
);

export default StartupCard;