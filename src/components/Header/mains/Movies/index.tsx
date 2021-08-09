// libs
import React, { ChangeEvent, useContext, useState } from "react";
import { Box, TextField, Button, Chip, PropTypes } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MovieContext } from "../../../../Contexts/MovieContext";
import { ThemeContext } from "../../../../Contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  movieInput: {
    marginRight: "5px",
  },
  movieChip: {
    fontSize: "2rem",
    padding: "20px 15px",
    margin: "5px",
  },
}));

const Movies = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState("");

  //context
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as Exclude<PropTypes.Color, "inherit">;
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  console.log(movies.length);

  const handleInputChangeMovie = (event: ChangeEvent<HTMLInputElement>) => {
    setMovie(event.target.value);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favorite movie ..."
          variant="outlined"
          className={classes.movieInput}
          onChange={handleInputChangeMovie}
          value={movie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" my={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            className={classes.movieChip}
            onDelete={() => deleteMovie(movie.id)}
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
