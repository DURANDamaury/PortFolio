//convert degree angle to radian value
function degToRad(deg)
    {
    var pi = Math.PI;
    return deg * (pi/180);
    }

function CreateSinusCurve(curveWidth,curveForm)
    {
        //precalculation of a sinus curve
        let courbe=[];
        for (let i=0; i<256; i++)
            {
                //Deg angle is pass to Rad value.
                let radValue= degToRad(i);
                //calculation of sinus curve (don't worry about the cos opération, sin is just an inversion of curve. So it's the same).
                let val=curveWidth+curveWidth*Math.cos((radValue*curveForm)/256);
                //let fix to supérior value to have an integral value.
                let valFix=Math.ceil(val);
                //now push into array
                courbe.push(valFix);
            }
        return courbe;
    }

function GenerateDotsXpos(courbe,dotsQuantity,XPoint,Xgap)
    {
        // Comme il est compliqué de faire du temps réel, on va précalculer tous les X pour les differents dot
        // la table DotsXPos contiendra donc tous les X
        let DotsXPos = [];
        //Le but est de créer une table avec les x pour chaque dot
        //on va pointer sur la courbe sinus et ajouter XPoint qui correspond à notre position sur celle-ci
        //On ajoutera alors l'écart en fonction de notre boucle pour obtenir
        //0*ecart ; 1*ecart ; 2*ecart...
        //La valeur passée sera ANDé sur 8bits pour ne pas déborder et autoboucler sur la courbe de 256 valeurs
        for (let quantityOfX=0; quantityOfX<dotsQuantity; quantityOfX++)
            {
                let XRead = courbe[(XPoint+(quantityOfX*Xgap) & 255)]
                DotsXPos.push(XRead)
            }
        return DotsXPos;
    }

function GenerateDotsYpos(courbe,dotsQuantity,YPoint,Ygap)
    {
        let DotsYPos = [];
        for (let quantityOfY=0; quantityOfY<dotsQuantity; quantityOfY++)
            {
                let YRead = courbe[(YPoint+(quantityOfY*Ygap) & 255)]
                DotsYPos.push(YRead)
            }
        //DotsXPos contient tous les X
        //DotsYPos contient tous les Y
        return DotsYPos
    }

export {CreateSinusCurve, GenerateDotsXpos, GenerateDotsYpos}