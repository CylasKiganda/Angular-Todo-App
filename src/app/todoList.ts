import { TodoItem } from './todoItem';

export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []) {}

  get items(): TodoItem[] {
    return this.todoItems;
  }
  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}
