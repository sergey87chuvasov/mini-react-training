import './Info.css';

import styles from './Info.module.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from info component</h1>
      <button className='my-button'>Click Me in the Info Component</button>
      <h2>Hello from H2</h2>
    </div>
  );
}

export default Info;
