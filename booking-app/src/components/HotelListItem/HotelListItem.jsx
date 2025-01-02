import s from "./HotelListItem.module.css";

const HotelListItem = ({ hotel }) => {
  return (
    <div className={s.hotelItem}>
      <img src={hotel.image} alt={hotel.name} className={s.image} />
      <h3 className={s.title}>{hotel.name}</h3>
      <p className={s.address}>
        <strong>Address:</strong> {hotel.address}
      </p>
      <p className={s.details}>
        <strong>City:</strong> {hotel.city}, <strong>State:</strong>{" "}
        {hotel.state || "N/A"}, <strong>Country:</strong> {hotel.country_code}
      </p>
    </div>
  );
};

export default HotelListItem;
