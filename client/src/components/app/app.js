import { useState, useEffect } from 'react';

import Chirp from '../chirp/chirp';
import Chirper from '../chirper/chirper';
import styles from './app.module.css';

function App() {
  const [chirps, setChirps] = useState([]);
  const [status, setStatus] = useState('fetching');
  useEffect(() => {
    if (status === 'fetching') {
      fetchChirps();
      setStatus('fetched');
    }
  }, [status]);

  const fetchChirps = async() => {
    try {
      const response = await fetch('/api/chirp/get');
      const data = await response.json();
      console.log('data', data)
      setChirps(data);
    } catch (err) {
      console.log('error', err)
    }
  }

  const chirpsFeed = chirps
  .reverse().map(({ id, text, upvotes }, i) => <Chirp key={`Chirp ${i}`} id={id} text={text} setStatus={setStatus} upvotes={upvotes} />)

  return (
    <div className={styles.app}>
      <h1>Chirps</h1>
      {status === 'fetched' &&
        <article className={styles.chirpContainer}>
          <ul className={styles.chirps}>
            {chirps.length ? chirpsFeed : <span>No Chirps Yet!</span>}
          </ul>
        </article>
      }
      <Chirper setStatus={setStatus} />
    </div>
  );
}

export default App;
