import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { MdAdd } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { useState } from "react";

const ProductDetails = () => {
  const { id: product } = useParams();
  const productItem = products.find((p) => p.title === product);

  const [count, setCount] = useState(0);
  return (
    <div className="mt-20 text-black flex max-w-7xl mx-auto px-3">
      <div className="w-[50%] flex justify-center">
        <img
          className="h-90"
          src={productItem?.image}
          alt={productItem?.title}
        />
      </div>

      <div className="w-[50%]">
        <p className="text-2xl">{productItem?.title}</p>
        <p className="text-gray-600 text-sm mb-4">₱{productItem?.price}</p>
        <p className="text-xs text-gray-600">{productItem?.description}</p>
        <div className="my-5">
          <p className="mb-2 mt-10">Size:</p>
          <div className="flex flex-wrap gap-2">
            {productItem?.sizes?.map((s) => (
              <button
                key={s}
                className="w-10 h-10 text-center cursor-pointer hover:bg-gray-300 bg-gray-200"
              >
                {s}
              </button>
            )) ||
              productItem?.waist_sizes?.map((s) => (
                <button
                  key={s}
                  className="w-10 h-10 text-center cursor-pointer hover:bg-gray-300 bg-gray-200"
                >
                  {s}
                </button>
              ))}
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <p>Quantity:</p>
          <div className="flex items-center text-center mt-2">
            <button
              onClick={() => setCount((prev) => prev - 1)}
              disabled={count === 0}
              className="w-10 bg-gray-200 h-10 items-center hover:bg-gray-300 flex justify-center cursor-pointer disabled:cursor-not-allowed disabled:text-gray-600"
            >
              <GoDash />
            </button>
            <span className="w-10">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="w-10 bg-gray-200 h-10 items-center hover:bg-gray-300 flex justify-center cursor-pointer"
            >
              <MdAdd />
            </button>
          </div>
        </div>
        <button
          disabled
          className="hover:opacity-50 duration-300 disabled:hover:opacity-100 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600 w-full py-3 cursor-pointer bg-black text-white "
        >
          Choose Size
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
