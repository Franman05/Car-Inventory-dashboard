import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { About, Cars, Contact, Home, SignIn } from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

let myCar = 'Car Inventory Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path='/'>
        <Home title={myCar} />
        </Route>

        <Route path='/cars'>
          <Cars></Cars>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="/about">
            <About></About>
        </Route>

        <Route path='/Signin'>
          <SignIn></SignIn> 
        </Route>

      </Switch>
    </Router>
    </Provider>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

