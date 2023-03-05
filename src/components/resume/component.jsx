import React from 'react';
import * as styles from './styles';
import { Button, Navigation, NotificationIcon, ResetButton, RoundedInput } from 'components/primitives';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Icon } from 'assets/svgs/person.svg'

const Resume = () => {

    const user = {
        name: 'Name',
        role: 'Member'
    }
    return (
        <div>
            <Navigation user={user} />
            <NotificationIcon />
            <div css={styles.wrapper}>
                <div css={styles.content}>
                    <div css={styles.zIndex}>
                        <h2>My resume</h2>
                        <form css={styles.form}>
                            <div css={styles.label}>Profile</div>
                            <ResetButton><FontAwesomeIcon icon={faPencil} /></ResetButton>
                            <div css={styles.category}>
                                <h4>Workload</h4>
                                <RoundedInput />
                            </div>
                            <div css={styles.category}>
                                <h4>Languages</h4>
                                <div css={styles.languages}>
                                    <RoundedInput />
                                    <RoundedInput />
                                    <RoundedInput />
                                    <RoundedInput />
                                </div>
                            </div>
                            <div css={styles.category}>
                                <h4>Technology</h4>
                                <div css={styles.languages}>
                                    <RoundedInput />
                                    <RoundedInput />
                                    <RoundedInput />
                                    <RoundedInput />
                                </div>
                            </div>
                            <Button text='Submit' stretched={true} />
                        </form>
                    </div>
                    <Icon css={styles.icon} />
                </div>
                
                
            </div>
        </div>
    )
}

export { Resume };