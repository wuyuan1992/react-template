import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { OpenAccount } from './pages/openAccount';


class Account extends Component {

  render() {
    const match = this.props.match;

    console.log(match.url);

    return (
        <Switch>
            {/* <Route path={`${match.url}/`} component={ OpenAccount } ></Route> */}
        </Switch>
    );
  }
}
export default Account;