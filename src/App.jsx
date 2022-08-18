import Announcement from "./Components/Announcement";
import Home from "./Pages/Home";
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
`

const App = () => {
  return <div>
    <Container>
      <Home />
    </Container>
  </div>;
};

export default App;