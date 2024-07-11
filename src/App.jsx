import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Add from './pages/AddToDo';
import { TodoContext } from './contexts/TodoContext';
import useLocalStorage from 'use-local-storage';

function Layout() {
  return (
    <>
      <Navbar className='mb-3' bg='light' variant='light'>
        <Container>
          <Navbar.Brand href="/">Todos</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/add'>Add</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  )
}