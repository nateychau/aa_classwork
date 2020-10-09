import React from "react";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./form/login_form_container";
import SignupFormContainer from "./form/signup_form_container";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// import BenchIndexContainer from './bench_index_container';
import SearchContainer from './search_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    <Route exact path="/" component={SearchContainer}/>
  </div>
);

export default App;