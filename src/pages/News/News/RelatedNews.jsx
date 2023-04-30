import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function RelatedNews({ relatedNews }) {
  console.log(relatedNews);

  return (
    <div>
      <h3>Related News</h3>
      <div className="row">
        {relatedNews &&
          relatedNews.map((news) => (
            <Col md={4} key={news._id}>
              <Link to={`/news/${news._id}`}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={news.thumbnail_url} />
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
      </div>
    </div>
  );
}

export default RelatedNews;
