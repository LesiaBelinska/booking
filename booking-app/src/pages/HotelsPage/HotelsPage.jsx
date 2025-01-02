import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchHotels } from "../../redux/bookingThunk.js";
import HotelList from "../../components/HotelList/HotelList.jsx";

import s from "./HotelsPage.module.css";

const HotelsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { hotels, loading } = useSelector(
    (state) => state.booking
  );
  const searchCriteria = location.state?.searchCriteria;

  useEffect(() => {
    if (searchCriteria?.destination) {
      dispatch(searchHotels(searchCriteria.destination));
    }
  }, [dispatch, searchCriteria]);


  return (
    <div className={s.container}>
      <h3 className={s.title}>Hotels</h3>
      {loading && <p>Loading...</p>}
      {!hotels ||
        (hotels.length === 0 && (
          <p className={s.noHotels}>No hotels found for your search.</p>
        ))}
      {!loading && hotels.length > 0 && <HotelList />}
    </div>
  );
};

export default HotelsPage;
