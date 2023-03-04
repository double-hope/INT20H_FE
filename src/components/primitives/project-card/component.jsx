import React from 'react';
import * as styles from './styles';
import { Button } from '../buttons';
import { ButtonColorEnum } from 'common/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({project}) => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.aside}>
             <div css={styles.tags}>
                {project.tags.map(tag => <div css={styles.tag}>{tag}</div>)}
            </div>
            <Button text='Apply' color={ButtonColorEnum.DARK} extraStyles={styles.buttonPosition} />
        </div>
       
        <div css={styles.info}>
            <div css={styles.status}>{project.status}</div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <h5>More information <FontAwesomeIcon icon={faArrowRightLong} /></h5>
        </div>

        <div css={styles.image}>
            <img src={project.img} alt='' />
        </div>
        {project.status === 'Completed' && <div css={styles.completed} />}
    </div>
  )
}

export { ProjectCard };