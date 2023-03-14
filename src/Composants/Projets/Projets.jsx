import { Link } from "react-router-dom"
import ProjetsGallery from "./InternalComponants/ProjetsGallery/ProjetsGallery"
import github from './InternalComponants/ProjetsBox/Assets/github.png';

function Projets ()
    {
        return (
            <div id="Projets">
                <p>Retrouvez ici une partie de mes réalisations.<br/>
                Vous y retrouverez les maquettes des applications, des sites de page unique et des sites vitrines.</p>
                <p>En perpétuelle évolution, ce portfolio est amené à évoluer alors n'hésitez pas à venir découvrir les nouveautés.</p>
                <p>La majorité de mes travaux sont disponibles via GitHub : 
                <Link to={{ pathname: "https://github.com/DURANDamaury/" }} target="_blank" className="ProjetsBox_button gitLink">
                    <img src={github} alt="github logo" className="projetsGitLogo"/>
                </Link></p>
                <ProjetsGallery/>
            </div>
        )
    }

export default Projets