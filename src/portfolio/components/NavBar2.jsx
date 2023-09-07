import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { Link } from 'react-scroll';

// const pages = ['Proyectos', 'Tecnologias', 'Experiencia', 'Estudios', 'Contacto'];

const pages = [
  {nombre: 'Proyectos', nombreClase: 'seccionProjects'},
  {nombre: 'Tecnologias', nombreClase: 'seccionTecnologias'},
  {nombre: 'Experiencia', nombreClase: 'seccionExperiencia'},
  {nombre: 'Estudios', nombreClase: 'seccionStudies'},
  {nombre: 'Contacto', nombreClase: 'seccionContacto'},
]

export const NavBar2 = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
{/*           
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            

            {
              pages.map((page) => (

              <Button
                key={page.nombre}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  position: 'relative',
                  padding: 0,
                  paddingLeft: 3,
                  minWidth: 0,
                  display: 'block'
                }}
              >
                
                <Link
                  
                  className={page.nombreClase}
                  to={page.nombreClase}
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  sx={{
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}

                  style={{fontSize: 15}}
                >
                  {page.nombre}
                </Link>
              </Button>
            ))}
            
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

                
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}



