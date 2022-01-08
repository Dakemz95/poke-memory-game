import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

// Css
import './index.css';

// Components
import App from './App';
import Home from './routes/Home';
import Game from './routes/Game';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="game/:mode" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
