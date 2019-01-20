

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '90vw',
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
  const tileData = [
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      [etc...]
    },
  ];
 */


const tileData = [
    {
        img: "https://fakeimg.pl/250x100/",
        title: 'toto',
        author: 'toto',
    },
    {
        img: "https://fakeimg.pl/250x100/",
        title: 'toto',
        author: 'toto',
    },
    {
        img: "https://fakeimg.pl/250x100/",
        title: 'toto',
        author: 'toto',
    },
    {
        img: "https://fakeimg.pl/250x100/",
        title: 'toto',
        author: 'toto',
    },
];

function BarpageGrid(props) {
    const { classes, store } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {store.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={"https://fakeimg.pl/250x100/"} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.name}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <a href={'/bar/' + tile.id} >
                                        <InfoIcon />
                                    </a>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


export default withStyles(styles)(BarpageGrid);