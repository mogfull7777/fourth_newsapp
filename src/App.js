import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const App = () => {

  const [news, setNews] = useState([]);

    const getNews = async ()=> {
      try {
          const add = "https://newsapi.org/v2/everything?q=apple&from=2023-04-16&to=2023-04-16&sortBy=popularity&apiKey=4d991139f4ef4bcc8dc6cff0c1b0a93d";

          const res = await axios.get(add)
          console.log("aaaaaaa", res.data.articles)
          setNews(res.data.articles)

      } catch (err) {
          console.log(err);
      }
    };

        useEffect(() => {
            getNews()
        }, [])

    return (
        <Container>
            <Row>
                {news && news.map(item => (
                    <Col className={'mt-5'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.urlToImage} />
                            <Card.Body>
                                <Card.Title>{`${item.title.slice(0, 30)}...`}</Card.Title>
                                <Card.Text>
                                    {`${item.content.slice(0, 150)}...`}
                                </Card.Text>
                                <Card.Text>
                                    {`발행일 : ${item.publishedAt}`}
                                </Card.Text>
                                <Button variant="primary" href={item.url}>Go News</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default App;