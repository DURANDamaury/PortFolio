
import './Writter.scss';

function Writter({isOpen})
    {
        
        const texte0 = "test";

        const texte = texte0.split('')


        return (
            <div className={`Writter Writter_${isOpen}`}>
                <div className="Writter_txt">
                    <h1>TEST</h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, placeat praesentium. Reiciendis tempore sunt obcaecati suscipit iure aspernatur? Odit aspernatur explicabo ratione aut enim perferendis fuga itaque reprehenderit et soluta.
                    </p>
                    {
                        texte.map((txt,index) => (<span key={`txt_${index}`} >{txt}</span>))
                    }
                </div>
            </div>
        )
    }

export default Writter;
