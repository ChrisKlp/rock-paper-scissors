import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global/GlobalStyle';
import Header from './components/Header';
import theme from './global/theme';
import Game from './components/Game';
import { useState } from 'react';

const App: React.FC = () => {
  const [points, setPoints] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header points={points} />
      <Game setPoints={setPoints} />
    </ThemeProvider>
  );
};

export default App;
