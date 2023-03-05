import React from 'react';
import * as styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Card = ({name, icon, ...props}) => {
  return (
    <motion.div css={styles.wrapper} {...props}>
        <div css={styles.content}>
            {name}
            <div css={styles.icons}>
                <FontAwesomeIcon icon={icon} />
                <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
        </div>
    </motion.div>
  )
}

export { Card };