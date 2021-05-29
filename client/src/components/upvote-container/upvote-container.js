import React from 'react';

import Upvoter from '../upvoter/upvoter';
import styles from './upvote-container.module.css';

const UpvoteContainer = ({ id, setStatus, upvotes }) => {
  return(
    <div className={styles.upvoteContainer}>
      <span>{upvotes}</span>
      <Upvoter id={id} setStatus={setStatus} />
    </div>
  )
}
export default UpvoteContainer;