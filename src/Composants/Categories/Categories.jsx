import InfoBox from '../InfoBox/InfoBox';
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
                    Txt:"test"
                },
                {
                    Id:"Tools",
                    Txt:"test2"
                },
                {
                    Id:"Tech",
                    Txt:"test3"
                },
                {
                    Id:"Projects",
                    Txt:"test4"
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