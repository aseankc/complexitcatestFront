// import logo from './logo.svg';
import './App.css';
import ListSearchResults from './components/ListSearchResults';
import SearchForm from './components/SearchForms';
import searchWeather from './services/SearchWeatherService';
import React, { useState , useEffect} from 'react';
import axios from 'axios';

const WEATHER_SEARCH_URL = 'http://localhost:8080/searchCity?';


const searchresultdummy= [{"id": 14,
  "name": "London",
  "countrycode": "GB",
  "pDate": "2021-05-24T15:00",
  "pTime": 15,
  "minTemp": 14.95,
  "maxTemp": 14.95,
  "clouds": null,
  "rain": null,
  "cold": null,
  "windspeed": 0.0,
  "weatherdesc": "light rain",
  "weathermain": "Rain",
  "avgTemp": 14.95
}];
    // const [searchDate,setSearchDate] = useState("");


function App() {
  const [searchResult,setSearchResult] = useState([]);
  const [searchItem,setSearchItem] = useState("");
  const [searchDate,setSearchDate] = useState("");
  const [search, setSearch] = useState(false);
 
  const noData =()=> (!searchResult || (searchResult.length === 0 ));

useEffect( () => {
  const config = {
    method:"get",
    url: WEATHER_SEARCH_URL+"city="+{searchItem}+"&date="+{searchDate},
    headers: {"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials":true
  }

  }
  const fetchData = async () => {
  const result = await axios(config);
  setSearchResult(result.data);
  console.log(searchResult);
    };
  fetchData();
},[setSearch]);

// const searchWeather =  (cityName,date) =>{
   
//   console.log(date+ cityName);
//   let data =[];
//   axios.get(WEATHER_SEARCH_URL,{params:{city:cityName,date:date}})
//   .then(res =>  {
//      data = res.data;
//   })
//   .catch(err => console.log(err));
//   console.log(data);
//   return data;
// }

const searchData=(searchItem,searchDate)=>{
  let data = searchWeather(searchItem,searchDate); 
}
  return (
    <div className="App">
      <h1 style={{ color: '#e96e50'}}>Weather Tool</h1>
      <div className="row">
          <div className="col-3">
                      <div>
                            <div >
                              <h3>Search City</h3>
                                    
                                    <div className="form-group">
                                        <input className="form-control" value={searchItem} type="text" placeholder="Type City" onChange={event=>setSearchItem(event.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="date" onChange={event=>setSearchDate(event.target.value)}/>
                                    </div>
                                        <button className="btn btn-primary btn-md" onClick={()=>{setSearch(true)}}>Submit</button>     
                                    </div>
                  
                            </div>
                      </div>
          
    
        <div className="col-9">
        <ListSearchResults tablecontent={searchResult} noData={noData}/>
     
      </div>
    
      </div>
   </div>
  );
}

export default App;
