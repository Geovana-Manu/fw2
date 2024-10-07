import Footer from "./modulos/footer";
import Navbar from "./modulos/navbar";
import {Container, Row, Col} from 'react-bootstrap';

export default function Index() {
  return <div>
    <Navbar />
    <h2>Bem Vindos</h2>
    <Container>
      <Row>
        <Col className="bg-primary">1 of 2</Col>
        <Col className="bg-danger">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-warning">1 of 3</Col>
        <Col className="bg-success">2 of 3</Col>
        <Col className="bg-danger-subtle">3 of 3</Col>
      </Row>
    </Container>
    <Footer />
  </div>;
}