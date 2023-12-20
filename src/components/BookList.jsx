import React from 'react';
import { Row, Col, Container, Form, } from "react-bootstrap";
import SingleBook from './SingleBook';

class BookList extends React.Component {
    
    render() {
        const {books} = this.props
        return(
            <Container>
                <Row>
                    {books.map((book) => {
                        return(
                            <SingleBook libro ={book} />
                        )
                    })}
                </Row>
            </Container>
        )
    }


} 

export default BookList
