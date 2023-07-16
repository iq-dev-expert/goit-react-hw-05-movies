import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header className="h-14 flex items-center px-5 shadow-md">
        <nav>
          <NavLink
            to="/"
            className="mr-2.5 text-lg font-medium no-underline text-inherit hover:text-violet-400 focus:text-violet-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="text-lg font-medium no-underline text-inherit hover:text-violet-400 focus:text-violet-400"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main className="px-5 py-5">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
