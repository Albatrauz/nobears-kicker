import React from 'react';
import App from './App';
import Matches from './Matches';
// import Participants from './Participants';
import AddGame from './AddGame';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const Router = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/wedstrijden" component={Matches} />
            {/* <Route exact path="/deelnemers" component={Participants} /> */}
            <Route exact path="/toevoegen" component={AddGame} />
        </Switch>
    </BrowserRouter>


export default Router;