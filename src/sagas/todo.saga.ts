import { IAction } from '../models/action.model';
import { ITodo } from '../models/todo.model';
import { put, delay } from 'redux-saga/effects';
import { doHideNotification } from '../actions/notification.action';

export function* handleAddTodo(action: IAction<ITodo>) {
	yield delay(5000);
	yield put(doHideNotification(action.payload.id));
}
