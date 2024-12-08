import { createSlice } from '@reduxjs/toolkit';
import { addActivity } from './activitiesSlice';

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
            const { sourceList, targetList, source } = action.payload;
            state.tasks[sourceList] = source;
            if (targetList !== sourceList) {
                state.tasks[targetList] = source;
            }
        },
        setFilters: (state, action) => {
            const { type, value } = action.payload;
            state.filters[type] = value;
        },
    },
});

export const addTask = (payload) => (dispatch) => {
    dispatch(tasksSlice.actions.addTask(payload));
    dispatch(addActivity({
        message: `New task "${payload.task.title}" created in ${payload.status}`
    }));
};

export const updateTaskLists = (payload) => (dispatch) => {
    dispatch(tasksSlice.actions.updateTaskLists(payload));

    if (payload.movedTask) {
        const formatListName = (name) => {
            return name === "inProgress" ? "In Progress" : name.charAt(0).toUpperCase() + name.slice(1);
        };

        dispatch(addActivity({
            message: `Task "${payload.movedTask.title}" moved from ${formatListName(payload.movedTask.from)} to ${formatListName(payload.movedTask.to)}`
        }));
    }
};

export const { setFilters } = tasksSlice.actions;
export default tasksSlice.reducer;