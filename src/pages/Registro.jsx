import React, { useState } from 'react'
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';

  const Registro = () => {
    const [usuario, setUsuario] = useState({
      nombre: "",
      dni: "",
      carrera: "",
      ciclo: "",
      ts: ""
  });

  const navigate = useNavigate();
  const reference = collection(db, "usuariosClinicos");

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setUsuario({...usuario, [name]: value})
  }

  const setNewUsuario = async(event) => {

    event.preventDefault();
    const nuevoUsuario = {

      nombre: usuario.nombre,
      dni: usuario.dni,
      carrera: usuario.carrera,
      ciclo: usuario.ciclo,
      ts: usuario.ts
    }

    await addDoc(reference, nuevoUsuario)
    navigate("/")
  }

  return (
    <div className='w-full min-h-screen py-4 px-3 bg-slate-900 rounded-lg text-white'>

      <h3 className='mt-3 mb-6 font-bold text-lg text-center'>Nuevo Usuario</h3>

      <form
          className='md:w-1/2 md:mx-auto flex flex-col gap-4'
          onSubmit={setNewUsuario}>

          <label>
              Nombres y Apellidos
              <input
                  type="text"
                  name='nombre'
                  value={usuario?.nombre}
                  className='w-full p-3 bg-slate-200 rounded-lg text-black'
                  placeholder='Ingresar Nombre'
                  onChange={handleChange}
                  required/>
          </label>

          <label>
              DNI
              <input
                  type="number"
                  name='dni'
                  value={usuario?.dni}
                  className='w-full p-3 bg-slate-200 rounded-lg text-black'
                  placeholder='Ingresar DNI'
                  onChange={handleChange}
                  required/>
          </label>

          <label>
              Carrera
              <input
                  type="text"
                  name='carrera'
                  value={usuario?.carrera}
                  className='w-full p-3 bg-slate-200 rounded-lg text-black'
                  placeholder='Ingresar Carrera'
                  onChange={handleChange}
                  />
          </label>

          <label>
              Ciclo
              <input
                  type="text"
                  name='ciclo'
                  value={usuario?.ciclo}
                  className='w-full p-3 bg-slate-200 rounded-lg text-black'
                  placeholder='Ingresar Ciclo'
                  onChange={handleChange}
                  />
          </label>

          <label>
              Tipo de Sangre
              <input
                  type="text"
                  name='ts'
                  value={usuario?.ts}
                  className='w-full p-3 bg-slate-200 rounded-lg text-black'
                  placeholder='Ingresar Tipo de Sangre'
                  onChange={handleChange}
                  />
          </label>
          
          <button
              type="submit"
              value="Registrar"
              className='w-full p-3 bg-green-400 hover:bg-green-500 text-center font-bold text-black rounded-lg'
              >
                Guardar
          </button>

      </form>

    </div>
  )
}

export default Registro