import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState();

  return (
    <TodoListBlock>
      {state.map((el) => (
        <TodoItem key={el.id} id={el.id} text={el.text} done={el.done} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
