import { ITodo } from '../models/todo';
import { TODO_ADD, TODO_TOGGLE } from '../constants/action-types';
import produce from 'immer';
import { IAction } from '../models/action';

const INIT_STATE: ITodo[] = [];

const todoReducer = (state: ITodo[] = INIT_STATE, action: IAction<ITodo>) => {
	switch (action.type) {
		case TODO_ADD:
			return applyAdd(state, action);
		case TODO_TOGGLE:
			return applyToggle(state, action);
		default:
			return state;
	}
};

const applyAdd = (state, action) => {
	return [...state, action.payload];
};

const applyToggle = (baseState, action) => {
	return produce(baseState, draftState => {
		const toggleTodo = draftState.find(todo => todo.id === action.payload.id);
		toggleTodo.completed = !toggleTodo.completed;
	});
};

export default todoReducer;
