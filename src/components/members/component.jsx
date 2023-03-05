import { MemberCard } from 'components/primitives/member-card';
import React from 'react';
import * as styles from './styles';
import { MemberSearchForm, Navigation, NotificationIcon } from 'components/primitives';
import { useSelector } from 'react-redux';

const Members = () => {
    const { technology, language, workload } = useSelector(state => state.filter);

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

    const search = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Navigation />
            <NotificationIcon />
            <div css={styles.wrapper}>
                <div>
                    <h1>All members</h1>
                    <div>
                        <MemberSearchForm search={search} />
                    </div>
                </div>
                
                <div css={styles.membersContainer}>
                    {members.map((member, i) => <MemberCard name={member.name} key={i} resume={member.resume} />)}
                </div>
            </div>
        </div>
    )
}

export { Members };