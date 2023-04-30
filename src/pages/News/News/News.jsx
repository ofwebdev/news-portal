import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loading from "../../../component/loading/Loading";
// import RelatedNews from "./RelatedNews";

function News() {
  // const [relatedNews, setRelatedNews] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const info = useLoaderData();

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
  } = info;

  // useEffect(() => {
  //   // Call the getRelatedNews method to get an array of related news
  //   const related = getRelatedNews(category_id);
  //   setRelatedNews(related);
  // }, [category_id]);

  // // A method to filter the news data and return an array of related news
  // const getRelatedNews = (categoryId) => {
  //   const allNews = JSON.parse(localStorage.getItem("newsData"));
  //   const related = allNews.filter((news) => news.category_id === categoryId);
  //   return related.filter((news) => news._id !== _id);
  // };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h1>{title}</h1>
          <img src={image_url} alt={title} style={{ width: "100%" }} />
          <p>{details}</p>

          <Link to={`/category/${category_id}`}>
            <Button variant="danger">All news in this category</Button>
          </Link>
        </Col>
      </Row>

      {/* Render the related news */}
      {/* {relatedNews.length > 0 && <RelatedNews relatedNews={relatedNews} />} */}
    </Container>
  );
}

export default News;
