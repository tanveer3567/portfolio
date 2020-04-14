import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import './App.css';
import Footer from './components/footer';
import ProjectsPage from './pages/projectsPage';
import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Tanveer Ahmed Shaik',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'Contact', path: '/contact'}],
      home: {
        title: 'Software Engineer',
        subtitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      projects: {
        title: 'My projects',
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
          <Navbar className="border-bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Tanveer Ahmed Shaik</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={()=><HomePage title={this.state.projects.title}></HomePage>} />
          <Route path="/projects" exact render={()=><ProjectsPage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} ></ProjectsPage>}  />
          <Route path="/contact" exact render={()=><ContactPage title={this.state.contact.title}></ContactPage>} />
          <Footer />
        </Container>
      </Router>
      );
  }
}

export default App;
