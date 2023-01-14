import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
      <div className="mt-5">
          <h2 className="text-center">Tareas</h2>
          <ul className="list-group">
              {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
              ))}
              {
                todos.length === 0 && <li className="list-group-item">
                <div>
                <h5 className="text-center">  Sin tareas pendientes  </h5>
               </div>
               </li>
              }
              {
              !!todos.length && <li className="list-group-item">
              <div>
              <h5 className="text-center">  Tareas pendientes: {todos.length}  </h5>
              </div>
              </li>
              }

          </ul>
     </div>
  );
};
export default Todos;