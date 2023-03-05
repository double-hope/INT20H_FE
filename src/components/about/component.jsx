import { Card, Decoration } from 'components/primitives';
import * as styles from './styles';
import React from 'react'
import { faMugHot, faSquarePlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.aboutContainer}>
            <Decoration />
            <div css={styles.about}>
                <h1>About JumpIn</h1>
                <p>A learning platform is a website that provides users with access to educational resources, 
                    such as courses, tutorials, and assessments. Our platform offers a wide range of content 
                    to help learners improve their knowledge and skills. With interactive features, personalized learning paths, 
                    and a user-friendly interface, our platform makes learning engaging and effective. Join our community today 
                    and start your journey towards success!</p>
            </div>
        </div>
        <div css={styles.forWhom}>
            <h1>For whom?</h1>
            
            <div css={styles.cards}>
                <Card name='Seekers for want to jump in a new profession and look for first experience' icon={faUserPlus} whileHover={{borderRadius: '5px', scale: 1.05}} />
                <Card name='Professionals who want to jump into mentorship environment' icon={faMugHot} whileHover={{borderRadius: '5px', scale: 1.05}} />
                <Card name='Recruiters who want to jump in circle of future leaders' icon={faSquarePlus} whileHover={{borderRadius: '5px', scale: 1.05}} />
            </div>
        </div>

        <div css={styles.aboutContainer}>
            <div css={styles.posibilities}>
                <h1>What you can do here?</h1>
            </div>
        </div>

        <div css={styles.additional}>
            <div css={styles.additionalCard}>
                <h5>User Profile</h5>
                <p>Allow users to create and edit their profile, including basic information such as name, contact details, education, work experience, skills, and personal statement.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>CV Builder</h5>
                <p>Provide users with templates and tools to create a professional-looking CV. Allow users to customize their CV layout, font, and style, and add or remove sections as needed.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>Project Creation</h5>
                <p>Allow users to create a new project, including defining the project's scope, objectives, and requirements. Allow users to specify the roles needed to complete the project and define the timeline and milestones.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>Team Finder</h5>
                <p>Provide a searchable directory of potential team members based on their skills, experience, and availability. Allow users to browse through profiles and connect with potential team members.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>Collaboration Tools</h5>
                <p>Provide users with tools to collaborate with their team members, such as a messaging system, project management tools, and file sharing.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>Job Search</h5>
                <p>Provide users with a job search engine that matches their skills and experience with job postings. Allow users to apply for jobs directly from the platform and track the status of their applications.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>Community Forum</h5>
                <p>Provide users with a community forum where they can share ideas, ask questions, and get advice from other users. Allow users to create and join groups based on their interests, industry, or location.</p>
            </div>

            <div css={styles.additionalCard}>
                <h5>Feedback System</h5>
                <p>Allow users to give and receive feedback on their CV, project, and team members. Provide users with tools to rate and review their team members' skills, work ethics, and communication.</p>
            </div>
        </div>
    </div>
  )
}

export { About };