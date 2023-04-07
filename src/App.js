import './App.scss';
import Footer from './Composants/Footer/Footer';
import Header from './Composants/Header/Header';
import RoutesList from './Tools/Routes';
import { ThemeProvider } from './Tools/context';

function App() 
  {
    return (
      <>
        <ThemeProvider>
          <Header/>
          <RoutesList />
          <Footer/>
        </ThemeProvider>
      </>
    );
  }

export default App;
