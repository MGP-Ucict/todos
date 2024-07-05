import axios from "axios"
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

export default function ListTodo() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos();
    }, []);

    function getTodos() {
        axios.get('http://localhost:8888/api/users/').then(function(response) {
            console.log(response.data);
            setTodos(response.data);
        });
    }

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:8888/api/todos/${id}/`).then(function(response){
            console.log(response.data);
            getTodos();
        });
    }
    return (
        <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, key) =>
                        <tr key={key}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}