import './App.scss';
import Footer from './components/Footer/Footer.component';
import NavigationBar from './components/NavigationBar/NavigationBar.component'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home'
import Goals from './pages/goals'
import ContactUsPage from './pages/contactus'
import WhereToBuy from './pages/wheretobuy' 

function App() {
  return (
    <Router>
      <NavigationBar/>
      {/* router dom */}
      <Route path='/wheretobuy' component={WhereToBuy}/>
      <Route path='/goals' component={Goals}/>
      <Route path='/contactus' component={ContactUsPage}/>
      <Route exact path="/" component={Home}/>
      {/* end router dom */}
      <Footer/>
    </Router>
  );
}

export default App;
