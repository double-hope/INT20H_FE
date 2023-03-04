import React, { useState } from 'react';
import * as styles from './styles';
import { Background, Button } from 'components/primitives';
import { useNavigate } from 'react-router';
import { ButtonShapeEnum } from 'common/enums';
import { motion } from 'framer-motion';

const Welcome = () => {

    const navigate = useNavigate();
    const [move, setMove] = useState(false)

    const variants = {
        move: { x: '-100%' },
        unmove: { x: 0 },
    }

    const start = () => {
        setMove(true);
        setTimeout(() => {
            navigate('/login');
        }, 200);
    }

    return (
        <div css={styles.wrapper}>
            <motion.div css={styles.start} animate={move ? "move" : "unmove"} variants={variants}>
                <h5>JumpIn</h5>
                <div css={styles.text}>
                    <h1>Community which care about your growth!</h1>
                    <Button text='Get started!' onClick={start} stretched={true} shape={ButtonShapeEnum.RECTANGLE} />
                    <p>Find your team to implement  first project and start your career!</p>
                </div>    
            </motion.div>
            <div css={styles.background}>
                <Background animate={move ? "move" : "unmove"} variants={variants} />
            </div>
        </div>
    )
}

export { Welcome };