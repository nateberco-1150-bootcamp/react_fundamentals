import './App.css';
import Header from './components/Header'
import Aboutme from './components/challenges/day01/Aboutme'
import Footer from './components/challenges/day01/Footer'
import Home from './components/challenges/day01/Home'
import ChuckNorrisJoke from './components/challenges/day04/ChuckNorris';
// import MortyParent from './components/Morty/MortyParent';


function App() { //this is a root component


  return (
    <div>
      {/* <MortyParent/> */}
    <ChuckNorrisJoke/>
    </div>
    
  );
}

export default App;
