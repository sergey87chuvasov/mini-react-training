import './App.css';
import Wrapper from './components/Wrapper';


function App() {
  return <div className="App">
    <Wrapper color="green">
      <h2>TEXT inside the Wrapper</h2>
      <button>Click Me</button>
    </Wrapper>
    <Wrapper color="red">
      <h2>Another TEXT inside the Wrapper!!!! </h2>
      <button>Click Me!!!</button>
      <p>Some description</p>
      <input type="text" placeholder="Enter value"/>
    </Wrapper>
  </div>
 
}

export default App;
