//importation des miniatures des sites
import ImageBooki from './Assets/Booki.jpg';
import ImageKanap from './Assets/Kanap.jpg';
import ImageLaPanthere from './Assets/LaPanthere.jpg';
import ImageOhMyFood from './Assets/OhMyFood.jpg';
//importation des logos des langages
import imageHTML from './Assets/HTML5.png';
import imageCSS from './Assets/CSS3.png';
import imageJS from './Assets/JS.png';
import imageNODE from './Assets/NODE.png';
import imageSASS from './Assets/SASS.png';
import imageREACT from './Assets/REACT.png';
//importation sass
import './ProjetsBox.scss';

function ProjetsBox (props)
    {

    const id = props.id;
    const work = props.work;
    const tools = props.tools;
    const link = props.link;

    //On va chercher l'image correspondante à l'id
    const ImagesList = [
            {id:'Booki' , image : ImageBooki},
            {id:'OhMyFood' , image : ImageOhMyFood},
            {id:'La Panthère' , image : ImageLaPanthere},
            {id:'Kanap' , image : ImageKanap},
            {id:'Piiquante' , image : ImageKanap},
            {id:'Kasa' , image : ImageKanap}
        ]

    const FindImage = ImagesList.find(nom => nom.id === id);
    const Image = FindImage.image;
    //La table suivante permet de trouver quelle image correspond à un outil(tool)
    const toolList = [
        {toolRead:'HTML' , image : imageHTML},
        {toolRead:'CSS' , image : imageCSS},
        {toolRead:'SASS' , image : imageSASS},
        {toolRead:'JS' , image : imageJS},
        {toolRead:'NODE' , image : imageNODE},
        {toolRead:'REACT' , image : imageREACT}
        ]

    const toolsUsed = [];
    for (let t=0; t<tools.length; t++)
        {
            let toolImageToFind = toolList.find(toolTab => toolTab.toolRead === tools[t])
            let toolImage = toolImageToFind.image;
            toolsUsed.push(toolImage)
        }
    console.log(toolsUsed)

    return (
        <div className="ProjetsBox">
            <div className="ProjetsBox_img"><img src={Image} alt={id} /></div>
            <p className='ProjetsBox_title'>{id}</p>
            <p className='ProjetsBox_work'>{work}</p>
            <div className="ProjetsBox_tools">
                {toolsUsed.map((toolToPut) => <img src={toolToPut} alt="Tool logo" />)}
            </div>
        </div>
        )
    }

export default ProjetsBox;