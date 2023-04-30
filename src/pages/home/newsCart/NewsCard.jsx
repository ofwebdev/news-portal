import React, { useState, useEffect } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import Loading from "../../../component/loading/Loading";
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const shareUrl = "https://example.com/news/" + news._id;
  const shareTitle = news.title;

  const {
    _id,
    author,
    category_id,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
    others_info,
  } = news;

  const toggleFullDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card className="mb-3">
      <div className="row g-0">
        <div className="col-md-12">
          <Link to={`/news/${_id}`}>
            <Card.Img variant="top" src={image_url} style={{ width: "100%" }} />
          </Link>
        </div>
        <div className="col-md-12">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>{details}</Card.Text> */}

            {showFullDetails ? (
              <Card.Text>{news.details}</Card.Text>
            ) : (
              <Card.Text style={{ marginBottom: 0 }}>
                {news.details.substring(0, 100)}...
              </Card.Text>
            )}
            <Button
              variant="link"
              className="btn btn-link"
              onClick={toggleFullDetails}
            >
              {showFullDetails ? "See less" : "See more"}
            </Button>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {/* <Badge bg="primary">{category_id}</Badge> */}
                {others_info.is_trending && (
                  <Badge bg="warning" className="ms-2 d-none d-md-block">
                    Trending
                  </Badge>
                )}
                {others_info.is_todays_pick && (
                  <Badge bg="success" className="ms-2">
                    Today's Pick
                  </Badge>
                )}
              </div>
              <div>
                <small className="text-muted me-2">
                  {author.published_date}
                </small>
                <img
                  src={author.img}
                  alt={author.name}
                  className="rounded-circle"
                  width={30}
                  height={30}
                />
                <span className="ms-2">{author.name}</span>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
      <Card.Footer>
        <div className="d-flex justify-content-between my-4">
          <div>
            <small className="text-muted">{total_view} views</small>
            <Badge bg="secondary" className="ms-2">
              {rating.badge}
            </Badge>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Facebook share button */}
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FaFacebook size={24} />
            </FacebookShareButton>

            {/* Twitter share button */}
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <FaTwitter size={24} />
            </TwitterShareButton>

            {/* LinkedIn share button */}
            <LinkedinShareButton url={shareUrl} title={shareTitle}>
              <FaLinkedin size={24} />
            </LinkedinShareButton>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default NewsCard;
