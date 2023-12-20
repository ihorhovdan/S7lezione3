import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";

function SingleBook(props) {
    const {libro} = props;
    return (
        <Col key={libro.asin} sm={12} md={4} lg={3}>
            <Card>
                <Card.Img variant="top" src={libro.img} />
                <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>
                        <p>Categoria:{libro.category}</p>
                        <p>Prezzo:{libro.price}€</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBook