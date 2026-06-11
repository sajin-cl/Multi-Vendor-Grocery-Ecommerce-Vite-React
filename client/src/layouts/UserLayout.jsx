import { Outlet } from 'react-router-dom';
import UserHeader from '@/components/UserHeader';
import { useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";

function UserLayout() {


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