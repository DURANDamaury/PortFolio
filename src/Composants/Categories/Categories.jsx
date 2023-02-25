import InfoBox from '../InfoBox/InfoBox';
import CategoriesList from './Assets/Categories.json';
import Cercles from './Assets/circles.png';

import './Categories.scss';


function Categories()
    {

        


        return (
            <div id="Categories"
            style={{
                backgroundImage: `url(${Cercles}),url(${Cercles})`
                }}
            >
                {CategoriesList.map((categorie) => (
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