import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { observer } from "mobx-react-lite";
import Header from "../header";
import Footer from "../footer";
const Layout = () => {
  // let location = useLocation();
  // const arr = location.pathname.split("/");
  // const in_progress = arr[arr.length - 1] === "in_progress";

  return (
    <>
      <Header />
      <main>
        <div className={isMobile ? "mobile_container" : "container"}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default observer(Layout);
