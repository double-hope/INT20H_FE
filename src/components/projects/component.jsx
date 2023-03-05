import { Button, Navigation, NotificationIcon, ProjectCard, SearchInput } from 'components/primitives';
import React, { useState } from 'react';
import * as styles from './styles';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';

const Projects = ({projects}) => {

    const [search, setSearch] = useState('');

    return (
        <div>
            <Navigation />
            <NotificationIcon />
            <div css={styles.wrapper}>
                <h1>All projects</h1>
                <h4>Find your future team</h4>
                <div css={styles.inputContainer}>
                    
                    <SearchInput
                        id='search' 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        autoComplete='off'
                        placeholder='Write your request...'

                        label='Search:'
                    />

                    <Button text='Search' color={ButtonColorEnum.PRIMARY} size={ButtonSizeEnum.SMALL} />
                </div>
                <div css={styles.content}>
                    {projects.map(project => <ProjectCard project={project} />)}
                </div>
            </div>
        </div>
    )
}

export { Projects };