import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Basket from './Components/Basket';
import { AppWrapper } from './Components/Theme';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';

function App() {
  // const [firstname, setFirstname] = useState("Emir")
  // const [lastname, setLastname] = useState("Azaiez")

  return (
    <Router>
      <AppWrapper>
        <Container fluid>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Se connecter</Link>
              </li>
              <li>
                <Link to="/products">Produits</Link>
              </li>
            </ul>
          </nav>

          <Basket></Basket>

          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/products">
              <Row>
                <Products></Products>
              </Row>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Container>
      </AppWrapper>
    </Router>
  );
}

export default App;
