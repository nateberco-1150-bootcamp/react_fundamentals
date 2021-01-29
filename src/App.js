import './App.css';
import NameProp from './components/NameProp'
import Contacts from './components/challenges/day02/Contacts'
import State from './components/State'


function App() { //this is a root component
                // parent function
  const profile = {name: "Rubbie", age: "69", school: "The Dentist Academy", graduationYear: "1969"} //for method #1
  return (

    <div className="App">
      <NameProp name="Nate"/>;
      <Contacts name="Natey" age="25" school="IU" graduationYear="2019"/> {/* method #1 */}
      <Contacts {...profile}/> {/* method #2 */}
      <p>--------------------------------------------------</p>
      <State />
      
      
      
      
     

    </div>
    
  );
}

export default App;
