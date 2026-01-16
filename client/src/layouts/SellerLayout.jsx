import { Outlet } from "react-router-dom";
import SellerHeader from "../components/SellerHeader";

function SellerLayout() {

  return (
    <>
      <SellerHeader />
      <main className="seller-content" >
        <Outlet />
      </main>
    </>
  )
};

export default SellerLayout;