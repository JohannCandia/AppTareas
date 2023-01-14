import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialTodos = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {

    const [todos, setTodos] = useState(initialTodos);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))   
    }, [todos])
    

    const addTodo = todo => {
      setTodos([...todos, todo])
    }
    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
    const updateTodo = id => {
        const newTodos = todos.map(todo => {
        if(todo.id === id){
            todo.state = !todo.state
        }
        return todo
    })
    setTodos(newTodos)}

    return (
        <div className="container">
            <h1 className="text-center">Lista de tareas pendientes </h1>
            <Formulario addTodo={addTodo} />
            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    );
};
export default App;