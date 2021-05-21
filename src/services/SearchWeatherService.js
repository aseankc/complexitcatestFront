
import axios from 'axios';

const WEATHER_SEARCH_URL = 'http://localhost:8080/searchCity';
const SAVE_ITENARY_URL= 'http://localhost:8080/saveItenary';

const searchWeather =  (cityName,date) =>{
   
    console.log(date+ cityName);
    let data =[];
    axios.get(WEATHER_SEARCH_URL,{params:{city:cityName,date:date}})
    .then(res =>  {
       data = res.data;
    })
    .catch(err => console.log(err));
    console.log(data);
    return data;
}

const saveItenary = () => (
     axios.post(SAVE_ITENARY_URL,)
);
export default searchWeather;