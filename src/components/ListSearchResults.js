import React from 'react';
 
const dataKeys=[
    "pDate", "name", "countrycode","avgTemp","weatherdesc","weathermain",
    "pTime", "minTemp", "maxTemp","clouds","rain" 
];
const searchresultdummy= [
    {   "id": 14,
        "name": "London",
        "countrycode": "GB",
        "pDate": "2021-05-24T15:00",
        "pTime": 15,
        "minTemp": 14.95,
        "maxTemp": 14.95,
        "windspeed": 0.0,
        "weatherdesc": "light rain",
        "weathermain": "Rain",
        "avgTemp": 14.95
}];

const ListSearchResults = (tablecontent,noData) =>(
   
<div>
                <h3>Search Result</h3>
                
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>City</th>
                                <th>Weather</th>
                                <th>Avg Temp</th>
                                <th>Min Temp</th>
                                <th>Max Temp</th>
                                
                                

                            </tr>
                        </thead>
                        <tbody>
                        {!noData && tablecontent.map((item,index) =>(
                                <tr key ={index}>
                                    <td>{item.pDate}</td>
                                    <td>{item.name},{item.countrycode}</td>
                                    <td>{item.weathermain}</td>
                                    <td>{item.avgTemp} &#8451;</td>
                                    <td>{item.minTemp} &#8451;</td>
                                    <td>{item.maxTemp} &#8451;</td>
                                    
                                   
                                </tr>
                            ) )}
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            
    );


export default ListSearchResults;