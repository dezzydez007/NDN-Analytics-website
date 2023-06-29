import React from 'react';
import Image from 'next/image'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
