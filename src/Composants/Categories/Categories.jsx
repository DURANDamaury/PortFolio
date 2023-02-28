import InfoBox from '../InfoBox/InfoBox';
import Projets from '../Projets/Projets';
import Skills from '../Skills/Skills';
import Tech from '../Tech/Tech';
import Tools from '../Tools/Tools';
import WhoIAm from '../WhoIAm/WhoIAm';
import CategoriesList from './Assets/Categories.json';
import Cercles from './Assets/circles.png';

import './Categories.scss';


function Categories()
    {

        const categories=[
                {
                    Id:"Who",
                    Txt:<WhoIAm/>
                },
                {
                    Id:"Skills",
                    Txt:<Skills/>
                },
                {
                    Id:"Tools",
                    Txt:<Tools/>
                },
                {
                    Id:"Tech",
                    Txt:<Tech/>
                },
                {
                    Id:"Projects",
                    Txt:<Projets/>
                }
            ]       


        return (
            <div id="Categories"
            style={{
                backgroundImage: `url(${Cercles}),url(${Cercles})`
                }}
            >
                {categories.map((categorie) => (
                    <InfoBox 
                        key={categorie.Id} 
                        Id={categorie.Id}
                        Txt={categorie.Txt} 
                    />
                    ))}
            </div>
        )
    }

export default Categories