import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    // Check if it has "completed" class after toggle
    expect(todo).toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
