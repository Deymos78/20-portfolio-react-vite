import { Container, Divider, Grid, Typography } from "@mui/material"

export const StudiesView = () => {
  return (
    <Container
    
        flexdirection= 'column'
        justifycontent= 'center'
        alignitems= 'center'
        minheight= '100vh'
        style={{ padding: '20px' }}
        
    >

        <Typography variant='h2' style={{textAlign: 'center', fontSize: '44px', fontWeight: 'bold', marginBottom: 25}}> Estudios </Typography>

        <Divider style={{marginBottom: 25, fontWeight: 'bold'}}/>

        <Grid container>

            <Grid >


            </Grid>

        </Grid>
       

    </Container>
  )
}
