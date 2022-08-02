import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
function App() {
  return (
    <div className="content">

      <Switch>
        <Route exact path='/signup'>  </Route>
        <Route exact path='/signin'>  </Route>
        <Route exact path='/'> <Main /> </Route>
        <Route exact path='/movies'> <Movies /> </Route>
        <Route exact path='/saved-movies'>  </Route>
        <Route exact path='/profile'>  </Route>
      </Switch>

    </div >
  );
}

export default App;
