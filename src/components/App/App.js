import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { MovieApi } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import * as mainApi from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [userFoundMovies, setUserFoundMovies] = useState([]);
  const [userSavedMovies, setUserSavedMovies] = useState([]);
  const [userSavedMoviesCopy, setUserSavedMoviesCopy] = useState([]);
  const [checkBoxActive, setCheckboxActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true || false);
  const [searchInput, setSearchInput] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  // const [foundError, setFoundError] = useState('');

  const showSavedMovies = userSavedMovies.filter((movie) => {
    if (searchInput !== "") {
      return movie.nameRU.toLowerCase().includes(searchInput);
    } else return userSavedMovies;
  });

  const searchedMovies = userFoundMovies.filter((movie) => {
    if (searchInput !== "") {
      return movie.nameRU.toLowerCase().includes(searchInput);
    } else return '';
  });

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUser()
        .then(res =>
          setCurrentUser(res.data)
        )
        .catch(err => {
          console.log(err);
        })
      mainApi.getSavedMovies()
        .then((data) => {
          setUserSavedMovies(data);
          setUserSavedMoviesCopy(data);
          localStorage.setItem("userSavedMovies", JSON.stringify(data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn')
    setLoggedIn(isLoggedIn)
    tokenCheck();
  }, [])

  function handleSavedMoviesSearch() {
    mainApi.getSavedMovies()
      .then((data) => {
        setUserSavedMovies(data);
        setUserSavedMoviesCopy(data);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(name, email) {
    mainApi.updateUser(name, email)
      .then(() => {
        setCurrentUser({ ...currentUser, name, email });
      })
      .catch(err => {
        console.log(err);
      });
  }

  const tokenCheck = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      mainApi.getUser(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            localStorage.setItem('loggedIn', loggedIn)
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  const handleLogin = (email, password) => {
    mainApi.authorize(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        tokenCheck();
        history.push("/movies");
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleRegister = (name, email, password) => {
    mainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {
        console.log(err);
      })
  }

  function getMovies() {
    if (!localStorage.getItem('allMovies')) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        MovieApi.getMovies()
          .then((downloadedFilms) => {
            setAllMovies(downloadedFilms);
            localStorage.setItem('allMovies', JSON.stringify(downloadedFilms))
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsLoading(false);
          })
      }, 2000);
      return () => clearTimeout(timer);
    } else if (localStorage.getItem('allMovies')) {
      const loadedMovies = JSON.parse(localStorage.getItem('allMovies'))
      setAllMovies(loadedMovies)
    }
  }

  const handleCheckbox = () => {
    localStorage.getItem('checkboxLocal')
    if (!localStorage.getItem('checkboxLocal')) {
      localStorage.setItem('checkboxLocal', checkBoxActive)
    }
    if (checkBoxActive) {
      setCheckboxActive(false)
    } else if (!checkBoxActive) {
      setCheckboxActive(true)
    }
  }

  useEffect(() => {
    localStorage.getItem('checkboxLocal')
    let filteredMovies
    if (checkBoxActive) {
      filteredMovies = userSavedMoviesCopy.filter(movie => movie.duration <= 40)
      // let moviesNotFound = filteredMovies.filter(movie => movie === 0)
      // setFoundError(moviesNotFound)
    } else if (!checkBoxActive) {
      filteredMovies = userSavedMoviesCopy
    }
    setUserSavedMovies(filteredMovies)
  }, [checkBoxActive, userSavedMoviesCopy])

  useEffect(() => {
    localStorage.getItem('checkboxLocal')
    let filteredMovies
    if (checkBoxActive) {
      filteredMovies = allMovies.filter(movie => movie.duration <= 40)
    } else if (!checkBoxActive) {
      filteredMovies = allMovies
    }
    setUserFoundMovies(filteredMovies)
  }, [checkBoxActive, allMovies])

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem("searchInput"));
    setSearchInput(searchResult);

  }, [searchInput])

  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLowerCase();
    localStorage.setItem("searchInput", JSON.stringify(search))
    const searchResult = JSON.parse(localStorage.getItem("searchInput"));
    setSearchInput(searchResult);
  };

  function handleSaveMovie(movie, setMovieId) {
    mainApi.saveMovie(movie)
      .then((res) => {
        setMovieId(res._id);
        setUserSavedMovies((state) => state.map((c) => c._id === movie._id ? res.data : c));
        setUserSavedMoviesCopy((state) => state.map((c) => c._id === movie._id ? res.data : c));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleMovieDelete(movie) {
    mainApi.deleteMovie(movie)
      .then((res) => {
        setUserSavedMovies((state) => state.filter((c) => c._id !== res._id))
        setUserSavedMoviesCopy((state) => state.filter((c) => c._id !== res._id))
        handleSavedMoviesSearch()
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear()
    history.push("/");
  }

  return (
    <div className="content">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/signup'> <Register handleRegister={handleRegister} />  </Route>
          <Route exact path='/signin'> <Login handleLogin={handleLogin} tokenCheck={tokenCheck} /> </Route>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} />
            <Main />
          </Route>
          <ProtectedRoute
            exact path='/movies' loggedIn={loggedIn}
            component={Movies}
            isLoading={isLoading}
            getMovies={getMovies}
            searchedMovies={searchedMovies}
            userSavedMovies={userSavedMovies}
            handleSaveMovie={handleSaveMovie}
            handleMovieDelete={handleMovieDelete}
            searchMoviesHandler={searchMoviesHandler}
            handleCheckbox={handleCheckbox}
            checkBoxActive={checkBoxActive}
            searchInput={searchInput}
          />
          <ProtectedRoute exact path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            searchedMovies={showSavedMovies}
            userSavedMovies={userSavedMovies}
            handleSaveMovie={handleSaveMovie}
            handleMovieDelete={handleMovieDelete}
            handleSavedMoviesSearch={handleSavedMoviesSearch}
            searchMoviesHandler={searchMoviesHandler}
            handleCheckbox={handleCheckbox}
            checkBoxActive={checkBoxActive}
            searchInput={searchInput}
          />
          <ProtectedRoute exact path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            handleLogout={handleLogout}
          />
          <Route path='/*'> <NotFound /> </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App; 