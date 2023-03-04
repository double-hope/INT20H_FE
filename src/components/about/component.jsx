import { Card, Decoration } from 'components/primitives';
import * as styles from './styles';
import React from 'react'
import { faHandHoldingHeart, faMugHot, faSquarePlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.aboutContainer}>
            <Decoration />
            <div css={styles.about}>
                <h1>About us</h1>
                <p>A learning platform is a website that provides users with access to educational resources, 
                    such as courses, tutorials, and assessments. Our platform offers a wide range of content 
                    to help learners improve their knowledge and skills. With interactive features, personalized learning paths, 
                    and a user-friendly interface, our platform makes learning engaging and effective. Join our community today 
                    and start your journey towards success!</p>
            </div>
        </div>
        <div css={styles.forWhom}>
            <h1>For whom?</h1>
            
            <div css={styles.cards}>
                <Card name='Become a participant in one of the projects' icon={faUserPlus} whileHover={{borderRadius: '5px', scale: 1.05}} />
                <Card name='Support the foundation and projects' icon={faMugHot} whileHover={{borderRadius: '5px', scale: 1.05}} />
                <Card name='Become a partner' icon={faSquarePlus} whileHover={{borderRadius: '5px', scale: 1.05}} />
                <Card name='Become a volunteer' icon={faHandHoldingHeart} whileHover={{borderRadius: '5px', scale: 1.05}} />
            </div>
        </div>
    </div>
  )
}

export { About };