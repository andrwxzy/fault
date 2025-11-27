import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const location = useLocation();

  const bg = location.pathname === "/" && "bg-[url(./assets/home-bg.png)]";

  return (
    <div
      className={`${bg} w-full min-h-dvh overflow-hidden bg-cover bg-no-repeat text-white`}
    >
      <header>
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
