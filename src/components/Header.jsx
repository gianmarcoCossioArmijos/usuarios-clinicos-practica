import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from "react-icons/fi";

const Header = () => {
  return (
    <div className='w-full py-4 px-3 flex justify-between bg-slate-900 rounded-lg text-white'>

          <Link to="/">
            <h2 className='text-4xl'>💉</h2>
          </Link>

          <div>

          <Link to="/" className='p-3 text-lg text-white'>
              Inicio
          </Link>

          <Link to="/registrar">
            <button className='px-6 py-2 bg-green-400 hover:bg-green-500 rounded-lg text-black'>
              <FiPlusCircle />
            </button>
          </Link>

          </div>

    </div>
  )
}

export default Header