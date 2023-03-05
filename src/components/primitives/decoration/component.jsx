import React from 'react';
import * as styles from './styles';
import { motion } from 'framer-motion';

const student1 = require('assets/images/student1.jpg');
const student2 = require('assets/images/student2.jpg');

const Decoration = ({animate, variants}) => {
    return (
    <motion.div css={styles.background} animate={animate} variants={variants}>
        <div css={styles.blue} rounded-div={['rTop']} />
        <div css={styles.lilac} rounded-div={['lTop', 'lBottom']} />
        <div css={styles.image(student1)} rounded-div={['rBottom']} />
        <div css={styles.white} rounded-div={['lTop']} />
        <div css={styles.image(student2)} rounded-div={['lBottom']} />
        <div css={styles.blue} rounded-div={['rTop', 'lBottom']} />
    </motion.div>
    );
}

export { Decoration };