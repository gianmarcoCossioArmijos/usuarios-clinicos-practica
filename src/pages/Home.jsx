import React, { useEffect, useState } from 'react'
import { getDocs, collection, query } from 'firebase/firestore/lite';
import { db } from '../services/firebase';

const Home = () => {
  const [usuarios, setUsuarios] = useState([]);

  const reference = collection(db, "usuariosClinicos");

  useEffect(() => {

    getUsuarios()
      .then(data => setUsuarios(data))
  }, [])

  const getUsuarios = async() => {

    const q = query(reference);
    const data = await getDocs(q);
    const results = []

    data.forEach(doc => {
        
        results.push({
            id: doc.id,
            ...doc.data()
        })
    });

    return results;
  }

  return (
    <div className='w-full min-h-screen py-4 px-3 flex bg-slate-900 rounded-lg text-white'>

      <div className='w-full p-2 flex flex-col bg-slate-800 rounded-lg text-xs'>

        <div className='w-full px-2 py-3 flex justify-between bg-green-400 rounded-lg text-sm text-black'>

          <span className='w-2/6 my-auto font-bold overflow-hidden'>Nombres</span>
          <span className='w-1/6 my-auto font-bold overflow-hidden'>Dni</span>
          <span className='w-1/6 my-auto font-bold overflow-hidden'>Carrera</span>
          <span className='w-1/6 my-auto font-bold overflow-hidden'>Ciclo</span>
          <span className='w-1/6 my-auto font-bold overflow-hidden'>Tipo de Sangre</span>

        </div>

        {usuarios.map(usuario => {
          return (

            <>
            
              <div className='w-full p-2 flex justify-between text-xs' key={usuario.id}>

                <span className='w-2/6 overflow-hidden'>{usuario.nombre}</span>
                <span className='w-1/6 overflow-hidden'>{usuario.dni}</span>
                <span className='w-1/6 overflow-hidden'>{usuario.carrera}</span>
                <span className='w-1/6 overflow-hidden'>{usuario.ciclo}</span>
                <span className='w-1/6 overflow-hidden'>{usuario.ts}</span>

              </div>

              <hr className=''/>

            </>
          )
        })}

      </div>

    </div>
  )
}

export default Home