//composants
import ContactBox from './ContactBox/ContactBox';

//SASS import
import './Contact.scss';


function Contact()
    {
        const options = 
            [
                {
                nom: "Mon Linkedin",
                icone: "Linkedin",
                link: "https://www.linkedin.com/in/durand-amaury/"
                },

                {
                nom: "Mon email",
                icone: "Mail",
                link: "amaury.durand.fr@gmail.com"
                },

                {
                nom: "Mon téléphone",
                icone: "Phone",
                link: "06.87.74.04.65"
                }
            ]


        return (
            <>
                <div id="Contact">
                    <h1>Me contacter</h1>
                    <p>Je suis à la recherche d'un emploi en tant que developpeur web.</p>
                    <p>Tout type de contrat m'interesse. CDD, CDI, temps complet ou partiel.</p>
                    <p>Si vous êtes situé dans un rayon d'environ 40Km de Villers Bocage (14),
                    il est possible pour moi de travailler en présentiel. Cependant je suis 
                    ouvert au télétravail et le privilégie si possible.
                    </p>
                    <p>Si vous êtes hors de ce rayon, le télétravail est nécessaire pour la majorité des journées.
                    Cependant j'étudie toute proposition.
                    </p>
                    <p>Pas de travail le week-end.</p>
                </div>
                <div className="Contact_options">
                    {options.map((option,index) => 
                        <ContactBox 
                            key= {`option_${index}`}
                            nom = {option.nom}
                            icone = {option.icone}
                            link = {option.link} 
                        />
                    )}
                </div>
            </>
        )
    }

export default Contact