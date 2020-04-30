import React from 'react';
import { Card } from 'react-bootstrap';

const Image = ({ picture, name }) => {
  return (
    <>
      <Card className="mx-auto mb-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>Classified as: {name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Image;
