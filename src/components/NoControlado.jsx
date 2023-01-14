import React, { useRef, useState } from 'react'

const noControlado = () => {
    const [error, setError] = useState("")
    const form = useRef(null);


    const handleSubmit = (e) => {
        setError("")
        e.preventDefault()
        const datos = new FormData(form.current);


        const objetoDatos = Object.fromEntries([...datos.entries()]);
        console.log(objetoDatos);

        //validando datos   
        if (objetoDatos.title.trim() === '' || objetoDatos.description.trim() === '') {
           setError('Ingrese datos en los campos');
            return;
        }
      
        if (objetoDatos.state === '0') {
            console.log('seleccione una opcion');
            return;
        }   
        
    }


  return (
    <form onSubmit={handleSubmit} ref={form}>
        <input type="text" 
        placeholder='Ingrese nombre'
        className='form-control mb-2'
        name="title" />
        <textarea className="form-control mb-2" 
        name="description"
        placeholder="Ingrese descripcion"/>
        <select className="form-select mb-2" name="state">  
            <option value="1">opcion 1</option>
            <option value="2">opcion 2</option>
            <option value="3">opcion 3</option>

        </select>
        <button className="btn btn-primary">Enviar</button>
        {
            error && <div className="alert alert-danger mt-2">{error}</div>
        }
    </form>
  )
}

export default noControlado
