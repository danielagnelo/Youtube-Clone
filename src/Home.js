import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Box, Button, Switch, Typography, ListSubheader, Grid, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Notifications from '@material-ui/icons/Notifications';
import Apps from '@material-ui/icons/Apps';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import Restore from '@material-ui/icons/Restore';
import Slideshow from '@material-ui/icons/Slideshow';
import WatchLater from '@material-ui/icons/WatchLater';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Explore from '@material-ui/icons/Explore';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Album from '@material-ui/icons/Album';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import Games from '@material-ui/icons/Games';
import Theaters from '@material-ui/icons/Theaters';
import FiberNew from '@material-ui/icons/FiberNew';
import LiveTv from '@material-ui/icons/LiveTv';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.background.dark
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    grow: {
        flexGrow: 1,
    },
    icons: {
        paddingRight: theme.spacing(3),
    },
    logo: {
        width: 95,
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingBottom: 4,
        paddingTop: 4,
    }
}));
const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
];


export default function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root} >
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <Switch
                        value={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className={classes.icons}
                    />
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Notifications />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} variant='outlined' color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Início'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Explore />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Explorar'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Inscrições'} />
                                </ListItem>
                            </List>
                            <Divider />
                        </div>
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Biblioteca'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Restore />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Histórico'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Slideshow />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Seus Vídeos'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<WatchLater />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Assistir mais Tarde'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<ThumbUp />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Curtidos'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={3}>
                                <Typography variant='body2'>
                                    Faça seu login para curtir vídeos, comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button startIcon={<AccountCircle />} variant='outlined' color="secondary">
                                        Fazer Login
                                    </Button>
                                </Box>
                            </Box>
                        </div>
                        <Box></Box>
                        <div className={classes.drawerContainer}>
                            <Divider />
                            <List component='nav' id='nest-list-subheader' classeName={classes.subheader}>
                                <ListSubheader component='div' id='nested-list-subheader' className={classes.subheader}>
                                    O MELHOR DO YOUTUBE
                                </ListSubheader>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Album />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Música'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<EmojiEvents />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Esportes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Games />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Games'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Theaters />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Filmes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<FiberNew />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Notícias'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<LiveTv />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Ao Vivo'} />
                                </ListItem>
                            </List>
                            <Divider />
                        </div>
                    </Drawer>
                </Hidden>
                <Box p={8}>
                    <Toolbar />
                    <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600 }}>
                        Recomendados
                    </Typography>

                    <Grid container spacing={2}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Box>
            </Box>
        </div>
    );
}
