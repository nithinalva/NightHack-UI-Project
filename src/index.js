import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Aboutme from './pages/Aboutme';

export const  Routing=()=>{

return(
  <Router>
    
    <Switch>


    <Route exact path='/' component={App}/>
    <Route  path="/aboutme" component={Aboutme}/>
    </Switch>
  </Router>

) 
}


ReactDOM.render(

    <Routing/>,
  document.getElementById('root')
);

