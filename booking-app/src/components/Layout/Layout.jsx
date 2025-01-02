import { Outlet } from "react-router-dom";

import AppBar from "../AppBar/AppBar.jsx";
import Container from "../Container/Container.jsx";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
