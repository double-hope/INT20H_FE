import { ButtonColorEnum } from 'common/enums';
import { Button, CompletedProjectCard, ResetButton } from 'components/primitives';
import React, { useState } from 'react'
import * as styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Icon } from 'assets/svgs/person.svg';


const ViewProject = () => {

    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [repository, setRepository] = useState('');
    const [description, setDescription] = useState('');

    const project = {
        title: 'Website for food delivery',
        repository: 'In the regions, young people do not have opportunities for development',
        description: `In the regions, young people do not have opportunities for development and access to non-formal education. A passive environment does not motivate self-development
        In the regions, young people do not have opportunities for development and access to non-formal education. A passive environment does not motivate self-development
        In the regions, young people do not have opportunities for development and access to non-formal education. A passive environment does not motivate self-development`,
    }

    const completedProjects = [
        {
            name: 'App for delivery',
            details: () => console.log('details'),
            portfolio: () => console.log('portfolio'),
        },
        {
            name: 'App for delivery',
            details: () => console.log('details'),
            portfolio: () => console.log('portfolio'),
        },
        {
            name: 'App for delivery',
            details: () => console.log('details'),
            portfolio: () => console.log('portfolio'),
        },
        {
            name: 'App for delivery',
            details: () => console.log('details'),
            portfolio: () => console.log('portfolio'),
        },
        {
            name: 'App for delivery',
            details: () => console.log('details'),
            portfolio: () => console.log('portfolio'),
        }
    ]

    const edit = (e) => {
        e.preventDefault();
        setEditing(!editing);
    }

    return (
        <div css={styles.wrapper}>
            {editing
                ? 
                <>
                <div css={styles.container}>
                    <h2>Create my project</h2>
                    <form css={styles.form}>
                        <div css={styles.currentProject}>Waiting</div>
                        <div css={styles.input}>
                            <h2>Project name</h2>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />    
                        </div>
                        <div css={styles.input}>
                            <h2>Repository</h2>
                            <textarea value={repository} onChange={(e) => setRepository(e.target.value)} rows="4" cols="50"  />     
                        </div>
                        <div css={styles.description}>
                            <h2>Description</h2>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="50"  />  
                        </div>
                        <Button text='Save Changes' onClick={edit} color={ButtonColorEnum.LILAC} stretched={true} />
                    </form>
                </div>
                <div css={styles.editView}>
                    <Icon />
                </div>
                </>
                : 
                
                <>
                <div css={styles.container}>
                    <h2>My projects</h2>
                    <form css={styles.form}>
                        <ResetButton onClick={edit}><FontAwesomeIcon icon={faPencil} /></ResetButton>
                        <div css={styles.currentProject}>In progress</div>
                        <div css={styles.input}>
                            <h2>Project title</h2>
                            <p>{project.title}</p>   
                        </div>
                        <div css={styles.input}>
                            <h2>Repository</h2>
                            <p>{project.repository}</p>
                        </div>
                        <div css={styles.description}>
                            <h2>Description</h2>
                            <p>{project.description}</p>
                        </div>
                        <Button text='Team' color={ButtonColorEnum.LILAC} stretched={true} />
                        <h3>OR</h3>
                        <Button text='Look for team' color={ButtonColorEnum.LILAC} stretched={true} />
                    </form>
                </div>
                <div>
                    <h2>My projects</h2>
                    <div css={styles.view}>
                        {completedProjects.map((project, i) => <CompletedProjectCard name={project.name} key={i} details={project.details} portfolio={project.portfolio} />)}
                    </div>
                </div>
                </>
            }
           
        </div>
    )
}

export { ViewProject };