import React from 'react';
import * as styles from './styles';
import { Button } from '../buttons';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';

const RequestCard = ({name}) => {
  return (
    <div css={styles.wrapper}>
      {name}
      <div css={styles.buttons}>
        <Button text='Approve' size={ButtonSizeEnum.SMALL} color={ButtonColorEnum.LIGHT} />
        <Button text='Decline' size={ButtonSizeEnum.SMALL} color={ButtonColorEnum.LIGHT} />
      </div>
    </div>
  )
}

export { RequestCard };