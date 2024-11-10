import React, { useEffect, useState } from 'react'
import '../Styles/Adminaddproduct.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    // js part 
    let [category,setcategory] = useState("")
    let [restaurant, setrestaurant] = useState("")
    let [name, setname] = useState("")
    let [price, setprice] = useState("")
    let [Ratings, setrating] = useState("")
    let [Quantity, setquantity] = useState("")
    let [Description, setdescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let param = useParams()
    console.log(param.id);

    useEffect(()=>{
        axios.get(`http://localhost:1000/Products/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setcategory(res.data.category)
            setthumbnailUrl(res.data.thumbnailUrl)
            setname(res.data.name)
            setdescription(res.data.Description)
            setprice(res.data.price)
            setrating(res.data.Ratings)
            setquantity(res.data.Quantity)
            setrestaurant(res.data.restaurant)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    let data = {name,category,price,Ratings,Quantity,restaurant,thumbnailUrl,Description}

    let edititem = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:1000/Products/${param.id}`,data)
        .then((res)=>{
            alert("Data updated Successfully")
        })
        .catch((err)=>{
            alert("error found")
        })
    }

  return (
    <div className="additem">
        <h2 style={{color:"blue"}}>Edit Products </h2>
        <form action="" onSubmit={edititem}>
            <label htmlFor="" className='additems'>Category : 
                <select value={category} onChange={(e)=>{setcategory(e.target.value)}} required>
                    <option>Starters</option>
                    <option>Veg</option>
                    <option>Non-Veg</option>
                    <option>Seafood</option>
                    <option>Chinese</option>
                    <option>Breads</option>
                    <option>Breverages</option>
                    <option>Desserts</option>
                </select>
            </label>

            <br />
            <label htmlFor="">
                Restaurant Name: <input type="text" placeholder='Enter the Restaurnt Name' value={restaurant} onChange={(e)=>{setrestaurant(e.target.value)}} required/>
            </label>

            <label htmlFor="">
                Dish Name: <input type="text" placeholder='Enter the Dish Name' value={name} onChange={(e)=>{setname(e.target.value)}} required/>
            </label>

            <label htmlFor="">
                Cost Price: <input type="text" placeholder='Enter the Cost Price' value={price} onChange={(e)=>{setprice(e.target.value)}} required/>
            </label>

            <label htmlFor="">
                Quantity: <input type="number" value={Quantity} onChange={(e)=>{setquantity(e.target.value)}} required/>
            </label>

            <label htmlFor="">
                Description: <textarea name="" id="" cols="20" rows="2" placeholder='Enter the Special Receipies' value={Description} onChange={(e)=>{setdescription(e.target.value)}} required></textarea>
            </label>

            <label htmlFor="">
                ThumbNail: <input type="text" placeholder='Enter the Image Url' value={thumbnailUrl} onChange={(e)=>{setthumbnailUrl(e.target.value)}} required/>
            </label>

            <label htmlFor="">
                Ratings: <input type="number" value={Ratings} onChange={(e)=>{setrating(e.target.value)}} required/>
            </label>

            <button className="btnadddish" id='bottonadddish'>Edit</button>
        </form>
        
    </div>
  )
}

export default EditProduct