import { CDN_URL } from "./Constant";
const ResturantCard = (props) => {
    const response = props.data;
  //  console.log(response)
return <div className="res-card" key = {response.info.id}>
    <div className="res-img">
        <img src={CDN_URL+response.info.cloudinaryImageId}/>
    </div>
    <h3>Name: {response.info.name}</h3>
    <h4>Cousines: {response.info.cuisines.join(", ")}</h4>
    <h4>Rating: {response.info.avgRating}</h4>
    <h4>Delivery: {response.info.sla.deliveryTime}mins</h4>
</div>
}
export default ResturantCard;