import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { OpenAccount } from './pages/openAccount';


export default class Account extends Component {

  render() {
    const match = this.props.match;

    return (
        <Switch>
            <Route path={`${match.url}/index`} component={OpenAccount} ></Route>
        </Switch>
    );
  }
}