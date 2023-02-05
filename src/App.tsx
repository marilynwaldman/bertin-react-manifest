
import './App.scss';
import styled from 'styled-components'
import MapWidget from './widgets/MapWidget/MapWidget';



//import * as bertin from 'bertin'
const bertin = require('bertin');

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

function App() {
  
  return (
    <Container>
      <MapWidget/>
    </Container>
       
  );
}

export default App;
