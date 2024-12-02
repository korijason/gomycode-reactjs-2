// src/Player.js

import { Card } from 'react-bootstrap';

// Define default props for the Player component
const defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/150',
};

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }: {
  name: string;
  team: string;
  nationality: string;
  jerseyNumber: number;
  age: number;
  imageUrl: string;
}) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
// Assign default props
Player.defaultProps = defaultProps;

export default Player;
