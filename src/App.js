
import './App.css';
import { ThemeProvider } from '../src/services/trocarTema.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pagesMontadas/Home';
import { NoPage } from './pagesMontadas/NoPage';
import { BotaoTema } from './botoes/botoes';
import { PokePage } from './pagesMontadas/PokePage';
import { Layout } from './pagesMontadas/layout';
import { TelaPokeProvider } from './services/pageContext';


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <TelaPokeProvider>
          <header className="App-header">
            <BotaoTema />
          </header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='poke-page' element={<PokePage />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TelaPokeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
