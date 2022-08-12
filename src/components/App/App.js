import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { MovieApi } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [checkBoxActive, setCheckBoxActive] = useState(true)

  function getMovies() {
    MovieApi.getMovies()
      .then((data) => {
        setMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getMovies();
  }, [])

  const [searchInput, setSearchInput] = useState("");
  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchInput(search);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchInput);
  });

  return (
    <div className="content">

      <Switch>
        <Route exact path='/signup'> <Register />  </Route>
        <Route exact path='/signin'> <Login /> </Route>
        <Route exact path='/'> <Main /> </Route>
        <Route exact path='/movies'> <Movies
          searchMoviesHandler={searchMoviesHandler}
          filteredMovies={filteredMovies}
        /> </Route>
        <Route exact path='/saved-movies'> <SavedMovies
          searchMoviesHandler={searchMoviesHandler}
        />  </Route>
        <Route exact path='/profile'> <Profile /> </Route>
        <Route path='/*'> <NotFound /> </Route>
      </Switch>

    </div >
  );
}

export default App;
