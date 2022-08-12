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
function App() {
  const [movies, setMovies] = useState([]);
  // const [checkBoxActive, setCheckBoxActive] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('')
  const history = useHistory();

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
        .then((card) => {
          // setCards(card)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn])

  useEffect(() => {
    tokenCheck();
  }, [])

  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
      return;
    }
    history.push('/signin');
  }, [loggedIn, history]);

  function handleUpdateUser(name, email) {
    mainApi.updateUser(name, email)
      .then(res => {
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
        history.push('/');
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

  function handleLogout() {
    localStorage.removeItem('token')
    setLoggedIn(false);
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
            <Movies
              searchMoviesHandler={searchMoviesHandler}
              filteredMovies={filteredMovies}
            /> </Route>
          <Route exact path='/saved-movies'>
            <Header loggedIn={loggedIn} />
            <SavedMovies
              searchMoviesHandler={searchMoviesHandler}
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
