import {  MenuOutlined } from '@mui/icons-material'
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { Link, Link as ScrollLink} from 'react-scroll'



export const NavBar = ({drawerWidth = 240}) => {
  return (
    // AppBar es un componente predefinido de la biblioteca Material UI para crear una barra de navegacion superior proporciona estilos y estructura
    // predefinidos
    <AppBar
        position='fixed'
        sx={{
            // Realizamos un calculo para poder desplazar la barra de navegacion para que no se le sobreponga el SideBar
            width: {sm : `calc(100% px)`},
            ml: {sm: `${drawerWidth}px` }
        }}
    >
        {/* El componente ToolBar es usado para crear una barra de herramientas */}
        <Toolbar>

            <div style={{ flexGrow: 1}} />
            {/* El componente IconBbut  ton sirve para representar un icono interactivo, es una forma conveniete de agregar iconos 
                clickables con un aspecto estilizado y coherente en tu aplicacion */}
            {/* <IconButton 
                color="inherit"
                // edge --> define el borde de IconButton, start es que se coloca el borde al incio, tambien se puede poner al final
                edge="start"
                // mr --> aplica un margen a la derecha de 2
                // display --> Pone la condicion de que si la pantalla no es una resolucion pequeña no se mostrara
                sx={{ mr: 2, display: { sm: 'none' }}}
            >
                
            </IconButton> */}
                {/* Grid --> Componente de diseño basado en una cuadricula
                direction --> establce la direccion principal de la cuadricula como fila, lo elementos hijos se colocaran en una fila horizontal
                justifyContent --> define como se distribuyen los elementos, el space-between  distribuye el espacio disponible de manera uniforme
                    entre los elementos, dejando un espacio en blanco en el centro
                aligItems --> Determina como se alinean los elementos a lo largo del eje secundario, el center los alinea en el centro de la cuadricula */}
            {/* <Grid container direction="row" justifyContent="space-between" alignItems="flex-end"> */}

                {/* <NavLink component={ScrollLink} to="seccionContacto" >Contactos</NavLink> */}
                {/* <Button   >Nuevo boton</Button> */}
                <NavLink style={{ textDecoration: 'none', color:'white', marginRight: '15px' }}>
                    
                    <Link   className='seccionContacto' to="seccionContacto" spy={true} smooth={true} duration={500} >Contacto</Link>
                </NavLink>
                
                <NavLink style={{ textDecoration: 'none', color: 'white' }}>
                    
                    <Link className='seccionTecnologias' to="seccionTecnologias" spy={true} smooth={true} duration={500} >Tecnologias</Link>
                </NavLink>
                

            {/* </Grid> */}

        </Toolbar>

    </AppBar>
  )
}
