import React from 'react';
import { Col, Card } from 'react-bootstrap';

function ProjectCard({ title, description }) {
  return (
    <Col md={6} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
