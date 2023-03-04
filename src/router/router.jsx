import { Layout } from 'components';
import AboutUsPage from 'pages/about-us/AboutUs';
import HomePage from 'pages/home/Home';
import MembersPage from 'pages/members/Members';
import MissingPage from 'pages/missing/Missing';
import PersistLoginPage from 'pages/persist-login/PersistLogin';
import ProjectsPage from 'pages/projects/Projects';
import RequireAuthPage from 'pages/require-auth/RequireAuth';
import SignPage from 'pages/sign/Sign';
import UnauthorizedPage from 'pages/unauthorized/Unauthorized';
import WelcomePage from 'pages/welcome/Welcome';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const roles = {
  USER: 'USER',
}

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<SignPage />} />
          <Route path='welcome' element={<WelcomePage />} />
          <Route path='unauthorized' element={<UnauthorizedPage />} />
          <Route path='about-us' element={<AboutUsPage />} />

          <Route element={<PersistLoginPage />}>
            <Route element={<RequireAuthPage allowedRoles={[roles.USER]} />}>
              <Route path='' element={<HomePage />} />
              <Route path='members' element={<MembersPage />} />
              <Route path='projects' element={<ProjectsPage />} />
            </Route>
          </Route>

          <Route path='*' element={<MissingPage />} />
        </Route>
    </Routes>
  )
}

export { AppRouter };
