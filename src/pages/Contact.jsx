import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <motion.div className="my-3">
      <Container>
        <Row className="g-2">
          <Col sm={6}>
            <h3>Start receiving offers</h3>
            <Form className="my-auto">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="example@gmail.com"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <hr className="border-1 border-secondary" />
          <Col>
            <div className="d-flex align-items-center justify-content-between"></div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;
