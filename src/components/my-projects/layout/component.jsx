import { Navigation, NotificationIcon } from 'components/primitives';
import React from 'react';
import * as styles from './styles';
import { CreateProject } from '../create-project';

const ProjectLayout = () => {
    const user = {
        name: 'Name',
        role: 'Member'
    }
    return (
        <div>
            <Navigation user={user} />
            <NotificationIcon />
            <div css={styles.project}>
                <CreateProject />
            </div>
        </div>
    )
}

export { ProjectLayout };