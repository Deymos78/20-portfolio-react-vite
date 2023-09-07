import { Button, Container, Grid, Typography } from '@mui/material';
import { Element } from 'react-scroll';

export const IntroductionView = () => {
  return (

    <Element 
        name="seccionIntroduccion" 
        className="seccionIntroduccion" 
        style={{border: '2px solid #000'}}
    >
      <Container
          
          flexdirection= 'column'
          justifycontent= 'center'
          alignitems= 'center'
          minheight= '100vh'
          maxWidth= '100%'
          style={{ padding: '20px', border: '2px solid #000' }}
          
      >
        <Grid container 
          
          alignitems="center"
          direction='row'
          justifyContent="center"
          style={{border: '2px solid #000'}}
        >
          <Grid item

            style={{border: '2px solid #000'}}
              
          >
            <Typography align='center' variant="h4" gutterBottom>
              ¡Hola, soy [Tu Nombre]!
            </Typography>

            <Typography variant="body1" paragraph>
              Bienvenido a mi portafolio profesional. Soy un [Tu Profesión] apasionado por [Tu Campo de Interés]. 
              A través de mi trabajo, aspiro a [Tu Objetivo o Misión].
            </Typography>
          
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Aquí puedes agregar una imagen tuya o algún elemento visual */}
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
};
