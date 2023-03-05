import React from 'react'
import { Link } from '../links/default-link';
import * as styles from './styles';
import { LinkColorEnum } from 'common/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ResetButton } from '../buttons';

const MemberCard = ({name, resume}) => {
  return (
    <div css={styles.card}>
        <div css={styles.content}>
            {name}
            <Link text='Resume' href={resume} color={LinkColorEnum.DARK} />
        </div>
        <ResetButton>
            <FontAwesomeIcon icon={faPlusCircle}/>
        </ResetButton>
        
    </div>
  )
}

export { MemberCard };