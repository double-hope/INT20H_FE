import React from 'react';
import * as styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Card = ({name, icon}) => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.content}>
            {name}
            <div css={styles.icons}>
                <FontAwesomeIcon icon={icon} />
                <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
        </div>
    </div>
  )
}

export { Card };