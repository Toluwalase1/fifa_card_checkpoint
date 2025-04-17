import PlayerCard from "./components/PlayerCard"
import players from "./data/players"
import Container from "react-bootstrap/Container"

function App() {
  

  return (
    <>
    <Container className="d-flex mt-5">
    
    {
      players.map((baller, index) => (
        <PlayerCard key={index} player={baller}></PlayerCard>
      ))
    }

    </Container>
    
    </>
  )
}

export default App
