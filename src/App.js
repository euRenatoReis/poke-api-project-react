
import './App.css';
import { ThemeProvider } from '../src/services/trocarTema.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pagesMontadas/Home';
import { NoPage } from './pagesMontadas/NoPage';
import { Layout } from './pagesMontadas/layout';
import { PokePage } from './pagesMontadas/PokePage';
import { GlobalStyle } from './services/Reset';

function App() {


  return (
    <div className="App">
      <GlobalStyle/>
      <ThemeProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='poke-page:pokeName' element={<PokePage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
