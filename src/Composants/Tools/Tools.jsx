import GitHub from './Assets/github.png';
import VsCode from './Assets/VSC.png';
import Photoshop from './Assets/Photoshop.png';
import Postman from './Assets/Postman.png';
import Lighthouse from './Assets/lighthouse.png';


import './Tools.scss';

function Tools ()
    {
        return (
            <div id="Tools">
                <ul>
                    <li><div className="Tools_img"><img src={GitHub} alt="GitHub logo" /></div><div className='Tools_txt'>GitHub</div></li>
                    <li><div className="Tools_img"><img src={VsCode} alt="VsCode logo" /></div><div className="Tools_txt">VsCode</div></li>
                    <li><div className="Tools_img"><img src={Photoshop} alt="Photoshop logo" /></div><div className="Tools_txt">Photoshop</div></li>
                    <li><div className="Tools_img"><img src={Postman} alt="Postman logo" /></div><div className="Tools_txt">Postman</div></li>
                    <li><div className="Tools_img"><img src={Lighthouse} alt="Lighthouse logo" /></div><div className="Tools_txt">Lighthouse</div></li>
                </ul>
            </div>
        )
    }

export default Tools


