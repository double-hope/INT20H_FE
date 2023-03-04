import React from 'react';
import * as styles from './styles';
import { Background, Button } from 'components/primitives';
import { useNavigate } from 'react-router';

const Welcome = () => {
    const navigate = useNavigate();

    const start = () => {
        navigate('/login');
    }

    return (
        <div css={styles.wrapper}>
            <div css={styles.start}>
                <div css={styles.text}>
                    <h1>Community which care about your growth!</h1>
                    <Button text='Get started!' onClick={start} stretched={true} />
                    <p>Find your team to implement  first project and start your career!</p>
                </div>    
            </div>
            <div css={styles.background}>
                <Background />
            </div>
        </div>
    )
}

export { Welcome };