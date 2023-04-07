import './InfoBox.scss';

// images
import Projects from '../Icon/Assets/Projects.png';
import Skills from '../Icon/Assets/Skills.png';
import Tech from '../Icon/Assets/Tech.png';
import Tools from '../Icon/Assets/Tools.png';
import Who from '../Icon/Assets/Who.png';
import Contact from '../Icon/Assets/Contact.png';
import Border from './Border/Border';
import ButtonClose from './Border/ButtonClose.png';
// hooks
import { useContext, useState } from 'react';
import { ThemeContext } from '../../Tools/context';

function InfoBox({Id,Txt,boxOpen,setBoxOpen,index})
    {
        const {theme} = useContext(ThemeContext)
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

        //On va vérifier si une box est ouverte dans quel cas les autres box doivent disparaitre.
        const isOpen = boxOpen.includes(true)
        let state
        if (isOpen && BoxState) 
            {
                //Une box est ouverte. On va donc vérifier si celle en court l'est ou non
                //Pour cela on ajoutera une nouvelle classe: Invisible 
                state="visible"
            }
        else if (isOpen && !BoxState)
            {
                state="invisible"
            }
        else 
            {
                state="visible"
            }

        if (theme === 'oldSchool')
            {
                return (
                    <div className={`InfoBox_${theme}_${BoxState} BoxState_${theme}_${state}` }>
                        <div className={`InfoBox_Header_${theme} ${state}`}>
                            <Border position="Left" boxState={BoxState} key={`${Id}_Border_Left`} id={Id} />
                            <button
                                className={`InfoBox_Header_${theme}_Icon`}
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
        
                        <div className={`InfoBox_Body_${theme}_${BoxState}`}>
                            {Txt}
                        </div>
                    </div>
                    );
            }

        if (theme === 'newSchool')
            {
                return (
                    <div className={`InfoBox_${theme}_${BoxState} BoxState_${theme}_${state}` }>
                        <div className={`InfoBox_Header_${theme} ${state}`}>
                                <div className='InfoBox_Header_newSchool_Left_Border'></div>
                                <div className='InfoBox_Header_txt'>{Id}</div>
                                <div className='InfoBox_Header_newSchool_Right_Border'>
                                    <button 
                                        className={`Border_cross button_${BoxState}`}
                                        onClick={
                                            () => 
                                                {
                                                    SetBoxState(!BoxState)
                                                    majBoxsStates (index)
                                                }
                                            }
                                        >
                                        <img src={ButtonClose} alt="open button"/>
                                    </button>
                                </div>
                        </div>
        
                        <div className={`InfoBox_Body_${theme}_${BoxState}`}>
                            {Txt}
                        </div>
                    </div>
                    );
            }

        
    }

export default InfoBox
