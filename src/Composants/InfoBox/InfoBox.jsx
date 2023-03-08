import './InfoBox.scss';

import Projects from '../Icon/Assets/Projects.png';
import Skills from '../Icon/Assets/Skills.png';
import Tech from '../Icon/Assets/Tech.png';
import Tools from '../Icon/Assets/Tools.png';
import Who from '../Icon/Assets/Who.png';
import Contact from '../Icon/Assets/Contact.png';
import Border from './Border/Border';
import { useState } from 'react';

function InfoBox({Id,Txt,boxOpen,setBoxOpen,index})
    {

        //Id will serve to find image for category
        //Searching img link with ID
        const ImgTab = [
            {"ImgName":"Projects", "ImgLink":Projects},
            {"ImgName":"Skills", "ImgLink":Skills},
            {"ImgName":"Tech", "ImgLink":Tech},
            {"ImgName":"Tools", "ImgLink":Tools},
            {"ImgName":"Who", "ImgLink":Who},
            {"ImgName":"Contact","ImgLink":Contact}
            ]

        //finding on ImgTab where is ImgName equal to Id and recover his url
        const ImgFound = ImgTab.find((element) => (element.ImgName === Id))
        const ImgLink = ImgFound.ImgLink;
        //state de la box en cours pour savoir si elle est ouverte ou non
        const [BoxState, SetBoxState] = useState(false)

        function majBoxsStates (index)
            {
                const tableState = boxOpen.map((val, iteration) => 
                    {
                        if (iteration === index) {return !BoxState}
                        else {return val}
                    })
                setBoxOpen(tableState)
            }


        return (
            <div className={`InfoBox_${BoxState}`}>
                <div className="InfoBox_Header">
                    <Border position="Left" boxState={BoxState} key={`${Id}_Border_Left`} id={Id} />
                    <button
                        className='InfoBox_Header_Icon'
                        onClick={
                            () => 
                                {
                                    SetBoxState(!BoxState)
                                    majBoxsStates (index)
                                }
                            } 
                    >
                            <img src={ImgLink} alt="Icon of the category" />
                    </button>
                    <Border position="Right" boxState={BoxState} key={`${Id}_Border_Right`}/>
                </div>

                <div className={`InfoBox_Body_${BoxState}`}>
                    {Txt}
                </div>
            </div>
        );
    }

export default InfoBox
