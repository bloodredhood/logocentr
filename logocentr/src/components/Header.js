import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./Home"
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl
} from "react-bootstrap"

import Employees from "./Emloyees"
import Contacts from "./Contacts"
import Gallery from "./Gallery"



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
              <Nav.Link href="/">Главная</Nav.Link>
              <NavDropdown title="О нас" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/contacts">Контакты</NavDropdown.Item>
                <NavDropdown.Item href="/employees">Сотрудники</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Галерея</NavDropdown.Item>
                <NavDropdown.Item href="/news">Новости</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Форум</Nav.Link>
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
          <Route exact path="/" component={ Home } />
          <Route exact path="/contacts" component={ Contacts } />
          <Route exact path="/gallery" component={ Gallery } />
          <Route exact path="/employees" component={ Employees } />
        </Switch>
      </Router>
    </>
  )
}

export default Header

