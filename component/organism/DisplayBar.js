import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

const Block = styled.div`
    width: 100%;
    min-height: 100%;
    background: white;
    display: flex;
    align-items: start;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    border: 2px solid green;
`;

const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    width: fit-content;
`;

const WrapButton = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    margin-bottom: 10px;
`;

const styles = theme => ({
    card: {
        maxWidth: 400,
        marginTop: '20px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    chip: {
        marginRight: theme.spacing.unit,
    },
    section1: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    section2: {
        margin: theme.spacing.unit * 2,
    },
    section3: {
        margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        marginTop: '20px',
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    paper: {
        margin: `${theme.spacing.unit * 1}px 0 ${theme.spacing.unit * 1}px`,
    },
});

class DisplayBar extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, bar } = this.props;
        console.log('store => ', bar)
        return (
            <Block>
                <Content>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://fakeimg.pl/250x100/"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    {bar.name}
                                </Typography>
                            </Grid>
                            <div className={classes.section2}>
                                <div>
                                    <Chip className={classes.chip} label={bar.place} />
                                    <Chip className={classes.chip} label={bar.type} />
                                </div>
                            </div>
                            <Typography component="p">
                                {bar.description}
                            </Typography>
                            <WrapButton>
                                <ContainerButton>
                                    <Fab color="primary" aria-label="Add" label="testtest" className={classes.fab}>
                                        <SearchIcon />
                                    </Fab>
                                    <div>
                                        18h-02h
                                    </div>
                                </ContainerButton>
                                <ContainerButton>
                                    <Fab color="primary" aria-label="Add" label="testtest" className={classes.fab}>
                                        <SearchIcon />
                                    </Fab>
                                    <div>
                                        Y aller
                                    </div>
                                </ContainerButton>
                                <ContainerButton>
                                    <Fab color="primary" aria-label="Add" label="testtest" className={classes.fab}>
                                        <SearchIcon />
                                    </Fab>
                                    <div>
                                        Contact
                                    </div>
                                </ContainerButton>
                            </WrapButton>
                        </CardContent>
                    </Card>
                    <div className={classes.demo}>
                        <Typography gutterBottom variant="h4">
                            Condition
                                </Typography>
                        <List dense={true}>
                            <Paper elevation={1} className={classes.paper}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>
                            </Paper>
                            <Paper elevation={1} className={classes.paper}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>
                            </Paper>
                            <Paper elevation={1} className={classes.paper}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>
                            </Paper>
                        </List>
                    </div>
                </Content>
            </Block>
        );
    }
}


export default withStyles(styles)(DisplayBar);