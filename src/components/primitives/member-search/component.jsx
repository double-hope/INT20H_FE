import React from 'react';
import { Button } from '../buttons';
import * as styles from './styles';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';
import { SortItem } from '../sort-item';

const MemberSearchForm = ({search}) => {
  return (
    <form onSubmit={search} css={styles.form}>
        <div css={styles.container}>
            <SortItem text='Language' checked={false} />
            <SortItem text='Technology' checked />
            <SortItem text='Workload' checked />
            <SortItem text='Free' checked />
            <SortItem text='Has resume' checked/>
        </div>
        <Button text='Search' color={ButtonColorEnum.LILAC} size={ButtonSizeEnum.SMALL} />
    </form>
  )
}

export { MemberSearchForm };