import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="App">
      <h5>React CRD operations using PHP API and MySQL</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Todos</Link>
            </li>
            <li>
              <Link to="todo/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListTodo />} />
          <Route path="todo/create" element={<CreaeTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
