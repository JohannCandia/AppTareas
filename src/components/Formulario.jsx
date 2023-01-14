import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
const Formulario = ({addTodo, deleteTodo}) => {
  
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 1

    })
    const {title, description, state} = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim() === '' || description.trim() === ''){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Todos los campos son obligatorios!',           
            })
        }
        addTodo({   
            id: new Date().getTime(),
           ...todo,
           state: state === "completado"
           
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro agregado',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const hadleChange = (e) => {
        console.log(todo)
        setTodo({
            ...todo, [e.target.name] : e.target.value
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Nombre de su tarea...'
        className='form-control mb-2'
        name="title"
        value={title} 
        onChange={hadleChange}
        />
        <textarea className="form-control mb-2" 
        name="description"
        placeholder="Ingrese descripcion"
        value={description}
        onChange={hadleChange}
        />
        <select className="form-select mb-2" 
        name="state" 
        value={state}
        onChange={hadleChange }>  
           
            <option value="pendiente">Pendiente </option>
            <option value="completado"> completado </option>
            

        </select>
        <button className="btn btn-primary">Enviar</button>
       
    </form>
  )
}

export default Formulario
