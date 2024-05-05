import { type TodoListTypes } from './TodoListTypes';
import { type TodoMessage } from './TodoMessages';

export interface TodoList {
  listType: TodoListTypes;
  items: TodoMessage[];
}
