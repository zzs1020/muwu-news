import { TODO_SHOW_COMPLETED } from '../constants/action-types';
import { IStoreState } from '../models/store-state.model';
import { ITodo } from '../models/todo.model';

export const getTodos = ({todoState, todosFilterState}: IStoreState): ITodo[] => {
	return todoState.filter(todo => todosFilterState === TODO_SHOW_COMPLETED ? todo.completed : !todo.completed);
};
