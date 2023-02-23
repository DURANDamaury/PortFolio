import InfoBox from '../InfoBox/InfoBox';
import CategoriesList from './Assets/Categories.json';

import './Categories.scss';

function Categories()
    {
        return (
            <div id="Categories">
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