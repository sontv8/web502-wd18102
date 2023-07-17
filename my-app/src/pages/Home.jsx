import React from 'react'
import { useState } from 'react'

const HomePage = ({ data }) => {
    const [products, setProducts] = useState(data)
    const addProduct = (product) => {
        // product : {id,name,price}
        setProducts([...products, product])
    }
    return (
        <div>
            <button onClick={() => addProduct({ id: 4, name: "Product 4", price: 400 })}>Add New</button>
            {products.map((product, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage