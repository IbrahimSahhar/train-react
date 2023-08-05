import { Suspense, useState } from "react";
import { Routers } from "./Routers";
import { ThemeProvider } from "styled-components";
import {
  BlueTheme,
  DarkTheme,
  GreenTheme,
  LightTheme,
  OrangeTheme,
  RedTheme,
  YellowTheme,
  fontsize,
} from "./Global/Theme";
import { AuthContext } from "./context/AuthContext";

import { Spinner } from "./Global/style";

function App() {
  const Themes = {
    dark: DarkTheme,
    light: LightTheme,
    Blue: BlueTheme,
    Red: RedTheme,
    Yellow: YellowTheme,
    Orangered: OrangeTheme,
    Green: GreenTheme,
    fontSize: fontsize,
  };
  let authorized = false;
  if (localStorage.getItem("token")) {
    authorized = true;
  }
  const [isAuthorized, setIsAuthorized] = useState(authorized);
  return (
    <ThemeProvider theme={Themes}>
      <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
        <div className="App">
          <Suspense fallback={<Spinner>Loading...</Spinner>}>
            <Routers />
          </Suspense>
        </div>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
