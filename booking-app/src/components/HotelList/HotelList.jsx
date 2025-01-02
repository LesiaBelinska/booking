import { useSelector } from "react-redux";

import HotelListItem from "../HotelListItem/HotelListItem.jsx";
import s from "./HotelList.module.css";

const HotelList = () => {
  const { hotels } = useSelector((state) => state.booking);
  
  if (!hotels || hotels.length === 0) {
    return <p>No hotels found. Please refine your search.</p>;
  }

  return (
    <div className={s.hotelList}>
      {hotels.map((hotel) => (
        <HotelListItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
