import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Shots({ allShots }) {
  console.log(allShots);
  return (
    <Container className="d-flex align-items-center gap-3 flex-wrap">
      {allShots.map((post) => {
        return post.children.data.map((child) => (
          <Card key={child.id}>
            <Card.Img variant="top" src={child.media_url} />
            <Card.Body>
              <Card.Title>Post id: {post.id}</Card.Title>
              <Card.Text>Post media type: {post.media_type}</Card.Text>
            </Card.Body>
          </Card>
        ));
      })}
    </Container>
  );
}

export default Shots;
