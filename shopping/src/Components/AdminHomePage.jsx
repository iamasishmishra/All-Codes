import React from 'react'
import AdminNavbar from './AdminNavbar'
import {Routes,Route} from 'react-router-dom'
import AdminView from './AdminView'
import AdminAddProduct from './AdminAddProduct'
import EditProduct from './EditProduct'

const AdminHomePage = () => {
  return (
    <div>
        <AdminNavbar/>
        <Routes>
          <Route path='/adminview' element={<AdminView/>}></Route>
          <Route path='/adminaddproduct' element={<AdminAddProduct/>}></Route>
          <Route path='/admineditproduct/:id' element={<EditProduct/>}></Route>
        </Routes>
    </div>

  )
}

export default AdminHomePage