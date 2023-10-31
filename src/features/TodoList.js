import { Button, CloseButton, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, completeTodo } from "./ListSlice";

const TodoList = ({ setFormInputData }) => {
  const Todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const handleEdit = (todo) => {
    setFormInputData(todo);
  };
  const handleCheck = (id) => {
    dispatch(completeTodo({ id }));
  };

  const renderedTodo = Todos.map((todo) => (
    <ListGroup.Item
      key={todo.id}
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="align-self-center" style={{ marginRight: "30px" }}>
        <input type="checkbox" onChange={() => handleCheck(todo.id)} />
      </div>

      {todo.completed ? (
        <div className="ms-2 me-auto">
          <s>
            <div className="fw-bold">{todo.title}</div>
            {todo.description}
          </s>{" "}
        </div>
      ) : (
        <div className="ms-2 me-auto">
          <div className="fw-bold">{todo.title}</div>
          {todo.description}
        </div>
      )}

      <div className="align-self-center">
        <Button
          disabled={todo.completed}
          className="mx-2"
          onClick={() => handleEdit(todo)}
        >
          Edit
        </Button>
        <CloseButton onClick={() => handleDelete(todo.id)} />
      </div>
    </ListGroup.Item>
  ));

  return (
    <>
      <h1>Todos</h1>
      {Todos.length > 0 ? (
        <ListGroup>{renderedTodo}</ListGroup>
      ) : (
        <div>No todos available</div>
      )}
    </>
  );
};

export default TodoList;
