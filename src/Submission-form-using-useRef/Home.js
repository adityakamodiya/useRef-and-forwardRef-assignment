import React, { useRef } from 'react'

function Home() {
  let name = useRef()
  console.log('hello')
  function FormData(e){
    e.preventDefault()
    console.log(name.current.value)   
  }
  return (
    <>
    <form onSubmit={FormData}>
      <input  type='text' ref={name} placeholder='write your name'></input>
      <input type='submit'></input>
    </form>
    </>
  )
}

export default Home
