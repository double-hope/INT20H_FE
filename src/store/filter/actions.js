import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';

const technologies = createAsyncThunk(ActionType.TECHNOLOGIES, async (params, { extra }) => ({
    technology: await extra.filterService.technologies(PathType.TECHNOLOGIES, {
        ...params
    }),
}));

const languages = createAsyncThunk(ActionType.LANGUAGES, async (params, { extra }) => ({
    language: await extra.filterService.languages(PathType.LANGUAGES, {
        ...params
    }),
}));

const workloads = createAsyncThunk(ActionType.WORKLOADS, async (params, { extra }) => ({
    workload: await extra.filterService.workloads(PathType.WORKLOADS, {
        ...params
    }),
}));

const members = createAsyncThunk(ActionType.MEMBERS, async (params, { extra }) => ({
    members: await extra.filterService.members(PathType.MEMBERS, {
        ...params
    }),
}));

export { technologies, languages, workloads, members };