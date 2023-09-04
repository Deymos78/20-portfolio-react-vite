import { Route, Routes } from 'react-router-dom'
import { PortfolioRoutes } from '../portfolio/routes/portfolioRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        
        <Route path="/*" element={ <PortfolioRoutes/> } />

    </Routes>
  )
}
