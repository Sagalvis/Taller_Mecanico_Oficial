/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Layout from "./Layout/Layout";
import Router from "./Routers/router";


export const ThemeContext = React.createContext(null);
const Dashboard = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle  = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{setTheme,theme }}>
      <ThemeProvider theme={themeStyle} >
        <GlobalStyle/>
          <>
            <Layout>
              <Router/>
            </Layout>
          </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Dashboard;