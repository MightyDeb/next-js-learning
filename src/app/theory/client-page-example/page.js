'use client'

import { fetchListOfProducts } from "@/actions"
import { useEffect, useState } from "react"

export default function ClientPageExample(){
  const [products, setProducts]= useState([])

  async function getListOfProducts(){
    const data= await fetchListOfProducts()
    if(data)  setProducts(data)
  }
  useEffect(()=>{
    getListOfProducts()
  })
  return(
    <div>
      <h1>Client page server actions example</h1>
      <ul>
        {
          products && products.length>0 ?
          products.map(product=> <li>{product.title}</li>) : <h2>No Products Found</h2>
        }
      </ul>
    </div>
  )
}