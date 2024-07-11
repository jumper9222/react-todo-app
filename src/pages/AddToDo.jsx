import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [done, setDone] = useState(false);
    const { todos, setTodos } = useContext(TodoContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        let newTodo = { id: Date.now(), title, desc, done }
        setTodos([...todos, newTodo]);
        navigate("/")
    }

    return (
        <Container>
            <h1>Add Todo</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="my-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter a todo"
                        required
                    />
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter a description"
                    />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    label="Mark as done"
                    checked={done}
                    onChange={(e) => setDone(e.target.checked)}
                />
                <Button variant="primary" type="submit" className="mt-3">Submit</Button>
            </Form>
        </Container>
    )
}