import './Tech.scss';
import HTML5 from './Assets/HTML5.png'
import CSS3 from './Assets/CSS3.png'
import SASS from './Assets/SASS.png'
import JS from './Assets/JS.png'
import REACT from './Assets/REACT.png'
import NODE from './Assets/NODE.png'

function Tech ()
    {
        return(
            <div id="Tech">
                <ul>
                    <li><div className='Tech_img'><img src={HTML5} alt="HTML5 logo" /></div><div className='Tech_txt'>HTML5</div></li>
                    <li><div className='Tech_img'><img src={CSS3} alt="CSS3 logo" /></div><div className='Tech_txt'>CSS3</div></li>
                    <li><div className='Tech_img'><img src={SASS} alt="SASS logo" /></div><div className='Tech_txt'>Sass</div></li>
                    <li><div className='Tech_img'><img src={JS} alt="JS logo" /></div><div className='Tech_txt'>JavaScript</div></li>
                    <li><div className='Tech_img'><img src={REACT} alt="REACT logo" /></div><div className='Tech_txt'>React</div></li>
                    <li><div className='Tech_img'><img src={NODE} alt="NODE logo" /></div><div className='Tech_txt'>Node</div></li>
                </ul>
            </div>
        )
    }

export default Tech