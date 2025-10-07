import ResturantCard from '../components/ResturantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
const Body =  () => {
    console.log('IN body')

    const [listofRest,setData] = useState([])
    const [searchVal,setsearchVal] = useState("")
    const [filteresRest,setfilteresRest] = useState()

   let getTopResfiltered = () => {
    setfilteresRest(listofRest.filter((val)=>{
        return val.info.avgRating > 4
            }));
    }

    const fetchData = async () =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6147783&lng=77.23534579999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data1 = await response.json();
        console.log(response)
        console.log(data1)
        setData(data1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteresRest(data1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     }

     const getSearchResfiltered = () => {
      const filteresList = listofRest.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchVal.toLowerCase())
        });
        setfilteresRest(filteresList);
     }

     useEffect(() => {
        fetchData();
      }, []);
      
    //This is conditonal rendering
    if(listofRest.length === 0){
        return <Shimmer/>
    }



    return <div className="body">

<div className="top-res">
<div className="search">
   <input type='text' value={searchVal} onChange={(e)=>{setsearchVal(e.target.value)}} />
   <button onClick={()=>getSearchResfiltered()}>search</button>
</div >
<div> <button onClick={()=>getTopResfiltered()}>Top Restaurant</button></div>
</div >
<div className="res-conatiner">
    {
        filteresRest.map((restru) => {
           return <ResturantCard key={restru.info.id} data= {restru} />
        })
    }
{/* {Data.map((restu)=>{
        <ResturantCard data= {restu} />
    })} */}
    
</div>

</div>
}
export default Body;