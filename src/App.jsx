import React from 'react';
import Header from "./Components/Header";
import StarField from "./Components/StarField";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

const App = () => {
    return (
        <div className="wrapper">
            <StarField/>
            <Header/>
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        <h1>Лучшая webcam студия</h1>
                        <p>Начни зарабатывать сегодня с гибким и удобным графиком и еженедельными выплатами.</p>
                        <Button variant="primary">Join Now</Button>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Relocation Assistance</Card.Title>
                                <Card.Text>
                                    <p>Мы работаем в нескольких городах, а именно в Казани, Ульяновске и Москве.</p>

                                    <p>Каждая наша локация индивидуальная и не похожа на другую, наш технический персонал, ориентирован на организацию высококачественной онлайн трансляции.</p>

                                    <p>Мы берём на себя координацию процесса, обучение, помощь в создании индивидуального образа, техническую поддержку и раскрутку твоего аккаунта.</p>

                                    <p>Тебе нужно только приходить и общаться. Наши сотрудники уже заработали свой первый миллион!</p>

                                    <p>
                                        Хочешь также заработать миллион?
                                        Тогда ждем тебя на собеседование!
                                    </p>
                                </Card.Text>
                                <Button variant="success">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <footer className="bg-dark text-light text-center p-3 mt-5">
              <Container>
                  <p>&copy; 2024 Magic Studio. All rights reserved.</p>
              </Container>
            </footer>
        </div>
    );
};

export default App;