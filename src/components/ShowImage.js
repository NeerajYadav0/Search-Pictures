function ShowImage({image}){
return(
    <div>
    <img alt={image.alt_description} src={image.urls.small}></img>
    </div>
)
}
export default ShowImage;