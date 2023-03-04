import React from 'react';
import * as styles from './styles';
import { Button } from '../buttons';
import { ButtonColorEnum } from 'common/enums';

const Navigation = ({user}) => {
  return (
    <nav css={styles.wrapper}>
        <h5>Community</h5>
        <div css={styles.content}>
            <div css={styles.user}>
                {user.name}
                <div css={styles.role}>
                    {user.role}
                </div>
            </div>
            <div css={styles.navigation}>
                <Button text='Main page' color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                <Button text='All projects' color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                <Button text='All coaches' color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                <Button text='All members' color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                <Button text='All vacancies' color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
            </div>

            <div css={styles.additional}>
                <Button text='Support' color={ButtonColorEnum.LIGHT} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                <Button text='About Community' color={ButtonColorEnum.LIGHT} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                <Button text='Exit' color={ButtonColorEnum.LIGHT} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
            </div>
        </div>
    </nav>
  )
}

export { Navigation };