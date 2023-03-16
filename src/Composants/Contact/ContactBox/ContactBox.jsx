//Images
import linkedinIcon from './Assets/Linkedin_logo.png';
import mailIcone from './Assets/mail.png';
import phoneIcone from './Assets/phone.png';
//SASS
import './ContactBox.scss';

function ContactBox ({nom,icone,link})
{
    const icones =
        [
            {nom: "Phone", icone: phoneIcone },
            {nom: "Mail", icone: mailIcone},
            {nom: "Linkedin", icone: linkedinIcon}
        ]

    const iconeImage = icones.find(icn => icn.nom === icone);
    const iconeToDisplay = iconeImage.icone;
        
    return (
        <div className="Contact_box">
            <div className="Contact_box_icon"><img src={iconeToDisplay} alt="option icone"/></div>
            <div className="Contact_box_nom">{nom}</div>
        </div>
    )
}

export default ContactBox