import './App.css';
import Persons from './components/Persons';



function App() {
  // return  <div className="App">
  //       {persons.map((person) => {
  //         const {id, firstName, lastName, email, img} = person
  //     return <Person 
  //             id={id} 
  //             firstName={firstName} 
  //             lastName={lastName} 
  //             email={email} 
  //             img={img} 
  //             />
  //      })}
  //   </div>

   return  <div className="App">
       <Persons />
    </div>
}

export default App;
