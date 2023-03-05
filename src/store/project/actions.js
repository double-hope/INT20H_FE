import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';

const create = createAsyncThunk(ActionType.CREATE, async (params, { extra }) => ({
    project: await extra.projectService.create(PathType.CREATE, {
        ...params
    }),
}));

export { create };