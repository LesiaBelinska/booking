import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations, searchHotels } from "../../redux/bookingThunk.js";

import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import HotelList from "../../components/HotelList/HotelList.jsx";

import s from "./MainPage.module.css";

const MainPage = () => {

  const dispatch = useDispatch();
  const { destinations, hotels, loading, error } = useSelector(
    (state) => state.booking
  );

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  const handleSearch = (values) => {
    dispatch(searchHotels(values.destination));
  };

  return (
    <div className={s.pageWrapper}>
      <SearchForm onSubmit={handleSearch} destinations={destinations} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && hotels.length > 0 && <HotelList />}
    </div>
  );
};

export default MainPage;
