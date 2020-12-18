import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const TopHeadline = () => {
    const [check, setCheck] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-18&sortBy=publishedAt&apiKey=d3900ba57fb541ddb735538e12d7f238')
        .then(res => res.json())
        .then(data => setCheck(data.articles))
    }, [])
    return (
        <div>
            {
                check.map(article => {
                    return(
                        <Card>
                            <Card.Header as="h5">{article.author}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                        <Card.Text>{article.description}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                        </Card>
                        
                    )
                })
            }
        </div>
    );
};

export default TopHeadline;