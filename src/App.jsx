import React from 'react';
import Header from "./Components/Header";
import StarField from "./Components/StarField";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import Calculator from "./Components/Calculator.jsx";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <StarField/>
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        <h1 className={"example-wrapper"}>Лучшая webcam студия</h1>
                        <h3 className={"example-wrapper"}>Начни зарабатывать сегодня с гибким и удобным графиком и
                            еженедельными выплатами.</h3>
                        <Button className={"send-request"} variant="primary">Оставить заявку</Button>
                    </Col>
                    <Col md={4}>
                        <Card className={"mb-2 card-main"}>
                            <Card.Body>
                                <Card.Title>О нас</Card.Title>
                                <Card.Text>
                                    Мы работаем городе в Казань.
                                    <br/>
                                    Каждая наша локация индивидуальная и не похожа на другую, наш технический персонал,
                                    ориентирован на организацию высококачественной онлайн трансляции.
                                    <br/>
                                    Мы берём на себя координацию процесса, обучение, помощь в создании индивидуального
                                    образа, техническую поддержку и раскрутку твоего аккаунта.
                                    <br/>
                                    Тебе нужно только приходить и общаться. Наши сотрудники уже заработали свой первый
                                    миллион!
                                    <br/>
                                    Хочешь также заработать миллион?
                                    Тогда ждем тебя на собеседование!
                                </Card.Text>
                                <Button variant="success">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Calculator/>
                    </Col>
                </Row>
            </Container>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <div>13241234123</div>
            <footer className="bg-dark text-light text-center p-3 mt-5">
                <Container>
                    <p>&copy; 2024 Magic Studio. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
};

export default App;