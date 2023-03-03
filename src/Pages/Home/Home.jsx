import { useState } from "react";
import Categories from "../../Composants/Categories/Categories";
import Writter from "../../Composants/Writter/Writter";
import Cercles from './Assets/circles_autobouclant.png';
import './Home.scss'

function Home()
    {
        //ce state permet de savoir si au moins une box est ouverte(true)
        //on testera ensuite si true est présent dans le tableau
        const [boxOpen, setBoxOpen] = useState([false,false,false,false,false,false])
        const isOpen = boxOpen.includes(true)


        return (
            <main 
            style={{
                backgroundImage: `url(${Cercles}),url(${Cercles})`
            }}>
                <Categories boxOpen={boxOpen} setBoxOpen={setBoxOpen} />
                <Writter isOpen={isOpen} />
            </main>
        )
    }

export default Home;