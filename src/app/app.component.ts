import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  private list = new TodoList('Bob', [
    new TodoItem('Go for run', true),
    new TodoItem('Go after you dreams'),
    new TodoItem('Get flowers'),
    new TodoItem('Collect Tickets'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.complete).length;
  }
  get items(): TodoItem[] {
    if (this.showComplete) {
    }
    return this.list.items.filter(
      (item) => this.showComplete || !item.complete
    );
  }

  public addItem(todo: string): void {
    if (todo != '') {
      this.list.addItem(todo);
    }
  }

  showComplete: boolean = false;
}
