//Images
import { useState } from 'react';
import { Link } from 'react-router-dom';
//gfxs
import linkedinIcon from './Assets/Linkedin_logo.png';
import mailIcone from './Assets/mail.png';
import phoneIcone from './Assets/phone.png';
import arrow from './Assets/arrow.png'
//SASS
import './ContactBox.scss';

function ContactBox ({nom,icone,link})
{
    //state d'ouverture de la box
    const [contactState, SetConstactState] = useState(false); 
    //ici on va chercher l'icone correspondante
    const icones =
        [
            {nom: "Phone", icone: phoneIcone },
            {nom: "Mail", icone: mailIcone},
            {nom: "Linkedin", icone: linkedinIcon}
        ]

    const iconeImage = icones.find(icn => icn.nom === icone);
    const iconeToDisplay = iconeImage.icone;





    /* **************************************************************************************************** */
    //rendu
    return (
        <div className="Contact_box" onClick={() => SetConstactState(!contactState)}>
            <div className="Contact_box_icon"><img src={iconeToDisplay} alt="option icone"/></div>
            <div className="Contact_box_nom">{nom}</div>
            <div className={`Contact_box_arrow_${contactState}`}><img src={arrow} alt="arrow" /></div>
            {nom === "Mon téléphone" && 
                <div className={`Contact_box_phone Contact_box_infos_${contactState}`}>{link}</div>}
            {nom === "Mon email" && 
                <a className={`Contact_box_mail Contact_box_infos_${contactState}`} href={`mailto:${link}`}>{link}</a> }
            {nom === "Mon Linkedin" && 
                <Link to={{ pathname: link }} target="_blank" className={`Contact_box_linkedin Contact_box_infos_${contactState}`}>{link}</Link>}
        </div>
    )
}

export default ContactBox