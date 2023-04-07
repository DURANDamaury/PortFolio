
import { useContext } from 'react';
import './Writter.scss';
import { ThemeContext } from '../../Tools/context';
import photo from './photo.jpg';


function Writter({isOpen})
    {
        const {theme} = useContext(ThemeContext)

        return (
            <div className={`Writter_${theme} Writter_${theme}_${isOpen}`}>
                <div className={`Writter_txt_${theme}_${isOpen}`}>
                    <h1>Je vous souhaite la bienvenue sur mon portfolio</h1>
                    <p>
                    Je suis Amaury Durand, développeur Web et suis à la recherche d'un emploi.<br/>
                    Je suis situé en Normandie dans le département du Calvados.</p>

                    <img className="portrait" src={photo} alt="moi"/>

                    <p>Depuis toujours passionné par la programmation, j'ai décidé d'en faire mon métier après de nombreuses années passées comme commerçant.<br/>
                    C'est ainsi que j'ai commencé en Avril 2022 la formation de développeur web chez OpenClassRoom.<br/>
                    Celle-ci s'est terminée en février 2023 et je suis donc désormais disponible pour une première expérience professionnelle.
                    </p>

                    <p>
                    Ce site vous permettra d'en savoir un peu plus sur moi que sur un CV ainsi que de découvrir mes différents projets réalisés. 
                    </p>
                    <p>
                    Vous pourrez ainsi choisir les différentes catégories en cliquant sur les icones sur votre gauche.
                    </p>                    
                </div>
            </div>
        )
    }

export default Writter;
