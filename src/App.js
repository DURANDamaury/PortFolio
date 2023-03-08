import { StrictMode } from 'react';
import './App.scss';
import Header from './Composants/Header/Header';
import RoutesList from './Tools/Routes';

function App() 
  {
    return (
      <>
        <StrictMode>
        <Header/>
        <RoutesList />
        </StrictMode>
      </>
    );
  }

export default App;
