import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
  <ListItem button component="a" href={"/"} >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" /> 
    </ListItem>

    <ListItem button component="a" href={"/pedidos"}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos" /> {/* Requests */}
    </ListItem>

    <ListItem button component="a" href={"/clientes"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" /> {/* Customes */}
    </ListItem>

    <ListItem button component="a" href={"/produtos"}>
      <ListItemIcon>
        <AllInboxIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos" /> {/* Products*/}
    </ListItem>

  <ListItem button component="a" href={"/usuarios"}>
      <ListItemIcon>
        <HowToRegIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" /> {/* Usuario */}
    </ListItem>

    <ListItem button component="a" href={"/relatorios"}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Relatorios" /> {/* Reports */}
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Relatorios Salvos</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mês atual" />
    </ListItem>
  
    <ListSubheader inset>Relatorios Salvos</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon/>
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);
