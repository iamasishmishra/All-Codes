// import React, { useEffect, useState } from 'react'
import '../Styles/AdminDashBoard.css'
// import axios from 'axios'
import ViewBus from './ViewBus'
import '../Styles/ViewBus.css'
// import backgroundVideo from '../Assets/Videos/busadd3.mp4';

export const AdminDashBoard = () => {
  // let [bus, setbus] = useState([])

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/api/buses`)
  //     .then((res) => {
  //       console.log(res);
  //       setbus(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, [])

  return (
    <div className='admindashboard'>
      {/* <video autoPlay loop muted className="background-video" >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <ViewBus />

      <div className="maincontent">

      {/* <ViewBus /> */}
        {/* {bus.map((item) => {
          return (
            <div className="busdetails">
              <h4>{item.name}</h4>
              <i>Total Seats: {item.no_of_seats}</i>
              <p>From: {item.from_loc}</p>
              <p>To: {item.to_loc}</p>
              <p>Date: {item.dod}</p>
              <p>Bus Number: {item.bus_number}</p>
              <button>Book Seat</button>

            </div>
          )
        })} */}
      </div>

    </div>
  )
}
