import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import About from './modules/About';
import Repos from './modules/Repos';
import App from './modules/App';
import './css/index.css';
import logo from './logo.svg';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
        <Router>
            <div>
                <div className="index-header">
                    <ul>
                        <li><img src={logo} className="index-logo" alt="logo" /></li>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Repos</Link></li>
                    </ul>
                </div>

                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Repos}/>
            </div>
        </Router>
), document.getElementById('root'));
registerServiceWorker();
