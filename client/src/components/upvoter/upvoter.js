import React from 'react';

import styles from './upvoter.module.css';

const Upvoter = ({ id, setStatus }) => {
  const handleUpvoter = async () => {
    const response = await fetch(
      `/api/chirp/upvote/${id}`,
      {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: null
      }
    );
    const data = await response.json();
    if (data) {
      setStatus('fetching');
    }
  }
  return(
    <button styles={styles.upvoter} onClick={handleUpvoter}>Upvote</button>
  )
}

export default Upvoter;
