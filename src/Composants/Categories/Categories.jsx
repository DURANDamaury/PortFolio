import Contact from '../Contact/Contact';
import InfoBox from '../InfoBox/InfoBox';
import Projets from '../Projets/Projets';
import Skills from '../Skills/Skills';
import Tech from '../Tech/Tech';
import Tools from '../Tools/Tools';
import WhoIAm from '../WhoIAm/WhoIAm';


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
                },
                {
                    Id:"Contact",
                    Txt:<Contact/>
                }
            ]       


        return (
            <div id="Categories">
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