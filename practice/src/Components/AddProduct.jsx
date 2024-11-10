import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const AddProduct = () => {

    let [name, setName] = useState("")
    let [mark, setMark] = useState("")
    let [image, setImage] = useState("")
    let [regno, setRegno] = useState("")

    let alldata = { name, mark, image,regno };

    let addProduct = ((e) => {
        e.preventDefault();
        axios.post('http://localhost:1000/Products', alldata)
            .then((res) => {
                console.log(res);
                alert("Saved Successfully")
            })
            .catch((err) => {
                console.log(err);
            })
    })


    return (
        <div className='addproduct'>
            <Navbar/>
            <div className="form">
                <form action="" onSubmit={addProduct}>
                    <label >
                        Name: <input type="text" required placeholder='Student name' value={name} onChange={(e) => { setName(e.target.value) }} />
                    </label> <br />

                    <label >
                        Mark: <input type="text" placeholder='Student mark' value={mark} onChange={(e) => { setMark(e.target.value) }} />
                    </label><br />

                    <label >
                        Image: <input type="text" placeholder='Student Image Url' value={image} onChange={(e) => { setImage(e.target.value) }} />
                    </label> <br />

                    <label >
                        Regist. No: <input type="text" placeholder='Student Reg. No' value={regno} onChange={(e) => { setRegno(e.target.value) }} />
                    </label> <br />

                    <button>Add Student</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct