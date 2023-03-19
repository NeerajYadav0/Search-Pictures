import { useState } from "react";
import './Searchbar.css';
function Search({onSubmit}){
    const handelSubmit=(event)=>{
            event.preventDefault();
            console.log(item);
           onSubmit(item);
    }
    const[item, setItem]= useState('');

    const handelChange=(event)=>{
        setItem(event.target.value);
    }
    
    return(
       
        <div className="search-bar">
            <form onSubmit={handelSubmit}>
                <label>Enter Search Term</label>
                <input value={item} onChange={handelChange}/>
            </form>
        </div>
    )
}
export default Search;