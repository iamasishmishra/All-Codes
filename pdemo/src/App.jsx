import ClassBased from "./Components/ClassBased"
import Container from "./Components/Container"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import Props from "./Components/Props"
import A from "./Components/A"
import PropsChildren from "./Components/PropsChildren"
import FetchData from "./Components/FetchData"
import FetchUser from "./Components/FetchUser"

function App() {

  let student = {
    id: 1,
    name: "Utkal",
    friend: "Thokari"
  }

  return (
    <div>

      {/* <NavBar/>

      <Container/>

      <Footer/> */}

      {/* <ClassBased/> */}

      {/* <Props  data = {student}/> */}

      {/* <Props data= "Galaxy"/>

      <Props  data = "Universe"/> */}


      {/* <A data = "Hiii"/> */}

      {/* <PropsChildren data = "hi"> Hello World</PropsChildren> */}

      {/* <FetchData/> */}

      <FetchUser/>
      

    </div>
  )
}

export default App
