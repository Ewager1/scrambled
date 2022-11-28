import { ThemeProvider } from "styled-components";
import { StartButton } from "./components";
import { theme } from "./styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <StartButton>I'm a Themed Button</StartButton>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
