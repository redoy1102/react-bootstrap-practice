import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {

    return (
        <div>
            <Card>
                <Card.Header as="h5">{props.article.title}</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default News;