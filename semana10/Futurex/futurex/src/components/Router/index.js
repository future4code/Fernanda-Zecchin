import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "../Home";
import {LoginPage} from "../LoginPage";
import ListTripsPage from "../ListTripsPage"
import TripDetailsPage from "../TripDetailsPage"
import Form from "../Form"
import CreateTripPage from '../CreateTripPage';




function Router(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
             <Home/>
          </Route> 
          <Route exact path="/login">
             <LoginPage/>
          </Route>
          <Route exact path="/create">
             <CreateTripPage/>
          </Route>
          <Route exact path="/trips">
             <ListTripsPage/>
          </Route>
          <Route exact path="/details">
             <TripDetailsPage/>
          </Route>
          <Route exact path="/form/">
             <Form/>
          </Route>
                
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router;

