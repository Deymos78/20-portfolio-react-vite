import { Button, Container, Grid, Typography } from '@mui/material';

export const IntroductionView = () => {
  return (

    <Container
        
        flexdirection= 'column'
        justifycontent= 'center'
        alignitems= 'center'
        minheight= '100vh'
        style={{ padding: '20px' }}
        
    >
      <Grid container 
         
        alignitems="center"
        direction='row'
        
        
      >
        <Grid 
            
        >
          <Typography align='center' variant="h4" gutterBottom>
            ¡Hola, soy [Tu Nombre]!
          </Typography>
          <Typography variant="body1" paragraph>
            Bienvenido a mi portafolio profesional. Soy un [Tu Profesión] apasionado por [Tu Campo de Interés]. 
            A través de mi trabajo, aspiro a [Tu Objetivo o Misión].
          </Typography>
          <Button variant="contained" color="primary">
            Ver mi trabajo
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Aquí puedes agregar una imagen tuya o algún elemento visual */}
        </Grid>
      </Grid>
    </Container>
  );
};
