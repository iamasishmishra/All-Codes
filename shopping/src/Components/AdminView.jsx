import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/AdminView.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const AdminView = () => {
    let [data,setdata]=useState([])
    let [force,setforce] = useState(true)
    useEffect(()=>{
        axios.get('http://localhost:1000/Products')
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[force])


    let removeDish=(id,name)=>{
        axios.delete(`http://localhost:1000/Products/${id}`)
        .then((res)=>{
            alert(name + "Removed Successfully....")
            setforce(!force)
        })
        .catch((err)=>{
            alert("Data not found..")
        })
    }

    let navigate = useNavigate()

    function editproduct(id){
        navigate(`/adminhomepage/admineditproduct/${id}`)
    }
  return (
    <div className='adminViewPage'>
        {data.map((x)=>{
            return(
                <div className="diaplayproducts">
                    <img src={x.thumbnailUrl} alt="" id='imgviewpage'/>
                    <div className="reataurant">
                        <h4>{x.restaurant}</h4>
                        <b>{x.Ratings} <StarBorderIcon id="star"></StarBorderIcon></b>
                    </div>
                    <h5 className="">{x.name}</h5>
                    <strike><p>Rs.{x.price}.00</p></strike>
                    <span style={{fontWeight:"bold"}}>Rs.{x.price-x.price * 20/100}</span>
                    <br />
                    <div className="button">
                        
                        <EditIcon onClick={()=>{editproduct(x.id)}}/>
                        <DeleteIcon onClick={()=>{removeDish(x.id,x.name)}}/>
                        
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default AdminView