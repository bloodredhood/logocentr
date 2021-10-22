import React from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap"

const Contacts = (props) => {
    return (
        <Container>
            <h1 className="text-center">Детский развивающий логопедический центр
                «Я говорю»</h1>
            <Row>
                <Col className="text-center">Режим работы:Пн.-Пт.: 9.00 - 20.00   Сб.: 9.00 - 16.00   Вс.: 9.00 - 16.00</Col>
                <Col className="text-center">Телефоны для контактов: +375 (44) 780-81-82, А1+ Viber+telegram, +375 (29) 257-07-37, МТС, +375 (17) 237-54-11, гор.</Col>
            </Row>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" >Связаться с нами</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="first" >Советский район (Якуба Коласа 55/1)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" >Московский район (Янки Брыля 30)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Фрунзенский район (Лещинского 31/1)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" >Партизанский район (пр.Партизанский 45)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col cm={9}>

                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Contacts