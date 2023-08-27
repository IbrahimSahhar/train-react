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
import { GlobalStyle } from "./Global/GlobalStyle";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
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
          <GlobalStyle dir={i18n.language === "en" ? "ltr" : "rtl"}>
            <Suspense fallback={<Spinner>Loading...</Spinner>}>
              <Routers />
            </Suspense>
          </GlobalStyle>
        </div>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
