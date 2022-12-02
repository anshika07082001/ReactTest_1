import React from 'react'

const Products = (props) => {
  return (
   <>
   <h1>Products List</h1>
   <select onChange={props.mainSelectHandler}>
    {props.data.map((item,i)=>{
        return <option index={i}>{item}</option>
    })}
   </select>
   {props.category1.length!==0?
   <select>
    {props.category1.map((item,i)=>{
        return <option index={i}>{item}</option>
    })}
   </select>:
   <p></p>}
   </>
  )
}

export default Products