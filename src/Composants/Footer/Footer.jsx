import { NavLink } from 'react-router-dom'
import './Footer.scss'

function Footer ()
    {
        return (
            <footer>
                <NavLink to='/MentionsLegales'>Mentions légales</NavLink>
            </footer>
        )
    }

export default Footer