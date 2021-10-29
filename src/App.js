import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Market from './pages/Market';
import Collector from './pages/Collector';
import Artists from './pages/Artists';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/market" component={Wallet} />
          <Route path="/artist" component={Artists} />
          <Route path="/collector" component={Collector} />
          <Route path="/wallet" component={Market} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
