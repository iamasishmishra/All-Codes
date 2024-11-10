import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/Adminaddproduct.css'
import axios from 'axios'
const AdminAddProduct = () => {
    // usestate 
    let  [category,setcategory] = useState("")
    let [restaurant, setrestaurant] = useState("")
    let [name, setname] = useState("")
    let [price, setprice] = useState("")
    let [Ratings, setrating] = useState("")
    let [Quantity, setquantity] = useState("")
    let [Description, setdescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let allproducts = {category,restaurant,name,price,Ratings,Quantity,Description,thumbnailUrl};

    let postproducts = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:1000/Products",allproducts)
        .then((res)=>{
            console.log(res);
            alert("Produs dish added Successfully..")
        })
    
        .catch((err)=>{
            console.log("Invalid data");
        })
    }

  return (
    <div className='additem'>
        <h2 style={{color:"blue"}}>Add Products</h2>
        <form action="" onSubmit={postproducts}>
            <label htmlFor="" className='Additemlabel'>Category : 
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

            <button className='btnaddproduct'>Add Dish</button>
        </form>
    </div>
  )
}

export default AdminAddProduct