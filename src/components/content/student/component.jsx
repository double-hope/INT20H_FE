import React from 'react';
import * as styles from './styles';
import { PhotoCard } from 'components/primitives';
import { faMugHot, faSquarePlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const student1 = require('assets/images/student1.jpg');
const student2 = require('assets/images/student2.jpg');
const student3 = require('assets/images/student3.jpg');
const student4 = require('assets/images/student4.png');
const student5 = require('assets/images/student5.jpg');
const student6 = require('assets/images/student6.jpg');

const StudentContent = () => {

  const navigate = useNavigate();

  const resume = () => {
    navigate('/my-profile')
  }

  const vacancies = () => {
    navigate('/my-vacancies')
  }

  const activities = () => {
    navigate('/my-activities')
  }

  const team = () => {
    navigate('/my-team')
  }

  const projects = () => {
    navigate('/my-projects')
  }

  const coach = () => {
    navigate('/my-coach')
  }

  return (
    <div css={styles.wrapper}>
        <h3>Jump into collaborative learning and gain first experience</h3>
         
        <div css={styles.container}>
            <PhotoCard image={student1} icon={faUserPlus} name='My resume' onClick={resume} />
            <PhotoCard image={student3} icon={faSquarePlus} name='My vacancies' onClick={vacancies} />
            <PhotoCard image={student2} icon={faMugHot} name='My activities' onClick={activities} />
            <PhotoCard image={student4} icon={faUserPlus} name='My team' onClick={team} />
            <PhotoCard image={student5} icon={faSquarePlus} name='My projects' onClick={projects} />
            <PhotoCard image={student6} icon={faSquarePlus} name='My coach' onClick={coach} />
        </div>
    </div>
  )
}

export { StudentContent };