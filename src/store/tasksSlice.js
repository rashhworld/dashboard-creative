import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: {
        todo: [],
        inProgress: [],
        done: [],
    },
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { status, task } = action.payload;
            state.tasks[status].push({
                id: Date.now(),
                ...task,
            });
        },
        updateTaskLists: (state, action) => {
            const { source, target, sourceList, targetList } = action.payload;
            state.tasks[sourceList] = source;
            if (targetList && targetList !== sourceList) {
                state.tasks[targetList] = target;
            }
        },
    },
});

export const { addTask, updateTaskLists } = tasksSlice.actions;
export default tasksSlice.reducer; 