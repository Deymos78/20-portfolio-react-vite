import { Container, Divider, Grid, Typography } from "@mui/material"
import { Element } from "react-scroll"

export const StudiesView = () => {
  return (

    <Element 
      name="seccionStudies" 
      className="seccionStudies" 
    >
      <Container
      
          flexdirection= 'column'
          justifycontent= 'center'
          alignitems= 'center'
          minheight= '100vh'
          maxWidth= '100%'
          style={{ padding: '20px' }}
          
      >

          <Typography variant='h2' style={{textAlign: 'center', fontSize: '44px', fontWeight: 'bold', marginBottom: 25}}> Estudios </Typography>

          <Divider style={{marginBottom: 25, fontWeight: 'bold'}}/>

          <Grid container>

              <Grid >


              </Grid>

          </Grid>
        

      </Container>
    </Element>
  )
}
