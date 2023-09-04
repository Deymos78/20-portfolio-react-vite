import { Divider } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"
import { ContactView } from "../views/ContactView"
import { ExperienceView } from "../views/ExperienceView"
import { IntroductionView } from "../views/IntroductionView"
import { ProjectsView } from "../views/ProjectsView"
import { StudiesView } from "../views/StudiesView"
import { TechnologiesView } from "../views/TechnologiesView"


export const PortfolioPage = () => {
  return (
    <PortfolioLayout>

      {/* Aqui estara la vista de la Introduccion */}
      <IntroductionView/>

      {/* Aqui estara la vista de los Proyectos */}
      <ProjectsView/>


      {/* Aqui estara la vista de las Tecnologias */}
      <TechnologiesView/>

      {/* Aqui estara la vista de la Experiencia */}
      <ExperienceView/>

      {/* Aqui estara la vista de los estudios */}
      <StudiesView/>

      {/* Aqui estara la vista del Contacto */}
      <ContactView/>


    </PortfolioLayout>
    
  )
}
