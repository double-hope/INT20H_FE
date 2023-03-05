import { ButtonColorEnum } from 'common/enums';
import { Button } from 'components/primitives';
import React, { useEffect, useState } from 'react'
import * as styles from './styles';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { create } from 'store/project';
import { useAuth } from 'hooks/useAuth';
import { useRefreshToken } from 'hooks/useRefreshToken';

const CreateProject = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    const { project } = useSelector(state => state.project);

    const [name, setName] = useState('');
    const [repository, setRepository] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        refresh();
    }, []);

    const allProjects = () => {
        navigate('/projects');
    }

    const submit = async (e) => {
        e.preventDefault();
        dispatch(create({ body: {title: name, description, repositoryUrl: repository}, authorization: auth.accessToken}));
    } 

    return (
        <div css={styles.wrapper}>
            <div css={styles.container}>
                <h2>Create my project</h2>
                <form css={styles.form} onSubmit={submit} >
                    <div css={styles.currentProject}>Current Project</div>
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
                    <Button text='Create' color={ButtonColorEnum.LILAC} stretched={true} />
                </form>
            </div>
            <div css={styles.find} onClick={allProjects}>
                <h1>Find projects</h1>
                <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
        </div>
    )
}

export { CreateProject };