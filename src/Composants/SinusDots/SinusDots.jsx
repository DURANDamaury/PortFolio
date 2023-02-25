import { useState } from 'react';
import './SinusDots.scss';
import AutoInc from '../../Tools/AutoInc';
import {CreateSinusCurve,GenerateDotsXpos,GenerateDotsYpos} from './GenerateDots';




function SinusDots ()
    {
        //génération de la courbe
        const curveWidth = 60;
        const curveForm = 360;
        const courbe = CreateSinusCurve(curveWidth,curveForm);

        //on pourra choisir notre quantité de dots
        let dotsQuantity = 50
        //XPoint sera le pointeur de courbe en X
        const [XPoint,SetXPoint] = useState(0);
        const [YPoint,SetYPoint] = useState(10);
        //le gap donnera l'écart entre chaque point dans la courbe
        const [Xgap,SetXgap] = useState(10);
        const [Ygap,SetYgap] = useState(10);       

        //DotsXPos et DotsYPos sont des tables contenant respectivement tous les X et Y
        const DotsXPos = GenerateDotsXpos(courbe,dotsQuantity,XPoint,Xgap);
        const DotsYPos = GenerateDotsYpos(courbe,dotsQuantity,YPoint,Ygap);


        //Pour simplifier la création des éléments on va créer une table contenant le même nombre de valeurs qu'il y a de dots
        let dotsTable = [];
        for (let quantityOfDots=0; quantityOfDots<dotsQuantity; quantityOfDots++)
            {dotsTable.push(quantityOfDots)}



        AutoInc(() => {
            SetXPoint(XPoint+3 & 255);
        }, 17);

        return (
                <div id='SinusDots'>
                    <div id="dotsZone">
                        {dotsTable.map((dot) => (
                            <div 
                                key={`dot_${dot}`} 
                                className={`dot_${dot} dot`} 
                                style={{
                                    top: DotsXPos[dot],
                                    left: DotsYPos[dot]
                                    }}></div>))
                        }
                    </div>
                    <div id="controlDots">
                        <label for="Xgap">Ecart X</label>
                        <input 
                            type="range" 
                            min="1" 
                            max="30" 
                            defaultvalue={Xgap} 
                            onChange={(evenement) => SetXgap(evenement.target.value)} 
                        />
                        <br/>
                        <label for="Ygap">Ecart Y</label>
                        <input 
                            type="range" 
                            min="1" 
                            max="30" 
                            defaultvalue={Ygap} 
                            onChange={(evenement) => SetYgap(evenement.target.value)} 
                        />
                        <br/>
                        <label for="Décalage X">Décalage X</label>
                        <input 
                            type="range" 
                            min="0" 
                            max="255" 
                            defaultvalue={XPoint} 
                            onChange={(evenement) => SetXPoint(evenement.target.value)} 
                        />


                    </div>
                </div>
            )
    }

export default SinusDots