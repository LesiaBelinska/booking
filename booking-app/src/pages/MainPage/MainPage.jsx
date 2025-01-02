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
      <div className={s.container}>
        <h1 className={s.title}>Travel With Booking</h1>
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          tempore, magni tempora dolorem maiores numquam maxime fuga culpa
          accusamus incidunt sint quo quis atque eligendi, error iste corporis
          totam quidem delectus debitis commodi cumque aperiam! Alias, cum unde
          natus magnam voluptates ipsa porro adipisci eos.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
