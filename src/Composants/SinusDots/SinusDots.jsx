import { useState } from 'react';
import './SinusDots.scss';
import AutoInc from '../../Tools/AutoInc';
import {CreateSinusCurve,GenerateDotsXpos,GenerateDotsYpos} from './GenerateDots';
import DotsControlPannel from './DotsControlPannel';




function SinusDots ()
    {
        //génération de la courbe
        const curveWidth = 60;
        const curveForm = 360;
        const courbe = CreateSinusCurve(curveWidth,curveForm);

        //on pourra choisir notre quantité de dots
        const [dotsQuantity,SetDotsQuantity] = useState(50)
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
                    <div id="dotsZone" style={{height: 124+dotsQuantity}}>
                        {dotsTable.map((dot) => (
                            <div 
                                key={`dot_${dot}`} 
                                className={`dot_${dot} dot`} 
                                style={{
                                    top: DotsXPos[dot & 255],
                                    left: DotsYPos[dot & 255]
                                    }}></div>))
                        }
                    </div>
                    <DotsControlPannel
                        dotsQuantity={dotsQuantity} 
                        SetDotsQuantity={SetDotsQuantity} 
                        XPoint={XPoint} 
                        SetXPoint={SetXPoint} 
                        Xgap={Xgap} 
                        SetXgap={SetXgap} 
                        Ygap={Ygap} 
                        SetYgap={SetYgap} 
                    />
                </div>
            )
    }

export default SinusDots