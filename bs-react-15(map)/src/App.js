import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'Click Me',
  'Click Me Hey',
  'Click Me Boy',
  'Click Good',
  'Hey',
  'Press Me!',
];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <Counter count={count} />
      {/* <Button onClick={incrementCount} text={texts[0]} />
      <Button onClick={incrementCount} text={texts[1]} />
      <Button onClick={incrementCount} text={texts[2]} />
      <Button onClick={incrementCount} text={texts[3]} /> */}
      {/* with map  */}
      {texts.map((text, index) => {
        console.log(index);
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}

      {/* под капотом */}
      {/* {[
        <Button onClick={incrementCount} text={texts[0]} />,
        <Button onClick={incrementCount} text={texts[1]} />,
        <Button onClick={incrementCount} text={texts[2]} />,
      ]}, */}
    </div>
  );
}

export default App;
