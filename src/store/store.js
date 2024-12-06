import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const loadState = () => {
  const serializedState = localStorage.getItem('kanbanState');
  return serializedState ? JSON.parse(serializedState) : undefined;
};

const saveState = (state) => {
  localStorage.setItem('kanbanState', JSON.stringify(state));
};

const store = configureStore({
  reducer: { tasks: tasksReducer },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
