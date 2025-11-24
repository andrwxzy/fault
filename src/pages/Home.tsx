import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute left-0 bottom-0 bg-linear-to-t from-black/80 to-transparent w-full h-55" />
      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6 w-full">
        <h2 className="text-5xl">Don't Sleep: These styles sell out fast.</h2>
        <Link
          to="/shop"
          className="flex items-center text-sm gap-1 hover:text-gray-400 w-max"
        >
          Shop now <MdArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Home;
