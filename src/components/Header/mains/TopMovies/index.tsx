// libs
import React, { useContext, useEffect } from "react";
import { Checkbox, ListItemText, makeStyles } from "@material-ui/core";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  ListItem,
  List,
  ListItemIcon,
} from "@material-ui/core";
import { TopMovieContext } from "../../../../Contexts/TopMovieContext";

const useStyles = makeStyles((theme) => ({
  topMoviesHeader: {
    paddingBottom: 0,
  },
  topMoviesList: {
    paddingBottom: 0,
  },
  topMoviesItem: {
    paddingTop: "2px",
    paddingBottom: "2px",
  },
}));

const TopMovies = () => {
  const classes = useStyles();
  const { topMovies, getTopMovies, toggleWatched } =
    useContext(TopMovieContext);
  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <div className="top-movies-wrapper">
      <Box mt={1} ml={2}>
        <Card raised>
          <CardHeader
            title="Top 10 Movies of all time"
            className={classes.topMoviesHeader}
            titleTypographyProps={{
              variant: "h4",
              align: "center",
              color: "primary",
            }}
          />
          <CardContent className={classes.topMoviesList}>
            <List>
              {topMovies.map((movie: any) => (
                <ListItem
                  button
                  className={classes.topMoviesItem}
                  key={movie.imdbID}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={movie.Watched}
                      onClick={() => toggleWatched(movie.imdbID)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={movie.Title} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default TopMovies;
