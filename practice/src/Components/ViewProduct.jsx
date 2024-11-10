import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import '../Styles/ViewProduct.css'
import { useNavigate } from 'react-router-dom'

const ViewProduct = () => {

    let [data,setData] = useState([])
    let [setForce] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:1000/Products')
        .then((response)=>{
         console.log(response.data);
         setData(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[setForce])

    let removeProduct = ((id,name)=>{
        axios.delete(`http://localhost:1000/Products/${id}`)
     .then((res)=>{
          console.log(res);
           alert(name + " Removed Successfully....")
          //  setForce(!force)
          setData(prevData => prevData.filter(product => product.id !== id));
        })
     .catch((err)=>{
          console.log(err);
        })
    })

    let navigate  = useNavigate()
    function editproduct(id){
        navigate(`/editproduct/${id}`)
        // navigate(`/editstudent/${id}`)
    }

  return (
    <div className="fullcontent">
        <Navbar />
        <div className='viewproduct'> 
        {data.map((x)=>{
            return(
                <div className="content">
                    <img src={x.image} alt="" />
                    <h3>Name:  {x.name}</h3>
                    <h4>Mark: {x.mark}</h4>
                    <h4>Reg No: {x.regno}</h4>
                    <button onClick={()=>{editproduct(x.id)}}>Edit Student</button>
                    <button onClick={()=>{removeProduct(x.id,x.name)}}>Delete Student</button>
                </div>
            )
        })
        }
    </div>
    </div>
  )
}

export default ViewProduct