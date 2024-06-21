
import { fetchListOfProducts } from "@/actions"


export default async function ServerActionExample(){

  const products = await fetchListOfProducts()
  console.log(products)
  return(
    <div>
      <h1>Server Actions Example - server components</h1>
      <ul>
        {
          products && products.length>0 ?
          products.map(product=> <li>{product.title}</li>) : <h2>No Products Found</h2>
        }
      </ul>
    </div>
  )
}