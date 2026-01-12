import { Outlet } from "react-router-dom";

function SellerLayout() {

  return (
    <>
      <main>
        <h2>Seller layout</h2>
        <Outlet />
      </main>
    </>
  )
};

export default SellerLayout;