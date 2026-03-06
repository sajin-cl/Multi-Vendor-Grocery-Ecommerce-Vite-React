import { Outlet } from 'react-router-dom'
import UserHeader from '@/components/UserHeader';


function UserLayout() {

  const userRole = "customer"; 
  useEffect(() => {
    if (userRole === "customer") {
      const script = document.createElement("script");
      script.src = "//code.tidio.co/cngwrmvpafnjqjkafhuq1wtzxk1y94um.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [userRole]);
  return (

    <>
      <UserHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default UserLayout;