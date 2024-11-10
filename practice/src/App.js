// import { BrowserRouter,Routes, Route } from "react-router-dom";
// import AddProduct from "./Components/AddProduct";
// import ViewProduct from "./Components/ViewProduct";
// import EditProduct from "./Components/EditProduct";
// import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          
          <Route path="/viewproduct" element={<ViewProduct/>}/>
          
          <Route path="/editproduct/:id" element={<EditProduct/>}/>
          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
