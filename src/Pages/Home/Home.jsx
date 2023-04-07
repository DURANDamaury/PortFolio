import { useContext, useState } from "react";
import Categories from "../../Composants/Categories/Categories";
import Writter from "../../Composants/Writter/Writter";
import Cercles from './Assets/circles2.png';
import './Home.scss'
import { ThemeContext } from "../../Tools/context";

function Home()
    {
        //ce state permet de savoir si au moins une box est ouverte(true)
        //on testera ensuite si true est présent dans le tableau
        const [boxOpen, setBoxOpen] = useState([false,false,false,false,false,false])
        const isOpen = boxOpen.includes(true)

        const {theme} = useContext(ThemeContext)
        //On change la classe du body pour pouvoir aussi changer son style en fonction du thème
        const body=document.querySelector('body')
        body.className = `body_${theme}`


        //définition du style pour l'image de fond
        let backgroundstyle = {}
        if(theme === 'oldSchool')
            {
                backgroundstyle = 
                    {
                        backgroundImage: `url(${Cercles}),url(${Cercles})`
                    }
            }
        else 
            {
                backgroundstyle = null
            }





            
        return (
            <main className={`main_${theme}`}                
                style={backgroundstyle}
            >
                <Categories boxOpen={boxOpen} setBoxOpen={setBoxOpen} />
                <Writter isOpen={isOpen} />
            </main>
        )
    }

export default Home;