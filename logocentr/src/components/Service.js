import React from "react"
import { Container, Nav, Tab, Row, Col } from "react-bootstrap"
import Adults from "./ServiceItems/Adults"
import Diagnostics from "./ServiceItems/Diagnostics"
import ForSchool from "./ServiceItems/ForSchool"
import HomeMassage from "./ServiceItems/HomeMassage"
import Individual from "./ServiceItems/Individual"
import Massage from "./ServiceItems/Massage"
import Online from "./ServiceItems/Online"
import Price from "./ServiceItems/Price"
import Semigroup from "./ServiceItems/Semigroup"
import ToHome from "./ServiceItems/ToHome"

const Service = () => {

  

  return (
    <>
    <Container>
      <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="a" >Индивидуальное логопедическое занятие</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="b" >Подгрупповое логопедическое занятие</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="c" >Диагностика и консультация</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="d" >Логопед на дом</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="e" >Логопедический массаж</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="f" >Работа с нарушениями речи у взрослых</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="g" >Подготовка к школе</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="h" >Логопедический массаж на дому</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="i" >Онлайн-занятия с логопедом</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="j" >Цены</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col cm={9}>
            <Tab.Content className="flex-row mt-3 ml=4">
              <Tab.Pane eventKey="a">
                <Individual />
              </Tab.Pane>
              <Tab.Pane eventKey="b">
                <Semigroup />
              </Tab.Pane>
              <Tab.Pane eventKey="c">
                <Diagnostics />
              </Tab.Pane>
              <Tab.Pane eventKey="d">
                <ToHome />
              </Tab.Pane>
              <Tab.Pane eventKey="e">
                <Massage />
              </Tab.Pane>
              <Tab.Pane eventKey="f">
                <Adults />
              </Tab.Pane>
              <Tab.Pane eventKey="g">
                <ForSchool />
              </Tab.Pane>
              <Tab.Pane eventKey="h">
                <HomeMassage />
              </Tab.Pane>
              <Tab.Pane eventKey="i">
                <Online />
              </Tab.Pane>
              <Tab.Pane eventKey="j">
                <Price />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
    </>
  )
}

export default Service