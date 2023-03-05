import React from 'react';
import * as styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const MentorContent = () => {
    const members = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5']

    return (
        <div css={styles.wrapper}>
            <h3>Jump into collaborative learning and gain first experience</h3>
             
            <div css={styles.container}>
                <div css={styles.aboutUser}>
                    <div>Info about you</div>
                    <div css={styles.experience}>
                        <h3>Briefly about your experience</h3>
                        <p>Означає насамперед те, що польська література зараз – як і раніше – має що сказати українським читачам, і вони готові її слухати. Cправді, у нас багато спільних (чи, принаймні, симетричних) тем: клопоти посткомуністичної трансформації і гра у квача з власною європейськістю, і шахівниця, по якій ми без кінця пересуваємо фігури своїх національних героїв, і привиди непростого минулого, які домагаються справедливості, і різні історичні човни, в яких доводилося разом пливти: Австро-Угорщина, міжвоєнна Річ Посполита; і вся та наша туманна Мезо-Європа, у якій ми разом ув’язнені, часом пробуючи солідарно шукати вихід, а часом ображено відвертаючись у різні кути, щоб згодом знов почати діалог.</p>
                    </div>
                    <div>Your skills</div>
                    <div>

                    </div>
                </div>
               
                <div css={styles.aboutTeam}>
                    <div css={styles.myTeam}>
                        <h3>My team</h3>
                        <div css={styles.members}>
                            <div>
                                {members.map((member, i) => i < 4 && <div css={styles.member} key={i}>{member}</div>)}
                            </div>
                            
                            {members.length > 4 && <FontAwesomeIcon icon={faArrowRightLong} />}
                        </div>
                    </div>
                    <div css={styles.myProjects}>
                        <h3>About the project</h3>
                    </div>
                </div>
            </div>
        </div>
      )
}

export { MentorContent };