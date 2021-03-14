import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';


export default class Cards extends Component {
    state = {
        card: [
            {
                src: "https://infopro54.ru/wp-content/uploads/2019/10/hero_m6_1800x900.jpg",
                title: "Mazda 6",
                text: "Найкрасивіша машина від компанії Mazda)",
                buttonText: "Про машину",
                alt: "mazda",
                id: 1

            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/2018_Mazda_CX-5_Sport_NAV_Diesel_Automatic_2.2.jpg",
                title: "Mazda cx-5",
                text: "Найкрутіша машина від компанії Mazda)",
                buttonText: "Про машину",
                alt: "mazda",
                id: 2

            },
            {
                src: "https://i.ytimg.com/vi/hyJ2thDvKhI/maxresdefault.jpg",
                title: "Mazda cx-7",
                text: "Крута тачка",
                buttonText: "Про машину",
                alt: "mazda",
                id: 3

            },
            {
                src: "https://aczpix.b-cdn.net/wp-content/uploads/2020/08/foto-cx-9-2021-upd_01.jpg",
                title: "Mazda cx-9",
                text: "Найбільша машина від компанії Mazda)",
                buttonText: "Про машину",
                alt: "mazda",
                id: 4

            }
        ]
    }

    render() {
        const { card } = this.state;
        const elements = card.map(item => {
            const { id, src, alt, title, text, buttonText } = item;
            return (
                <Card key={id}>
                    <Card.Img
                        src={src}
                        variant="top"
                        alt={alt}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Button variant="primary">{buttonText}</Button>
                    </Card.Body>
                </Card>
            )
        })

        return (
            <>
                <Container>
                    <h2 className="text-center m-5">Mazda</h2>
                    <CardDeck>
                        {elements}
                    </CardDeck>
                </Container>
            </>
        );
    }
}