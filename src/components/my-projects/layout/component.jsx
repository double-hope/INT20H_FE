import { Navigation, NotificationIcon } from 'components/primitives';
import React from 'react';
import * as styles from './styles';
import { CreateProject } from '../create-project';

const ProjectLayout = () => {

    return (
        <div>
            <Navigation />
            <NotificationIcon />
            <div css={styles.project}>
                <CreateProject />
            </div>
        </div>
    )
}

export { ProjectLayout };