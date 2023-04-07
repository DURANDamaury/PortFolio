import { NavLink } from 'react-router-dom'
import './Footer.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../Tools/context'

function Footer ()
    {
        const {theme} = useContext(ThemeContext)
        return (
            <footer className={`footer_${theme}`}>
                <NavLink to='/MentionsLegales'>Mentions légales</NavLink>
            </footer>
        )
    }

export default Footer