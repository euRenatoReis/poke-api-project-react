
import React, {useContext} from 'react';
import { ThemeProvider, ThemeContext} from '../src/services/trocarTema.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pagesMontadas/Home';
import { NoPage } from './pagesMontadas/NoPage';
import { Layout } from './pagesMontadas/layout';
import { PokePage } from './pagesMontadas/PokePage';
import { GlobalStyle } from './services/Reset';
import { Fonts } from './fonts/fonts';


function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <GlobalStyle/>
      <Fonts theme={theme}/>
      <ThemeProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='poke-page/:pokemonNome' element={<PokePage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
