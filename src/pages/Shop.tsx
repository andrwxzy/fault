import { MdAdd } from "react-icons/md";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="text-black max-w-7xl mx-auto px-8 mt-20 overflow-y-auto">
      <h1 className="text-7xl mb-4 font-medium">Streetwear</h1>
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
            <div className="h-80 w-64 block mx-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-center object-contain bg-center block"
              />
            </div>
            <div>
              <p>{product.title}</p>
              <p className="text-gray-600 text-sm">₱{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <button className="flex items-center font-medium text-sm fixed right-10 bottom-5 bg-white px-5 py-2 border border-gray-400 rounded-full">
        <MdAdd size={24} />
        Refine
      </button>
    </div>
  );
};

export default Shop;
