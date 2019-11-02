import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Iphone from './components/Iphone';
import Ipad from './components/Ipad';
import Macbook from './components/Macbook';
import Iphone11 from './components/Iphone11';
import Iphone11Pro from './components/Iphone11Pro';
import IpadPro from './components/IpadPro';
import IpadAir from './components/IpadAir';
import MacBook13Pro from './components/MacBookPro13';
import MacBook15Pro from './components/MacBookPro15';
function App() {
  return (
    <div className="App">
    <NavBar />
    <Route exact path='/' component={Home}/>
    <Route path='/iphone' component={Iphone}/>
    <Route path='/iPad' component={Ipad}/>
    <Route path='/macbook' component ={Macbook}/>
    <Route  exact path ='/iphone/regular' component={Iphone11}/>
    <Route exact path= '/iphone/pro' component={Iphone11Pro}/>
    <Route exact path='/ipad/pro' component={IpadPro}/>
    <Route exact path='/ipad/air' component={IpadAir}/>
    <Route exact path='/macbook/pro13' component={MacBook13Pro}/>
    <Route exact path='/macbook/pro15' component={MacBook15Pro}/>
    </div>
  );
}

export default App;
