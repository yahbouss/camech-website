import { Container } from 'react-bootstrap';
import './App.scss';
import Hero from './components/Hero/Hero.component';
import NavigationBar from './components/NavigationBar/NavigationBar.component'

function App() {
  return (
    <Container fluid>
      <NavigationBar/>
      <Hero/>
    </Container>
  );
}

export default App;
