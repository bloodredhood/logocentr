import React from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap"



const Employees = (props) => {
  return (
    <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
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
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Администрация</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col cm={9}>
                            <Tab.Content className="flex-row mt-3 ml=4">
                                <Tab.Pane eventKey="first">
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%209.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%2010.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/anas.jpg"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/yy.jpg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%206.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%208.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/jp.jpg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%202.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/%204.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/phocagallery/%205.png"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%201.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%202.png"/>
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/-_11_.jpeg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img width="900" alt="" src="http://logocentr.by/images/sampledata/%202.png"/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
  )
}

export default Employees