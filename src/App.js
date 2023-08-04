import { Suspense, useState } from "react";
import { Routers } from "./Routers";
import { useEffect } from "react";
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

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthorized(true);
    }
  }, [isAuthorized]);

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
