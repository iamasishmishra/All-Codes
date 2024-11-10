import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Styles/AddProduct.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
  let [name, setName] = useState("")
  let [price, setPrice] = useState("")
  let [image, setImage] = useState("")


  let param =useParams()
  console.log(param.id);

  useEffect(()=>{
    axios.get(`http://localhost:1000/Products/${param.id}`)
    .then((response)=>{
       console.log(response.data);
       setName(response.data.name)
       setPrice(response.data.price)
       setImage(response.data.image)
 
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  let data = {name, price, image};

  let editItem = ((e)=>{
    e.preventDefault();
    axios.put(`http://localhost:1000/Products/${param.id}`,data)
    .then((res)=>{
      alert("Data updated ..")
    })
    .catch((err)=>{
      alert("Error updating")
    })
  })

  return (
    <div className='editproduct'>
      <div className="form">
        <form action="" onSubmit={editItem}>
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
            <button>Edit Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct