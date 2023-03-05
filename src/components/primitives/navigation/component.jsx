import React from 'react';
import * as styles from './styles';
import { Button } from '../buttons';
import { ButtonColorEnum } from 'common/enums';
import { useNavigate } from 'react-router';
import { useLogout } from 'hooks/useLogout';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {

    const navigate = useNavigate();
    const _logout = useLogout();
    const { auth } = useAuth()

    const main = () => {
        navigate('/')
    }

    const projects = () => {
        navigate('/projects')
    }

    const coaches = () => {
        navigate('/coaches')
    }

    const members = () => {
        navigate('/members')
    }

    const vacancies = () => {
        navigate('/vacancies')
    }

    const about = () => {
        navigate('/about-us')
    }

    const logout = () => {
        _logout();
    }

    return (
        <nav css={styles.wrapper}>
            <h5>Community</h5>
            <div css={styles.content}>
                <div css={styles.user}>
                    {auth.firstName}
                    <div css={styles.role}>
                        {auth.roles[0]}
                    </div>
                </div>
                <div css={styles.navigation}>
                    <Button text='Main page' onClick={main} color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                    <Button text='All projects' onClick={projects} color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                    <Button text='All coaches' onClick={coaches} color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                    <Button text='All members' onClick={members} color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                    <Button text='All vacancies' onClick={vacancies} color={ButtonColorEnum.LILAC} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                </div>

                <div css={styles.additional}>
                    <Button text='Support' color={ButtonColorEnum.LIGHT} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                    <Button text='About Community' onClick={about} color={ButtonColorEnum.LIGHT} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                    <Button text='Exit' onClick={logout} color={ButtonColorEnum.LIGHT} stretched={true} extraStyles={styles.extra} whileHover={{scale: 1.1}} />
                </div>
            </div>
        </nav>
    )
}

export { Navigation };