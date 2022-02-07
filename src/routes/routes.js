import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/'>
                    <Redirect to="/search"/>
                </Route>
            </Switch>
        </div>
    )
}