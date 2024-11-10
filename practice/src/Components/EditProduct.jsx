import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
  let [name, setName] = useState("")
  let [mark, setMark] = useState("")
  let [image, setImage] = useState("")
  let [regno, setRegno] = useState("")

  let param = useParams()
  console.log(param.id);

  useEffect(() => {
    axios.get(`http://localhost:1000/Products/${param.id}`)
      .then((res) => {
        setName(res.data.name)
        setImage(res.data.image)
        setMark(res.data.mark)
        setRegno(res.data.regno)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  let data = { name, image, mark,regno };

  let editItem = ((e) => {
    e.preventDefault()
    axios.put(`http://localhost:1000/Products/${param.id}`, data)
      .then((response) => {
        alert("Updated ..")
      })
      .catch((err) => {
        alert("Error updating")
      })
  })

  return (
    <div className='editproduct'>
      <Navbar />

      <div className="edit">
        <div className="form">
          <form action="" onSubmit={editItem}>
            <label >
              Name: <input type="text" required placeholder='Student name' value={name} onChange={(e) => { setName(e.target.value) }} />
            </label> <br />

            <label >
              Price: <input type="text" placeholder='Student Mark' value={mark} onChange={(e) => { setMark(e.target.value) }} />
            </label><br />

            <label >
              Image: <input type="text" placeholder='Student Image Url' value={image} onChange={(e) => { setImage(e.target.value) }} />
            </label> <br />

            <label >
              Regd. No: <input type="text" placeholder='Student Reg. no' value={regno} onChange={(e) => { setRegno(e.target.value) }} />
            </label> <br />

            <button>Edit Product</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default EditProduct