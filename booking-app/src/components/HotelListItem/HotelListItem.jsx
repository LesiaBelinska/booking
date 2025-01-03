import PropTypes from "prop-types";

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

HotelListItem.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country_code: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
};

export default HotelListItem;
