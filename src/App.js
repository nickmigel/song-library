import './App.css';

import { Link, Switch, Route } from 'react-router-dom'

import SignIn from './components/Signin/Signin'
import SignUp from './components/Signin/Signup'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/signup'> Sign Up</Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <SignIn />
        </Route>


        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
