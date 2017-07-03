/**
 * Created by Adrien on 30/06/2017.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StartupCard from './StartupCard';
import fetch from 'isomorphic-unfetch'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto',
    }
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

const HighlightGridList = (props) => (


    <div style={styles.root}>
        {props.highlights.map((high) => (
            <GridList
                cols={2}
                cellHeight="auto"
                style={styles.gridList}
                key={high.periode}>
                <Subheader>{high.periode}</Subheader>
                {high.startups.map((tile) => (
                    <GridTile
                        cols={tile.size}
                        rows={tile.size}
                        key={tile.img}>
                        <StartupCard
                            title={tile.title}
                            pretty={tile.pretty}
                            author={tile.author}
                            avatar={tile.avatar}
                            subtitle={tile.subtitle}
                            description={tile.description}
                            website={tile.website}
                            youtubeLink={tile.youtubeLink}
                            _id={tile._id}
                            img={tile.img}
                        />
                    </GridTile>
                ))}
            </GridList>
        ))}
    </div>
);

HighlightGridList.getInitialProps = async function (context) {
    const res = await fetch('/api/s/all')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}

export default HighlightGridList;