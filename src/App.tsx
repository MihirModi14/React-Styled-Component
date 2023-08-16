import { Home } from './components/Home';
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './App.styled';
import './App.css'

const  theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: '768px'
}

function App() {
  return (
    <> 
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home/>
      </ThemeProvider>
    </>
  );
  
}

export default App;