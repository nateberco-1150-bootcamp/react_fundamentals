import './App.css';
import Header from './components/Header'
import Aboutme from './components/challenges/day01/Aboutme'
import Footer from './components/challenges/day01/Footer'
import Home from './components/challenges/day01/Home'

function App() { //this is a root component
                // parent function
  const name = 'Nate' //JS above return statement can be injected into JSX using {}

  return (
    <div className="App">
      <Home />
      <Header /> { /* this is how you mount a component */ }
      <Aboutme /> { /* child function */ }
      <Footer />

    </div>
    
  );
}

export default App;
