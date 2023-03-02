import Categories from "../../Composants/Categories/Categories";
import Writter from "../../Composants/Writter/Writter";
import Cercles from './Assets/circles_autobouclant.png';
import './Home.scss'

function Home()
    {
        return (
            <main 
            style={{
                backgroundImage: `url(${Cercles}),url(${Cercles})`
            }}>
                <Categories/>
                <Writter/>
            </main>
        )
    }

export default Home;