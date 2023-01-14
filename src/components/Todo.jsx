import React from 'react'

const Todo = ({todo, deleteTodo, updateTodo}) => {

    const {title, description, state, id} = todo

  return  <li className="list-group-item">
    <div>
    <h5 className={`${state && "text-decoration-line-through"}`}>
                    {title}
                </h5>
        <p>{description}</p>
        <div className="d-flex gap-5">
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">Eliminar</button>
        <button onClick={() => updateTodo(id)} className="btn btn-warning">Cambiar estado</button>
        </div>
    </div>
  </li>
}

export default Todo
