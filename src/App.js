import Search from "./components/Search";
import searchImage from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList"
function App() {
  const [image, setImage]= useState([]);
  const handelSubmit= async (type)=>{
    const result= await searchImage(type);
    console.log(result)
    setImage(result);
  }
  return (  <div>
   <Search onSubmit={handelSubmit} ></Search>
   <ImageList result={image}></ImageList>
   </div>)
}

export default App;
