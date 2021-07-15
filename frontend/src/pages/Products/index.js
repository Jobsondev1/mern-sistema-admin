import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import TopBarDrawer from '../../components/TopBarDrawer';
import Footer from '../../components/Footer'
import Orders  from '../../components/Orders';
const useStyles = makeStyles((theme) => ({
  root: {display: 'flex', },
    
  title: { flexGrow: 1, },
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1, height: '100vh', overflow: 'auto', },

  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(4),
     width: 'center',
    },
  paper:{
    marginTop:10,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl:{
    width: '100%'
  }
}));

 function Products() {
  const classes = useStyles();

  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <TopBarDrawer title={'Produtos'}/>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Button variant="contained" color="primary"  disableElevation>
       Novo Produto
        </Button>
        <Paper className={classes.paper}>
                <Orders />
              </Paper>

        </Grid>
        </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Products