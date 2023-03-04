import { Navigation, ProjectCard } from 'components/primitives';
import React from 'react';
import * as styles from './styles';

const Projects = ({projects}) => {

    const user = {
        name: 'Name',
        role: 'Member'
    }

    return (
        <div>
            <Navigation user={user} />
            <div css={styles.wrapper}>
                <h2>All projects</h2>
                <div css={styles.content}>
                    {projects.map(project => <ProjectCard project={project} />)}
                </div>
            </div>
        </div>
    )
}

export { Projects };