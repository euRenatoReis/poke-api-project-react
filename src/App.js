
import './App.css';
import { ThemeProvider } from '../src/services/trocarTema.jsx';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import { Home } from './pagesMontadas/Home';
import { NoPage } from './pagesMontadas/NoPage';
import { Layout } from './pagesMontadas/layout';
import { useState } from 'react';
import { themes } from '../src/services/trocarTema.jsx';
import GlobalStyles from './estilos/GlobalStyles';

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <div className="App">
      <ThemeProvider  theme={isDarkTheme ? themes.dark : themes.light}>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/*   <Route path='poke-page' element={<PokePage />} /> */}
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      
      </ThemeProvider>
    </div>
  );
}

export default App;
