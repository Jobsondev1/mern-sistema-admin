import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TopBarDrawer from '../../components/TopBarDrawer';
import Footer from '../../components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {display: 'flex', },
    
  title: { flexGrow: 1, },
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1, height: '100vh', overflow: 'auto', },

  container: {paddingTop: theme.spacing(4),paddingBottom: theme.spacing(4),},
  
}));

 function Requests() {
  const classes = useStyles();

  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <TopBarDrawer title={'Pedidos'}/>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

        <Grid container spacing={3}>
         <h1>Pedidos</h1>
        </Grid>

          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Requests