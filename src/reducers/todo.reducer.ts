import { ITodo } from '../models/todo.model';
import { TODO_ADD, TODO_TOGGLE, TODO_SET_NAME, TODO_REMOVE } from '../constants/action-types';
import produce from 'immer';
import { IAction } from '../models/action.model';

const INIT_STATE: ITodo[] = [];

const todoReducer = (state: ITodo[] = INIT_STATE, action: IAction<ITodo>) => {
	switch (action.type) {
		case TODO_ADD:
			return applyAdd(state, action);
		case TODO_REMOVE:
			return applyRemove(state, action);
		case TODO_TOGGLE:
			return applyToggle(state, action);
		case TODO_SET_NAME:
			return applySetName(state, action);
		default:
			return state;
	}
};

const applyAdd = (state, action) => {
	return [...state, action.payload];
};

const applyRemove = (state, action) => {
	return state.filter(todo => todo.id !== action.payload.id);
};

const applyToggle = (baseState, action) => {
	return produce(baseState, draftState => {
		const toggleTodo = draftState.find(todo => todo.id === action.payload.id);
		toggleTodo.completed = !toggleTodo.completed;
	});
};

const applySetName = (state, action) => {
	return produce(state, draft => {
		const changingTodo = draft.find(todo => todo.id === action.payload.id);
		changingTodo.name = action.payload.name;
	});
};

export default todoReducer;
