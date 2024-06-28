import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm";
import myPhoto from "../img/myPhoto.jpg";

function Contact() {
  return (
    <motion.div className="my-3">
      <Container>
        <Row className="g-3 gx-sm-4 contact">
          <Col xs={12} sm={6} className="contact__side">
            <div className="overflow-hidden rounded-3">
              <img src={myPhoto} alt="author" className="img-fluid" />
            </div>
          </Col>
          <Col className="contact__side">
            <h3 className="contact__heading text-white display-5 mb-3">
              Send me a message
            </h3>
            <ContactForm />

            <ul className="list-unstyled text-white mt-4">
              <li className="py-1">
                Instagram:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/_itwasunavailable/"
                  className="text-secondary text-decoration-none"
                >
                  _itwasunavailable
                </a>
              </li>
              <li className="py-1">
                Telegram:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/itwasunavailable"
                  className="text-secondary text-decoration-none"
                >
                  itwasunavailable
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;
