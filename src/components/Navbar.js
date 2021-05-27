import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends React.Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isDarkTheme, darkTheme, lightTheme } = themeContext;

                const { isLoggedIn, changeAuthStatus } = authContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;

                return (
                  <nav
                    style={{
                      background: theme.background,
                      color: theme.text,
                      height: "120px",
                    }}
                  >
                    <p onClick={changeAuthStatus} style={{ textAlign: "center" }}>
                      {isLoggedIn ? "Login" : "Logout"} 
                    </p>
                    <h2 style={{ textAlign: "center" }}>Atmos Academy</h2>
                    <div className="ui three buttons">
                      <button className="ui button">Overview</button>
                      <button className="ui button">Contact</button>
                      <button className="ui button">Support</button>
                    </div>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
