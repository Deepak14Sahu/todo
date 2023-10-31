import { useState } from "react";
import AddTodo from "./features/AddTodo";
import TodoList from "./features/TodoList";
import { Container, Navbar } from "react-bootstrap";

function App() {
  const [formInputData, setFormInputData] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand bg="light">Todo App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <AddTodo
          formInputData={formInputData}
          setFormInputData={setFormInputData}
        />
        <hr />
        <TodoList setFormInputData={setFormInputData} />
      </Container>
    </>
  );
}

export default App;
