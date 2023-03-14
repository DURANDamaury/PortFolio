import ProjetsBox from '../ProjetsBox/ProjetsBox';
import List from './Assets/ProjetsList.json';

import './ProjetsGallery.scss';

function ProjetsGallery ()
    {
        return (
            <div className="ProjetsGallery">
                {List.map(
                    (ListData) => (
                    <ProjetsBox 
                        key={`ProjetsBox_${ListData.id}`} 
                        id={ListData.id}
                        work={ListData.work}
                        tools={ListData.tools}
                        gitLink={ListData.gitLink}
                        gitPage={ListData.gitPage}
                    />)
                )}
            </div>
        )
    }

export default ProjetsGallery;