import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from './styles';

const Layout = () => {
  return (
    <main css={styles.main}>
        <Outlet />
    </main>
  )
}

export { Layout };