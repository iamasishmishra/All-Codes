import React, { useState } from 'react'
import '../Styles/AddProduct.css'
import axios from 'axios'

const AddProduct = () => {
  let [name, setName] = useState("")
  let [price, setPrice] = useState("")
  let [image, setImage] = useState("")

  let alldata = { name, price, image };

  let addProduct = ((e) => {
    e.preventDefault();
    axios.post('http://localhost:1000/Products', alldata)
      .then((res) => {
        console.log(res);
        alert("Saved Successfully")
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid data")
      })
  })

  return (
    <div className='addproduct'>
      <div className="form">
        <form action="" onSubmit={addProduct}>
          <label>
            Name: <input type="text" required placeholder='Enter product name' value={name} onChange={(e) => { setName(e.target.value) }} />
          </label> <br /><br />

          <label >
            Price: <input id='lebel2' type="text" required placeholder='Enter the price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
          </label> <br /> <br />

          <label>
            Image: <input type="text" required placeholder='Enter the image url' value={image} onChange={(e) => { setImage(e.target.value) }} />
          </label> <br /> <br />

          <div className="button">
            <button>Add Product</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AddProduct