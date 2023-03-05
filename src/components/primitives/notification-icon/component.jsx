import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as styles from './styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const NotificationIcon = () => {
    
    const navigate = useNavigate();

    const notify = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/my-notifications')
        }, 100);
    }

    return (
        <motion.div css={styles.wrapper} whileTap={{scale: [1.1, 1]}} onClick={notify} >
            <FontAwesomeIcon icon={faBell} />
            <div css={styles.notification} />
        </motion.div>
    )
}

export { NotificationIcon };