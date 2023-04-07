import { useContext } from 'react';
import './ThemeButton.scss'
import { ThemeContext } from '../../Tools/context';

function ThemeButton()
{
    const { toggleTheme, theme} = useContext(ThemeContext)

    return (
        <div className="themeButton"
            onClick={
                () => 
                    {
                        toggleTheme()
                    }
                } 
        >
            <div className={`themeButtonRound_${theme}`}></div>
        </div>
    )
}

export default ThemeButton;