import { MdAdd } from "react-icons/md";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { Activity, useState } from "react";
import FilterModal from "../components/FilterModal";

const Shop = () => {
  const [modal, setModal] = useState(false);

  const modalHandle = () => {
    setModal(!modal);
    console.log("the button was clicked");
  };
  return (
    <div className="text-black max-w-7xl mx-auto px-8 mt-20">
      <h1 className="text-6xl sm:text-7xl mb-4 font-medium">Streetwear</h1>
      <p className="text-gray-600 mb-10">
        The essential drops, foundational pieces, and seasonal heat for every
        rotation.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {products.map((product) => (
          <Link
            className="w-full"
            key={product.id}
            to={`/shop/${product.title}`}
          >
            <div className="h-40 w-34 sm:h-80 sm:w-64 block mx-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-center object-contain bg-center block"
              />
            </div>
            <div className="text-sm">
              <p>{product.title}</p>
              <p className="text-gray-600 text-xs">₱{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        className="flex items-center font-medium text-sm fixed right-10 bottom-5 bg-white px-5 py-2 border border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer"
        onClick={modalHandle}
      >
        <MdAdd size={24} />
        Filter
      </button>
      <Activity mode={modal ? "visible" : "hidden"}>
        <FilterModal setModal={setModal} modal={modal} />
      </Activity>
    </div>
  );
};

export default Shop;
