import { useContext } from 'react';
import './Header.scss';
import ThemeButton from './ThemeButton';
import { ThemeContext } from '../../Tools/context';

function Header()
    {
        const {theme} = useContext(ThemeContext)
        return (
            <header className={`header_${theme}`}>
                <div className='themeEmptyDiv'></div>
                <h1>DURAND AMAURY</h1>
                <ThemeButton />
            </header>
        )
    }

export default Header;