
import { useState } from 'react'
import arrow from './Assets/arrow_up.png'
import './DotsControlPannel.scss'

function DotsControlPannel ({dotsQuantity,SetDotsQuantity,Xgap,SetXgap,Ygap,SetYgap})
    {
        const [ControlPannelStatus,SetControlPannelStatus] = useState(false);
        return (
            <div id="controlDots">
                <div id="controlDots_header">
                    <img 
                        className={`ControlPannelOpenButton_${ControlPannelStatus}`} 
                        src={arrow} 
                        alt="arrow to open of close the control pannel" 
                        onClick={() => SetControlPannelStatus(!ControlPannelStatus)}
                        />
                </div>

                <div id={`controlDots_body_${ControlPannelStatus}`} className='controlDots_body'>
                    <div className='controlDots_body_labels'>
                        <label htmlFor="DotsQuantity">Quantité: {dotsQuantity}</label><br/>
                        <label htmlFor="Xgap">Ecart X: {Xgap}</label><br/>
                        <label htmlFor="Ygap">Ecart Y: {Ygap}</label>
                    </div>
                    <div className='controlDots_body_inputs'>               
                        <input
                            className='range' 
                            type="range" 
                            min="1" 
                            max="255" 
                            defaultValue={dotsQuantity} 
                            onChange={(evenement) => SetDotsQuantity(parseInt(evenement.target.value))} 
                        />
                        <br/>
                        
                        <input 
                            className='range'
                            type="range" 
                            min="1" 
                            max="256" 
                            defaultValue={Xgap} 
                            onChange={(evenement) => SetXgap(evenement.target.value)} 
                        />
                        <br/>
                                                
                        <input
                            className='range' 
                            type="range" 
                            min="1" 
                            max="256" 
                            defaultValue={Ygap} 
                            onChange={(evenement) => SetYgap(evenement.target.value)} 
                        />
                    </div>
                </div>
            </div>
        )
    }

export default DotsControlPannel