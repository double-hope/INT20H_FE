import { MemberCard } from 'components/primitives/member-card';
import React from 'react';
import * as styles from './styles';
import { MemberSearchForm, Navigation } from 'components/primitives';

const Members = () => {

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
    const user = {
        name: 'Name',
        role: 'Member'
    }

    const search = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Navigation user={user} />
            <div css={styles.wrapper}>
                <div>
                    <h1>All members</h1>
                    <div>
                        <MemberSearchForm search={search} />
                    </div>
                </div>
                
                <div css={styles.membersContainer}>
                    {members.map((member, i) => <MemberCard name={member.name} resume={member.resume} />)}
                </div>
            </div>
        </div>
    )
}

export { Members };