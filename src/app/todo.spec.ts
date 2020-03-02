import { Todo } from './todo';

describe('Todo Initialization Test', () => {
  let todo = new Todo({
    title: 'Hello World',
    complete: true
  });
  expect(todo.title).toEqual('Hello World');
  expect(todo.complete).toBeTrue();
})