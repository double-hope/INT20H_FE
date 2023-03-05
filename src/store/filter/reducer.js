import { DataStatusEnum } from 'common';
import { createReducer } from '@reduxjs/toolkit';
import { technologies, languages, workloads, members } from './actions';

const initialState = {
    technology: null,
    language: null,
    workload: null,
    members: null,
    status: DataStatusEnum.IDLE
}

const reducer = createReducer(initialState, (builder) => {
    
    builder.addCase(technologies.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(technologies.fulfilled, (state, { payload }) => {
        const { technology } = payload;
        state.technology = technology;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(languages.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(languages.fulfilled, (state, { payload }) => {
        const { language } = payload;
        state.language = language;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(workloads.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(workloads.fulfilled, (state, { payload }) => {
        const { workload } = payload;
        state.workload = workload;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(members.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    })

    builder.addCase(members.fulfilled, (state, { payload }) => {
        const { members } = payload;
        state.members = members;
        state.status = DataStatusEnum.SUCCESS;
    });
    
});

export { reducer };