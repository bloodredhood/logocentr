import React from "react";
import { Container, Nav, Tab, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { YMaps, Map, Placemark } from "react-yandex-maps"

const mapData = {
    center: [53.901191, 27.550729],
    zoom: 12,
};
const mapData1 = {
    center: [53.932415, 27.600279],
    zoom: 17,
};
const mapData2 = {
    center: [53.880342, 27.485654],
    zoom: 17,
};
const mapData3 = {
    center: [53.911688, 27.443739],
    zoom: 17,
};
const mapData4 = {
    center: [53.879870, 27.605858],
    zoom: 17,
};

const coordinates = [
    [
        53.932415,
        27.600279
    ],
    [
        53.880342,
        27.485654
    ],
    [
        53.911688,
        27.443739
    ],
    [
        53.879870,
        27.605858
    ]
];


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
                                <Nav.Link eventKey="first" >Связаться с нами</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" >Советский район (Якуба Коласа 55/1)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Московский район (Янки Брыля 30)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" >Фрунзенский район (Лещинского 31/1)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" >Партизанский район (пр.Партизанский 45)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col cm={9}>
                        <Tab.Content className="flex-row mt-3 ml=4">
                            <Tab.Pane eventKey="first">
                                <YMaps>
                                    <Map
                                        defaultState={mapData}
                                        width="950px"
                                        height="600px"
                                    >
                                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                    </Map>
                                </YMaps>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <YMaps>
                                    <Map
                                        defaultState={mapData1}
                                        width="950px"
                                        height="600px"
                                    >
                                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                    </Map>
                                </YMaps>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <YMaps>
                                    <Map
                                        defaultState={mapData2}
                                        width="950px"
                                        height="600px"
                                    >
                                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                    </Map>
                                </YMaps>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <YMaps>
                                    <Map
                                        defaultState={mapData3}
                                        width="950px"
                                        height="600px"
                                    >
                                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                    </Map>
                                </YMaps>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <YMaps>
                                    <Map
                                        defaultState={mapData4}
                                        width="950px"
                                        height="600px"
                                    >
                                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                    </Map>
                                </YMaps>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Contacts