import React from 'react';
import * as styles from './styles';
import { Button, MemberCard, Navigation, NotificationIcon, ResetButton } from 'components/primitives';
import { ReactComponent as Icon } from 'assets/svgs/standing.svg'
import { ButtonColorEnum } from 'common/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

const MyTeam = () => {

    const members = [
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        },
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        },
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        },
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        },
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        },
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        },
        {
            name: 'Name1',
            resume: 'https://www.youtube.com/'
        }
    ]

    return (
        <div>
            <Navigation />
            <NotificationIcon />
            <div css={styles.wrapper}>
                <div css={styles.content}>
                    <div css={styles.zIndex}>
                        <h2>My team</h2>
                        <div css={styles.myTeamForm}>
                            <div css={styles.teammate}>
                                <h3>Khmelnytsky Bohdan</h3>
                                <p>Owner</p>
                            </div>
                            <div css={styles.teammate}>
                                <h3>Khmelnytsky Bohdan</h3>
                                <p>Manager</p>
                                <div css={styles.icons}>
                                    <ResetButton><FontAwesomeIcon icon={faPencil} /></ResetButton>
                                    <ResetButton><FontAwesomeIcon icon={faXmark} /></ResetButton>
                                </div>
                                
                            </div>
                            <div css={styles.teammate}>
                                <h3>Khmelnytsky Bohdan</h3>
                                <p>Manager</p>
                                <div css={styles.icons}>
                                <ResetButton><FontAwesomeIcon icon={faPencil} /></ResetButton>
                                    <ResetButton><FontAwesomeIcon icon={faXmark} /></ResetButton>
                                </div>
                            </div>
                            <div css={styles.teammate}>
                                <h3>Khmelnytsky Bohdan</h3>
                                <p>Manager</p>
                                <div css={styles.icons}>
                                    <ResetButton><FontAwesomeIcon icon={faPencil} /></ResetButton>
                                    <ResetButton><FontAwesomeIcon icon={faXmark} /></ResetButton>
                                </div>
                            </div>
                            <Button text='Add new member' color={ButtonColorEnum.LIGHT} />
                            <Button text='Remove member' color={ButtonColorEnum.LIGHT} />
                        </div>
                        <h2>Application in my team</h2>
                        <div css={styles.membersContainer}>
                            {members.map((member, i) => <MemberCard name={member.name} resume={member.resume} />)}
                        </div>
                    </div>
                    <Icon css={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export { MyTeam };