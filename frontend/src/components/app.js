import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DashboardContainer from './dashboard/dasboard_container';
import upload from './upload/upload'
import HowToStart from './spot/how_to_start/how_to_start';
import './reset.scss';
import CurrentSpot from './spot/current_spot/current_spot';
import Capacity from './spot/capacity/capacity';
import Show from './spot/show/show';
import SpotLocation from './spot/spot_location/spot_location';
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/create_listing" component={HowToStart} />
      <ProtectedRoute exact path="/newListing/:spotId" component={CurrentSpot} />
      <ProtectedRoute exact path="/capacity/:spotId" component={Capacity} />
      <Route exact path="/spot/show/:spotId" component={Show} />
      <ProtectedRoute exact path="/location/:spotId" component={SpotLocation} />
      <ProtectedRoute exact path="/upload" component={upload} />
    </Switch>
  </div>
);

export default App;