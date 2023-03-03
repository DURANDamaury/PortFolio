import './Writter.scss';

function Writter({isOpen})
    {
        const Texte = 
            [
                {
                    type:'titre',
                    txt:"Ceci est un titre"
                },
                {
                    type:'normal',
                    txt:"ceci est un texte normal"
                }
            ]

        

        return (
            <div className={`Writter Writter_${isOpen}`}>
                <div className="Writter_txt">
                    <h1>TEST</h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, placeat praesentium. Reiciendis tempore sunt obcaecati suscipit iure aspernatur? Odit aspernatur explicabo ratione aut enim perferendis fuga itaque reprehenderit et soluta.
                    </p>
                </div>
            </div>
        )
    }

export default Writter;
