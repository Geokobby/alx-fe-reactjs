import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial demo todos correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo's completed state when clicked", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    expect(todoItem).not.toHaveClass("completed");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("completed");
  });

  test("deletes a todo when delete button is clicked", () => {
    render(<TodoList />);
    
    // Ensure the todo exists
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).toBeInTheDocument();

    // Click the delete button next to "Learn React"
    const deleteButton = screen.getAllByText("❌")[0]; // first delete button
    fireEvent.click(deleteButton);

    // The todo should no longer be in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
