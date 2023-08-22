import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './components/Banner'
import Linha from './components/Linha'
import Assistencia from './components/Assistencias';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> <Linha/> <Banner/> <Assistencia/>
  </React.StrictMode>
);

