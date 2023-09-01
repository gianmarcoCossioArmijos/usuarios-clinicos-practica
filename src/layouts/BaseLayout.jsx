import React from 'react'
import Header from '../components/Header'

const BaseLayout = ( props ) => {
  return (
    <>

        <Header />

        <div>
            {props.children}
        </div>
    
    </>
  )
}

export default BaseLayout