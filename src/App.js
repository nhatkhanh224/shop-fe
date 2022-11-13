import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobelStyle } from "./Shared/Theme";
import { darck, light } from "./Shared/Theme";
import { NavBar } from "./Components/NavBar/NavBar";
import { AllRouters } from "./Shared/Routers";
import { Footer } from "./Components/Footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const themetoggle = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={!themetoggle ? light : darck}>
        <GlobelStyle />
        <div className="App">
          <NavBar />
          <AllRouters />
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
}
export default App;
