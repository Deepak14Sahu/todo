import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("TodoList", () => {
  render(<TodoList />);
  const textElement = screen.getByText("Todos");
  expect(textElement).toBeInTheDocument();
});
