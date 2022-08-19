import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="PIG" age={55} hasPet/>
      <PetInfo animal="cat" age={5} hasPet={true}/>
      <PetInfo animal="dog" age={4} hasPet={false} />
    </div>
  );
}

export default App;
