import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/ViewProduct.css'
import { useNavigate } from 'react-router-dom'

const ViewProduct = () => {
  let [data, setData] = useState([])
  let [force,setForce] = useState(true)

  // fetching the data from json 
  useEffect(() => {
    axios.get('http://localhost:1000/Products')
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
  }, [setForce])

  // delete or remove the product 
  let removeProduct = ((id, name) => {
    axios.delete(`http://localhost:1000/Products/${id}`)
      .then((res) => {
        console.log(res);
        alert(name + " Removed Successfully....")
        //  setForce(!force)
        setData(prevData => prevData.filter(product => product.id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Data not found..")
      })
  })

  // connecting to editproduct page 
  let navigate = useNavigate()
  
  function editproduct(id) {
    navigate(`/editproduct/${id}`)
  }

  return (
    <div className='viewproduct'>

      {data.map((x) => {
        return (
          <div className="display">
            <img src={x.image} alt="" />
            <h3>Name:  {x.name}</h3>
            <h3>Price:  {x.price}</h3> <br />
            <button onClick={() => { editproduct(x.id) }}>Edit</button>
            <button onClick={() => { removeProduct(x.id, x.name) }}>Delete</button>
          </div>
        )
      })

      }
    </div>
  )
}

export default ViewProduct