import React, { useState } from 'react';
// import { throttle } from '../../utils';

import styles from './chirper.module.css';

const Chirper = ({ setStatus }) => {
  const [chirp, setChirp] = useState('');
  const handleChirping = e => {
    setChirp(e.target.value);
  }
  // TODO validate chirp length
  
  // TODO implement this
  const submitNotification = async (data) => {
    try {
      const response = await fetch(
        'https://bellbird.joinhandshake-internal.com/push',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ chirp_id: data.id })
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setChirp('');
        setStatus('fetching');
      }
    } catch(err) {
      console.log(err);
    }
  };

  const submitChirp = async () => {
    try {
      const response = await fetch('/api/chirp/post', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: chirp })
    });
      const data = await response.json();
      if (data) {
        // TODO throttle requests to external API 
        setTimeout(() => submitNotification(data), 500);
      }
    } catch(err) {
      console.log(err);
    }
  }
  return(
    <div className={styles.chirperContainer}>
      <input
        className={styles.chirpInput} 
        placeholder="Chirp something" 
        type="text" 
        onChange={handleChirping} 
        value={chirp}
      />
      <button className={styles.chirper} onClick={submitChirp}>Chirp</button>
    </div>
  )
}

export default Chirper;
