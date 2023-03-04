import React from 'react';
import { Button, ResetButton } from '../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as styles from './styles';
import { ButtonColorEnum } from 'common/enums';

const MemberSearchForm = ({search}) => {
  return (
    <form onSubmit={search} css={styles.form}>
        <div css={styles.filter}>
            <div css={styles.category}>Project Role</div>
            <div css={styles.item}>Project manager</div>
            <div css={styles.item}>Developer</div>
            <ResetButton><FontAwesomeIcon icon={faCirclePlus} /></ResetButton>
            <ResetButton><FontAwesomeIcon icon={faCircleMinus} /></ResetButton>
        </div>
        <div css={styles.filter}>
            <div css={styles.category}>Language</div>
            <div css={styles.item}>English</div>
            <ResetButton><FontAwesomeIcon icon={faCirclePlus} /></ResetButton>
            <ResetButton><FontAwesomeIcon icon={faCircleMinus} /></ResetButton>
        </div>
        <div css={styles.filter}>
            <div css={styles.category}>Technology</div>
            <div css={styles.item}>Jira</div>
            <ResetButton><FontAwesomeIcon icon={faCirclePlus} /></ResetButton>
            <ResetButton><FontAwesomeIcon icon={faCircleMinus} /></ResetButton>
        </div>
        <div css={styles.filter}>
            <div css={styles.category}>Level</div>
            <div css={styles.item}>Novice</div>
            <ResetButton><FontAwesomeIcon icon={faCirclePlus} /></ResetButton>
            <ResetButton><FontAwesomeIcon icon={faCircleMinus} /></ResetButton>
        </div>
        <Button text='Search' color={ButtonColorEnum.LILAC} />
    </form>
  )
}

export { MemberSearchForm };