import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import activitiesReducer from './activitiesSlice';

const loadState = () => {
  const serializedState = localStorage.getItem('kanbanState');
  return serializedState ? JSON.parse(serializedState) : undefined;
};

const saveState = (state) => {
  localStorage.setItem('kanbanState', JSON.stringify(state));
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    activities: activitiesReducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
