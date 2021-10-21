import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl
} from "react-bootstrap"


const Header = (props) => {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://cdn.discordapp.com/attachments/887602256139128872/900730135110627328/logo.png"
              height="80"
              width="80"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Главная</Nav.Link>
              <Nav.Link href="#action2">Форум</Nav.Link>
              <NavDropdown title="О нас" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Контакты</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Сотрудники</NavDropdown.Item>
                <NavDropdown.Item href="#action1">Галерея</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Поиск</Button>
            </Form>
            <Button variant="outline-success">Войти</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Header

