import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activities: []
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {
        addActivity: (state, action) => {
            state.activities.unshift({
                id: Date.now(),
                timestamp: new Date().toISOString(),
                ...action.payload
            });
        }
    }
});

export const { addActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer; 