import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { auth as authService } from 'services';
import { oAuth as oAuthService } from 'services';
import { filter as filterService } from 'services';
import { project as projectService } from 'services';
import { auth, oAuth, filter, project } from './rootReducer';

const middleware = getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
        extraArgument: {
            authService,
            oAuthService,
            filterService,
            projectService
        }
    }
});

const store = configureStore({
    reducer: combineReducers({
        auth,
        oAuth,
        filter,
        project,
    }),
    middleware,
    // uncomment in prod
    // devTools: false 
});

export { store };