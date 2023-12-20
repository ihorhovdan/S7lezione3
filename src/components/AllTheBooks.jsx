import React from "react";
import book from '../data/books.json'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap"

function AllTheBooks() {
    return (
        <Container>
            <Row>
                {book.fantasy.map((book) => {
                    return (
                        <Col xs={12} sm={6} md={3} key={book.asin}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={book.img}
                                />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.price}</Card.Text>
                                    <Card.Text>Categoria: {book.category}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>

    );
}

export default AllTheBooks;