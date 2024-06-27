import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Shot from "../components/Shot";

function Shots({ feed }) {
  return (
    <motion.div
      key="shos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="my-3">
        <Row className="g-1 px-auto">
          {feed.map((post) => {
            return post.children.data.map((child) => (
              <Col key={child.id} xs={6} sm={6} lg={4} xl={3}>
                <Shot img={child.media_url} />
              </Col>
            ));
          })}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Shots;
