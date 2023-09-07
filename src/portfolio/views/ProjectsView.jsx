import {  Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material'
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

            <Typography variant='h2' style={{textAlign: 'center', fontSize: '44px', fontWeight: 'bold', marginTop: 55}}> Proyectos </Typography>

            <Divider style={{marginBottom: 50, fontWeight: 'bold'}}/>

            <Grid 
                container
                direction="row"
                justifyContent="space-evenly"
                alignitems="center"
            >
                <Grid item 
                    style={{border: '2px solid #000'}}
                >
                    <Card sx={{ maxWidth: 645 }}>
                        <CardMedia
                            sx={{ height: 340 }}
                            image="https://www.shutterstock.com/image-vector/surakarta-indonesia-october-3-2022-600w-2209495959.jpg"
                            
                        />

                        <Box
                            textAlign="center"
                        >

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Iron Man
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>

                </Grid>
                <Grid item 
                    style={{border: '2px solid #000'}}
                >
                    <Card sx={{ maxWidth: 645 }}>
                        <CardMedia
                            sx={{ height: 340 }}
                            image="https://www.shutterstock.com/image-vector/surakarta-indonesia-october-3-2022-600w-2209495959.jpg"
                            
                        />

                        <Box
                            textAlign="center"
                        >

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Iron Man
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>

                </Grid>

            </Grid>
        

        </Container>
    </Element>
  )
}
