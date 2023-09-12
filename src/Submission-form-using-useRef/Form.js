import { forwardRef, useImperativeHandle } from 'react'
import React from 'react'
// import Home from './Home'

function Form( props,ref) {
    useImperativeHandle(ref,()=>{
        FormData
    })
    function FormData(e){
        e.preventDefault()
        console.log(ref.current.value)   
      }
  return (
    <></>
  )
}

export default forwardRef(Form)
