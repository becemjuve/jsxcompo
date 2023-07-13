import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Image';
import Name from './Name';
import Description from './Description';
import Price from './Price';

function Carrd() {
  return (
    <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title>
          <Name/>
          </Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Card.Text>
          <Price/>
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Carrd;