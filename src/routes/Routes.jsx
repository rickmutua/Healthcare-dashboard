import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../components/content/Home';

class Routes extends Component {
    render() {
        return (
            <div>
               <Switch>
                   <Route exact='true' path='/' component={Home}/>
               </Switch>
            </div>
        );
    }
}

export default Routes;