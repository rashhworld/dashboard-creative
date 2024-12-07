import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: {
        todo: [],
        inProgress: [],
        done: [],
    },
    filters: {
        priority: "All",
        date: "All"
    }
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
        setFilters: (state, action) => {
            const { type, value } = action.payload;
            state.filters[type] = value;
        },
    },
});

export const { addTask, updateTaskLists, setFilters } = tasksSlice.actions;
export default tasksSlice.reducer; 