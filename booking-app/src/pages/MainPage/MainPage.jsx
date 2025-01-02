import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import s from "./MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <SearchForm />
      <div className={s.container}>
        Main Page
      </div>
    </>
  )
};

export default MainPage;
