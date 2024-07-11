import { useContext } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
    const { todos, setTodos } = useContext(TodoContext)
    function handleDelete(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <Container>
            <h1 className="my-3">Your Todos</h1>
            <Row>
                <TodoCard todos={todos} handleDelete={handleDelete} />
            </Row>
        </Container>
    )
}

function TodoCard({ todos, handleDelete }) {
    return todos.map((todo) => (
        <Col md={4} key={todo.id}>
            <Card className="my-3">
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.desc}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Badge
                            bg={todo.done ? "success" : "danger"}
                        >
                            {!todo.done && "Not "}Completed
                        </Badge>
                        <Button className='ms-auto' variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    ))
}