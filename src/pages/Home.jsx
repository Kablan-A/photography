import mainImg from "../img/photographer.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import routs from "./routs";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { setLinkActive } from "../components/Navigation";
import { motion } from "framer-motion";

function Home({ latestShots }) {
  return (
    <motion.div
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid>
        <Row>
          <Col xs={12} xl={6}>
            <div className="position-relative">
              <img src={mainImg} alt="photographer" className="w-100" />

              <div className="w-50 position-absolute top-50 translate-middle-y">
                <div className="container d-flex">
                  <span className="text-secondary fs-2 fw-lighter text-opacity-25">
                    -
                  </span>
                  <h1 className="text-white fs-2 fw-lighter text-opacity-25">
                    Let's take your photographs to next level
                  </h1>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} xl={6} className="pb-2">
            <div className="d-flex flex-column h-100">
              <article className="col-xl-9 mt-auto mb-5">
                <Card className="border-0 bg-primary">
                  <Card.Body className="p-0">
                    <Card.Title className="text-secondary display-2">
                      Jessie
                    </Card.Title>
                    <Card.Text className="text-white text-opacity-75">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </article>

              <div className="col-xl-9 text-white mb-2 d-flex align-items-center justify-content-between">
                <h3>Latest shots</h3>
                <Link
                  to={routs.portfolio}
                  className="link"
                  onClick={() => setLinkActive(routs.portfolio)}
                >
                  View all &rarr;
                </Link>
              </div>

              <Slider slides={latestShots} />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
