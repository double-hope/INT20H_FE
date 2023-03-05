import { Navigation } from 'components/primitives';
import React from 'react';
import * as styles from './styles';
import { ViewProject } from '../view-project';
import { CreateProject } from '../create-project';

const ProjectLayout = () => {
    const user = {
        name: 'Name',
        role: 'Member'
    }
    return (
        <div>
            <Navigation user={user} />
            <div css={styles.project}>
                <CreateProject />
            </div>
        </div>
    )
}

export { ProjectLayout };