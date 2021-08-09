// libs
import React from "react";
import { Grid } from "@material-ui/core";
// components
import Header from "./components/Header";
import Movies from "./components/Header/mains/Movies";
import TopMovies from "./components/Header/mains/TopMovies";
import ToggleThemeBtn from "./components/Header/mains/ToggleThemeBtn/ToggleThemeBtn";
// contexts
import ProgressContextProvider from "./Contexts/ProgressContext";
import ThemeContextProvider from "./Contexts/ThemeContext";
import MovieContextProvider from "./Contexts/MovieContext";
import AuthContextProvider from "./Contexts/AuthContext";
import TopMovieContextProvider from "./Contexts/TopMovieContext";

const App = () => (
  <div className="App">
    <TopMovieContextProvider>
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Header />
              <Grid container>
                <Grid item xs={4}>
                  <TopMovies />
                </Grid>
                <Grid item xs={8}>
                  <Movies />
                </Grid>
              </Grid>
              <ToggleThemeBtn />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </TopMovieContextProvider>
  </div>
);

export default App;
