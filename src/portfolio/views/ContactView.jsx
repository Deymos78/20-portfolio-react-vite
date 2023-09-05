import { Container, Divider, Grid, Typography } from "@mui/material"
import { Element } from "react-scroll"


export const ContactView = () => {
    return (
    
    <Element name="seccionContacto" className="seccionContacto">
    
      <Container 
          flexdirection= 'column'
          justifycontent= 'center'
          alignitems= 'center'
          minheight= '100vh'
          maxWidth = '100%'
          style={{ padding: '20px' }}
          sx={{backgroundColor: '#764abc' }}
          
      >


          <Typography variant='h2' style={{textAlign: 'center', fontSize: '44px', fontWeight: 'bold', marginBottom: 25}}> Contacto </Typography>

          <Divider style={{marginBottom: 25, fontWeight: 'bold'}}/>

          <Grid container>

              <Grid >

                

              </Grid>

          </Grid>
        

      </Container>
    </Element>
  )
}
