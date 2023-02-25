import './InfoBox.scss';

import Projects from '../Icon/Assets/Projects.png';
import Skills from '../Icon/Assets/Skills.png';
import Tech from '../Icon/Assets/Tech.png';
import Tools from '../Icon/Assets/Tools.png';
import Who from '../Icon/Assets/Who.png';
import Border from './Border/Border';
import { useState } from 'react';

function InfoBox(props)
    {
        const Id=props.Id;
        const Txt=props.Txt;

        //props.id will serve to find image for category
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

            const [BoxState, SetBoxState] = useState(false)


        return (
            <div className={`InfoBox_${BoxState}`}>
                <div className="InfoBox_Header">
                    <div className={`InfoBox_Header_Left_Border_${BoxState}`}><Border /></div>
                    <button onClick={() => SetBoxState(!BoxState)} className='InfoBox_Header_Icon'><img src={ImgLink} alt="Icon of the category" /></button>
                    <div className={`InfoBox_Header_Right_Border_${BoxState}`}><Border /></div>
                </div>

                <div className={`InfoBox_Body_${BoxState}`}>
                    {Txt}
                </div>
            </div>
        );
    }

export default InfoBox
