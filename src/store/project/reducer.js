import { DataStatusEnum } from 'common';
import { createReducer } from '@reduxjs/toolkit';
import { create } from './actions';

const initialState = {
    project: null,
    message: null,
    status: DataStatusEnum.IDLE
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(create.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(create.fulfilled, (state, { payload }) => {
        const { project } = payload;
        state.project = project;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(create.rejected, (state, { payload }) => {
        const { message } = payload;
        state.message = message;
        state.status = DataStatusEnum.ERROR;
    });
    
});

export { reducer };