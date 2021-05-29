import React from 'react';

import UpvoteContainer from '../upvote-container/upvote-container';
import styles from './chirp.module.css';

const Chirp = ({ id, text, setStatus, upvotes }) => {
  return(
    <li className={styles.chirp}>
      <span className={styles.chirpId}>{id}</span> 
      <span className={styles.chirpText}>{text.toUpperCase()}</span>
      <UpvoteContainer id={id} setStatus={setStatus} upvotes={upvotes} />
    </li>
  )
}

export default Chirp;
