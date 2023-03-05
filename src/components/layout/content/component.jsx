import { StudentContent } from 'components/content';
import React from 'react';
import * as styles from './styles';

const ContentLayout = () => {
  return (
    <div css={styles.layout}>
      <StudentContent />
    </div>
  )
}

export { ContentLayout };