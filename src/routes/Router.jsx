import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Registro from '../pages/Registro'
import BaseLayout from '../layouts/BaseLayout'

const Router = () => {
  return (
        <BrowserRouter>
          <BaseLayout>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/registrar' element={<Registro />} />

            </Routes>
          </BaseLayout>
        </BrowserRouter>
  )
}

export default Router