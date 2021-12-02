import "./App.css";
import React, { useState, useEffect } from "react";
import { Addcolor } from "./Addcolor";
import { Movielist } from "./Movielist";
import { Addmovie } from "./Addmovie";
import { Editmovie } from "./Editmovie";
import { Switch, Route, Redirect } from "react-router-dom";
import { Moviedetails } from "./Moviedetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { API_URL } from "./glopal-constants.js";

export default function App() {
  // const allmovies = [
  //   {
  //     name: "Avatar",
  //     id: "100",
  //     poster: "https://miro.medium.com/max/453/1*zWGSyuGKWgKYu-ZAf5bxiA.jpeg",
  //     rating: 7.8,
  //     summary:
  //       "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  //     trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
  //   },
  //   {
  //     name: "Avengers: Endgame",
  //     id: "101",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  //     rating: 8.4,
  //     summary:
  //       "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  //     trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  //   },
  //   {
  //     name: "Titanic",
  //     id: "102",
  //     poster: "https://m.media-amazon.com/images/I/81nGkful2jL._AC_SY679_.jpg",
  //     rating: 7.8,
  //     summary:
  //       "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic",
  //     trailer: "https://www.youtube.com/embed/CHekzSiZjrY",
  //   },
  //   {
  //     name: "Star Wars: The Force Awakens",
  //     id: "103",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
  //     rating: 7.8,
  //     summary:
  //       "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  //     trailer: "https://www.youtube.com/embed/sGbxmsDFVnE",
  //   },
  //   {
  //     name: "Avengers: Infinity War",
  //     id: "104",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
  //     rating: 8.4,
  //     summary:
  //       "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  //     trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
  //   },
  //   {
  //     name: "Jurassic World",
  //     id: "105",
  //     poster: "https://picfiles.alphacoders.com/357/357474.jpg",
  //     rating: 7.0,
  //     summary:
  //       "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
  //     trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
  //   },
  //   {
  //     name: " The Lion King",
  //     id: "106",
  //     poster:
  //       "https://images.moviesanywhere.com/c07276e9473360730fdbc94baebc4236/4692c964-61ba-486d-9c77-939dbfba2f07.jpg",
  //     rating: 6.8,
  //     summary:
  //       "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  //     trailer: "https://www.youtube.com/embed/7TavVZMewpY",
  //   },
  //   {
  //     name: "Thor Ragnarok",
  //     id: "107",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
  //     rating: 7.9,
  //     summary:
  //       "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
  //     trailer: "https://www.youtube.com/embed/ue80QwXMRHg",
  //   },
  // ];
  const [movies, setmovies] = useState([]);
  const history = useHistory();
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setmovies(mvs));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ borderRadius: "0", minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/Addmovies")}
              >
                Add movies
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/")}
              >
                Homepage
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/Dashboard")}
              >
                Dashboard
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/movielist")}
              >
                Movielist
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/Addcolor")}
              >
                Addcolor
              </Button>
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                style={{ marginLeft: "auto" }}
              >
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              {mode === "light" ? "dark mode" : "light mode"}
            </Toolbar>
          </AppBar>

          <Switch>
            {/* Each route is case, eg. - case '/about': */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movielist/edit/:id">
              <Editmovie movies={movies} setmovies={setmovies} />
            </Route>
            <Route path="/movielist/:id">
              <Moviedetails />
            </Route>
            <Route path="/Addmovies">
              <Addmovie />
            </Route>
            <Route path="/films">
              <Redirect to="/movielist" />
            </Route>
            <Route path="/movielist">
              <Movielist />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/Addcolor">
              <Addcolor />
            </Route>
            <Route path="**">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div>
      <h2>Home, Welcome All!!!</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard ***</h2>
    </div>
  );
}
function Notfound() {
  return (
    <div>
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt=""
      />
    </div>
  );
}
