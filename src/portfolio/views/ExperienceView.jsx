import { Box, Container, Divider, Grid, Paper, SvgIcon, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { Element } from "react-scroll"

export const ExperienceView = () => {
  return (
    <Element name="seccionExperiencia" className="seccionExperiencia" 

    >

    <Container
        flexdirection= 'column'
        justifycontent= 'center'  
        alignitems= 'center'
        minheight= '100vh'
        style={{ padding: '20px' }}
        maxWidth = '100%'
        sx={{backgroundColor: '#f58a1b'}}
        
        
    >


        <Typography variant='h2' style={{textAlign: 'center', fontSize: '44px', fontWeight: 'bold', marginTop: 55}}> Experiencia </Typography>
        
        

        <Divider style={{marginBottom: 25, fontWeight: 'bold'}}/>

        <Grid container>

            <Grid >



            </Grid>
           

        </Grid>
       

    </Container>
    </Element>
   
  )
}
