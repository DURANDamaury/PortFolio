import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => 
    {
        const [theme, setTheme] = useState('newSchool')
        const toggleTheme = () => {
            setTheme(theme === 'oldSchool' ? 'newSchool' : 'oldSchool')
        }
    
        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        )
    }