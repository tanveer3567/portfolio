import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import './App.css';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Tanveer Ahmed Shaik',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}],
      home: {
        title: 'Software Engineer',
        subtitle: 'Projects that make a differnce',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Let\'s connect',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Tanveer Ahmed Shaik</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={()=><HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} ></HomePage>} />
          <Route path="/about" exact render={()=><AboutPage title={this.state.about.title}></AboutPage>}></Route>
          <Route path="/contact" exact render={()=><ContactPage title={this.state.contact.title}></ContactPage>}></Route>
          <Footer />
        </Container>
      </Router>
      );
  }
}

export default App;
