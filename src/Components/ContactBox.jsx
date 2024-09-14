import React, {Component} from 'react';
import {Container, Form} from "react-bootstrap";

class ContactBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }
    
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId={"formNameBasic"}>
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type={"name"}/>
                        <Form.Text>Ваше имя</Form.Text>
                    </Form.Group>
                    <Form.Group controlId={"formPhoneBasic"}>
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type={"phone"} placeholder={"8 888 888 8888"}/>
                        <Form.Text>Оставьте номер телефона для оперативного подтверждения информации</Form.Text>
                    </Form.Group>
                    <Form.Group controlId={"formAgeBasic"}>
                        <Form.Label>Возраст</Form.Label>
                        <Form.Control type={"age"} placeholder={"18"}/>
                        <Form.Text>Ваш возраст должен быть не менее 18 лет</Form.Text>
                    </Form.Group>
                    <Form.Group controlId={"formTownBasic"}>
                        <Form.Label>Город</Form.Label>
                        <Form.Select>
                            <option value="1">Казань</option>
                            <option value="2">Набережные Челны</option>
                            <option value="3">Ульяновск</option>
                            <option value="3">Москва</option>
                            <option value="3">Сочи</option>
                        </Form.Select>
                        <Form.Text>Выберите удобный для вас город</Form.Text>
                    </Form.Group>
                    <Form.Group controlId={"formJobOptionBasic"}>
                        <Form.Label>Вакансия</Form.Label>
                        <Form.Select>
                            <option value="1">Модель</option>
                            <option value="2">Оператор</option>
                        </Form.Select>
                        <Form.Text>Выберите интересующую вас вакасию</Form.Text>
                    </Form.Group>
                    <img src={this.state.image} height={500} width={500}/>
                    <h1>Select Image</h1>
                    <input type="file" name="myImage" onChange={this.onImageChange}/>
                </Form>
            </Container>
        );
    }
}

export default ContactBox;