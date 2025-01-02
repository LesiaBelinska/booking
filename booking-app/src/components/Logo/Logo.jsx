import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logo}>
      <div className={s.circle} />
      <span className={s.text}>Booking</span>
    </div>
  );
};

export default Logo;
