import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main';
function App() {
  return (
    <div className="content">
      <Header /> 
      <Switch>
<Route exact path='/signup'>  </Route>
<Route exact path='/signin'>  </Route>
<Route exact path='/'> <Main /> </Route>
<Route exact path='/movies'>  </Route>
<Route exact path='/saved-movies'>  </Route>
<Route exact path='/profile'>  </Route>
</Switch>
<Footer />
    </div >
  );
}

export default App;
