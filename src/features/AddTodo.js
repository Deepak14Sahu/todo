import { useDispatch } from "react-redux";
import { todoAdded, updateTodo } from "./ListSlice";
import { nanoid } from "@reduxjs/toolkit";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const AddTodo = ({ formInputData, setFormInputData }) => {
  const dispatch = useDispatch();
  const id = formInputData.id;
  const title = formInputData.title;
  const description = formInputData.description;

  const handleChange = (e) => {
    setFormInputData({ ...formInputData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = (e) => {
    if (id && title && description) {
      dispatch(updateTodo({ id, title, description }));
    } else if (title && description) {
      dispatch(
        todoAdded({
          id: nanoid(),
          title,
          description,
        })
      );
    } else {
      alert("Enter the data");
    }
    const clean = { id: "", title: "", description: "" };
    setFormInputData(clean);
  };
  return (
    <Form className="my-3 ">
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Enter the title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          placeholder=" Enter the description"
          value={description}
          onChange={handleChange}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleButtonClick}>
        {formInputData.id ? "Update" : "Add Todo"}
      </Button>
    </Form>
  );
};

export default AddTodo;
