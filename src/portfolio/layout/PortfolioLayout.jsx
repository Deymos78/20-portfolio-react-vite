import { Box, Toolbar } from '@mui/material'
import { NavBar } from '../components/NavBar'
import { NavBar2 } from '../components/NavBar2'

export const PortfolioLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}
        
    >
        {/* <NavBar /> */}
        <NavBar2 />

        <Box
            component='main'
            sx={{
                flexGrow: 1
            }}
        >
            <Toolbar/>
            {children}

        </Box>


    </Box>
  )
}
