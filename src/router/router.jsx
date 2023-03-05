import { Layout } from 'components';
import AboutUsPage from 'pages/about-us/AboutUs';
import HomePage from 'pages/home/Home';
import MembersPage from 'pages/members/Members';
import MissingPage from 'pages/missing/Missing';
import MyActivitiesPage from 'pages/my-activities/Activities';
import MyNotificationsPage from 'pages/my-notifications/MyNotifications';
import MyProjectsPage from 'pages/my-projects/MyProjects';
import MyTeamPage from 'pages/my-team/MyTeam';
import PersistLoginPage from 'pages/persist-login/PersistLogin';
import ProjectsPage from 'pages/projects/Projects';
import RequireAuthPage from 'pages/require-auth/RequireAuth';
import MyResumePage from 'pages/resume/Resume';
import SignPage from 'pages/sign/Sign';
import UnauthorizedPage from 'pages/unauthorized/Unauthorized';
import WelcomePage from 'pages/welcome/Welcome';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const roles = {
  CANDIDATE: 'CANDIDATE',
  RECRUITER: 'RECRUITER',
  COACH: 'COACH',
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
            <Route element={<RequireAuthPage allowedRoles={[roles.CANDIDATE]} />}>
              <Route path='' element={<HomePage />} />
              <Route path='members' element={<MembersPage />} />
              <Route path='projects' element={<ProjectsPage />} />
              <Route path='my-projects' element={<MyProjectsPage />} />
              <Route path='my-activities' element={<MyActivitiesPage />} />
              <Route path='my-profile' element={<MyResumePage />} />
              <Route path='my-team' element={<MyTeamPage />} />
              <Route path='my-notifications' element={<MyNotificationsPage />} />
            </Route>
          </Route>

          <Route path='*' element={<MissingPage />} />
        </Route>
    </Routes>
  )
}

export { AppRouter };
