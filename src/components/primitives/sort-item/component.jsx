import React from 'react';
import * as styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SortItem = ({text, checked}) => {
  return (
    <div css={styles.category}>
        {text}
        <span span-checked={`${checked}`}>
            <FontAwesomeIcon icon={faCheck}/>
        </span>  
    </div>
  )
}

export { SortItem };