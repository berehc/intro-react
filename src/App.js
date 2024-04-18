import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text:'Sleep', completed: true},
  {text:'Study time', completed: false},
  {text:'First meeting', completed: false},
  {text:'Daily', completed: false},
]

function App() {
  return (
    <React.Fragment>

        <TodoCounter completed={16} total={25} />
        <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))
        }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
