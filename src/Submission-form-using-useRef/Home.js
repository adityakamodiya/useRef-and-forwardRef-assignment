import React, { forwardRef, useRef } from 'react'
import Form from './Form'

function Home() {
  let name = useRef()
  // console.log('hello')
  
  return (
    <>
    <form onSubmit={name.current.FormData()}>
    <Form ref={name} />
      <input  type='text' ref={name} placeholder='write your name'></input>
      <input type='submit'></input>
      <Form ref={name}/>
    </form>
    </>
  )
}

export default Home
