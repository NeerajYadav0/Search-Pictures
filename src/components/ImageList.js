import ShowImage from "./ShowImage";
import './Image-list.css'
function ImageList({result})
{
   const List = result.map((image)=>{
      return  <ShowImage key={image.id} image={image}></ShowImage>
      
   })
   return (
    <div className="image-list">{List}</div>
   )
}
export default ImageList;