import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PlayerCard = ({player}) => {
    return ( 
        <Card style={{ width: '18rem' }} className="mx-2">
      <Card.Img variant="top" src={player.image} />
      <Card.Body className='d-flex flex-column align-items-center justify-content-center bg-black bg-gradient text-white rounded-1'>
        <Card.Title>
            {player.name} {player.jerseyNumber}

            </Card.Title>
        <Card.Text>
            {player.team} | {player.nationality} | {player.age}
            {/* <br></br> */}
           
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
     );
}
 
export default PlayerCard;