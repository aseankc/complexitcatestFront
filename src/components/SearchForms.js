import React, { useState } from 'react';
import searchWeather from '../services/SearchWeatherService';

const SearchForm = (setResult) =>{
    const [searchItem,setSearchItem] = useState("");
    const [searchDate,setSearchDate] = useState("");
    // const [searchResult,setSearchResult]= useState("");
    const callApi = (e) =>{
        e.preventDefault();
        console.log({searchDate});
        console.log({searchItem});
        let searchResult=searchWeather(searchItem,searchDate);
        setResult(searchResult);
    }
    return(
   <div>
       <div >
       <h3>Search City</h3>
            
            <div className="form-group">
                <input className="form-control" value={searchItem} type="text" placeholder="Type City" onChange={event=>setSearchItem(event.target.value)}/>
            </div>
            <div className="form-group">
                <input className="form-control" type="date" onChange={event=>setSearchDate(event.target.value)}/>
            </div>
                <button className="btn btn-primary btn-md" onClick={callApi}>Submit</button>
              
        </div>
        
    </div>
    );
}

export default SearchForm;