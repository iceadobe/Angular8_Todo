import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  // POST
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // DELETE
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id != id)
    return this;
  }

  // PUT
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if(!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }


  // GET all
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // GET id
  getTodoById(id: number): Todo {
    return this.todos.find(todo => todo.id == id);
  }

  // Toggle
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complet: !todo.complete
    });
    return updatedTodo;
  }
}
