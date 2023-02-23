import './InfoBox.scss';

import Projects from '../Icon/Assets/Projects.png';
import Skills from '../Icon/Assets/Skills.png';
import Tech from '../Icon/Assets/Tech.png';
import Tools from '../Icon/Assets/Tools.png';
import Who from '../Icon/Assets/Who.png';
import Border from './Border/Border';

function InfoBox(props)
    {
        const Id=props.Id;
        const Txt=props.Txt;

        //Searching img link with ID
        const ImgTab = [
            {"ImgName":"Projects", "ImgLink":Projects},
            {"ImgName":"Skills", "ImgLink":Skills},
            {"ImgName":"Tech", "ImgLink":Tech},
            {"ImgName":"Tools", "ImgLink":Tools},
            {"ImgName":"Who", "ImgLink":Who}
            ]

        //finding on ImgTab where is ImgName equal to Id and recover his url
        const ImgFound = ImgTab.find((element) => (element.ImgName === Id))
        const ImgLink = ImgFound.ImgLink;




        return (
            <div className="Infobox">
                <div className="InfoBox_Header">
                    <div className='InfoBox_Header_Left_Border'><Border /></div>
                    <div className='InfoBox_Header_Icon'><img src={ImgLink} alt="Icon of the category" /></div>
                    <div className='InfoBox_Header_Right_Border'><Border /></div>
                </div>

                <div className="InfoBox_Body">

                </div>
            </div>
        );
    }

export default InfoBox
