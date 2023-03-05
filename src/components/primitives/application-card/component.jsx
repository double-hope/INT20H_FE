import React from 'react';
import * as styles from './styles';
import { Button } from '../buttons';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';

const ApplicationCard = ({name}) => {
  return (
    <div css={styles.wrapper}>
      {name}
      <div css={styles.button}>
        <Button text='Cancel' size={ButtonSizeEnum.SMALL} color={ButtonColorEnum.LIGHT} />
      </div> 
    </div>
  )
}

export { ApplicationCard };