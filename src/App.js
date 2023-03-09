import { StrictMode } from 'react';
import './App.scss';
import Footer from './Composants/Footer/Footer';
import Header from './Composants/Header/Header';
import RoutesList from './Tools/Routes';

function App() 
  {
    return (
      <>
        <StrictMode>
          <Header/>
          <RoutesList />
          <Footer/>
        </StrictMode>
        
      </>
    );
  }

export default App;
