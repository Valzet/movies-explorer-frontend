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
import SearchForm from "../SearchForm/SearchForm"
function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [userFoundMovies, setUserFoundMovies] = useState([]);
  const [userSavedMovies, setUserSavedMovies] = useState([]);
  const [checkBoxActive, setCheckboxActive] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const history = useHistory();

  const showSavedMovies = userSavedMovies.filter((movie) => {
    if (searchInput !== "") {
      return movie.nameRU.toLowerCase().includes(searchInput);
    } else return userSavedMovies;
  }, [userSavedMovies]);

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

      // const timer = setInterval(() => {
      // if (loggedIn)
      mainApi.getSavedMovies()
        .then((data) => {
          setUserSavedMovies(data);
          localStorage.setItem("userSavedMovies", data);
        })
        .catch(err => {
          console.log(err);
          //     }, 1000)
          // return () => clearInterval(timer)
        });
    }
  }, [loggedIn, setUserSavedMovies])

  useEffect(() => {
    tokenCheck();
  }, [])

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
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleRegister = (name, email, password) => {
    mainApi.register(name, email, password)
      .then(() => {
        history.push('/signin');
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    MovieApi.getMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleCheckbox = () => {
    if (checkBoxActive) {
      setCheckboxActive(false)
    } else {
      setCheckboxActive(true)
    }
  }

  useEffect(() => {
    let filteredMovies
    if (!checkBoxActive) {
      filteredMovies = allMovies.filter(movie => movie.duration <= 40)
    } else if (checkBoxActive) {
      filteredMovies = allMovies
    }
    setUserFoundMovies(filteredMovies)

  }, [checkBoxActive, allMovies])


  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchInput(search);
  };

  function handleSaveMovie(movie, setMovieId) {
    mainApi.saveMovie(movie)
      .then((res) => {
        setMovieId(res._id);
        setUserSavedMovies((state) => state.map((c) => c._id === movie._id ? res.data : c));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleMovieDelete(movie) {
    mainApi.deleteMovie(movie)
      .then((res) => {
        setUserSavedMovies((state) => state.filter((c) => c._id !== res._id))
      })
      .catch(err => {
        console.log(err);
      });
  }

  // let showSavedMovies = userSavedMovies.filter((movie) => {
  //   if (searchInput !== "") {
  //     return movie.nameRU.toLowerCase().includes(searchInput);
  //   } else return userSavedMovies;
  // });

  // let searchedMovies = userFoundMovies.filter((movie) => {
  //   if (searchInput !== "") {
  //     return movie.nameRU.toLowerCase().includes(searchInput);
  //   } else return '';
  // });

  function handleLogout() {
    localStorage.removeItem('token')
    setLoggedIn(false);
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
          <Route exact path='/movies'>
            <Header loggedIn={loggedIn} />
            <SearchForm searchMoviesHandler={searchMoviesHandler} handleCheckbox={handleCheckbox} />
            <Movies
              searchedMovies={searchedMovies}
              userSavedMovies={userSavedMovies}
              handleSaveMovie={handleSaveMovie}
              handleMovieDelete={handleMovieDelete}
            /> </Route>
          <Route exact path='/saved-movies'>
            <Header loggedIn={loggedIn} />
            <SearchForm searchMoviesHandler={searchMoviesHandler} />
            <SavedMovies
              searchedMovies={showSavedMovies}
              userSavedMovies={userSavedMovies}
              handleSaveMovie={handleSaveMovie}
              handleMovieDelete={handleMovieDelete}
            />  </Route>
          <Route exact path='/profile'>
            <Header loggedIn={loggedIn} />
            <Profile onUpdateUser={handleUpdateUser} handleLogout={handleLogout} /> </Route>
          <Route path='/*'> <NotFound /> </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App; 