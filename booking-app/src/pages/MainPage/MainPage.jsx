import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import s from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={s.container}>
      <SearchForm />
      Main Page
    </div>
  )
};

export default MainPage;
