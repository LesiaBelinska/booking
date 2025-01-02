import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getDestinations, searchHotels } from "../../redux/bookingThunk.js";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";

import s from "./MainPage.module.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.booking);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  const handleSearch = (values) => {
    dispatch(searchHotels(values.destination));
    navigate("/hotels", { state: { searchCriteria: values } });
  };

  return (
    <div className={s.pageWrapper}>
      <SearchForm onSubmit={handleSearch} destinations={destinations} />
      <div className={s.container}></div>
    </div>
  );
};

export default MainPage;
