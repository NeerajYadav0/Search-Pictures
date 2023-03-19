import axios from "axios";

const searchImage= async (type)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization : "Client-ID ydbzX79lSy5NFcdPrdtm8niIG4b797ZQb3z72skJMMg",
        },
        params:{
            query: type,
        },
    });
    return response.data.results;
}
export default searchImage;