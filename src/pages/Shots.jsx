import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Shots() {
  const [feed, setFeed] = useState(0);
  useEffect(() => {
    const getInstagramFeed = async () => {
      const fields = process.env.REACT_APP_INSTAGRAM_API_FIELDS;
      const token = process.env.REACT_APP_INSTAGRAM_TOKEN;
      const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setFeed(data.data);
    };

    getInstagramFeed();
  }, []);

  console.log(feed);

  return (
    <Container fluid>
      <Container className="d-flex align-items-center gap-3 flex-wrap">
        {feed &&
          feed.map((post) => {
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
    </Container>
  );
}

export default Shots;
