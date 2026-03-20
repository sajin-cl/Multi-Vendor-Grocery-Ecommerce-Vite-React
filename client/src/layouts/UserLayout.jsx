import { Outlet } from 'react-router-dom';
import UserHeader from '@/components/UserHeader';
import { useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";

function UserLayout() {
  const { role } = useAuth();

  useEffect(() => {
    if (!role) return;

    if (role !== 'admin' && role !== 'seller') {

      const script = document.createElement("script");
      script.id = "tidio-script";
      script.src = "//code.tidio.co/cngwrmvpafnjqjkafhuq1wtzxk1y94um.js";
      script.async = true;
      document.body.appendChild(script);
    }
    else {
      const script = document.createElement("script");
      if (script) script.remove();
    }

  }, [role]);

  return (
    <>
      <UserHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default UserLayout;