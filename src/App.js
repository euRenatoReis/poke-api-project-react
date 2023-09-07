
import './App.css';
import { ThemeProvider } from '../src/services/trocarTema.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pagesMontadas/Home';
import { NoPage } from './pagesMontadas/NoPage';
import { BotaoTema } from './botoes/botoes';
import { PokePage } from './pagesMontadas/PokePage';
import { useState } from 'react';
import { Layout } from './pagesMontadas/layout';


function App() {

/*   const [resultsSearch, setResultsSearch] = useState([]) */


  return (
    <div className="App">
      <ThemeProvider>
        <header className="App-header">
          <BotaoTema />
        </header>
        <BrowserRouter>
          <Routes path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='poke-page' element={<PokePage /* resultsSearch={resultsSearch} setResultsSearch={setResultsSearch} */ />}></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
