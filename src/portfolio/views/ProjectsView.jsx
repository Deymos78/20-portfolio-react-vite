import {  Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material'
import { Element } from 'react-scroll'

export const ProjectsView = () => {

  return (
    <Element 
        name="seccionProjects" 
        className="seccionProjects" 
    >

        <Container
        
            flexdirection= 'column'
            justifycontent= 'center'
            alignitems= 'center'
            minheight= '100vh'
            maxWidth= '100%'
            style={{ padding: '20px' }}
            
        >

            <Typography variant='h2' style={{textAlign: 'center', fontSize: '44px', fontWeight: 'bold', marginBottom: 25}}> Proyectos </Typography>

            <Divider style={{marginBottom: 50, fontWeight: 'bold'}}/>

            <Grid container>

                <Grid >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://www.shutterstock.com/image-vector/surakarta-indonesia-october-3-2022-600w-2209495959.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>

            </Grid>
        

        </Container>
    </Element>
  )
}
