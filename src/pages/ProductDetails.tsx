import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { MdAdd } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { useState } from "react";

interface CartItem {
  name: string;
  quantity: string;
  size: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const productItem = products.find((p) => p.title === id);
  const [count, setCount] = useState(0);

  const sizeOptions = productItem?.sizes ?? productItem?.waist_sizes; //?? means if the other item is null or undefined go to the next one

  if (!productItem) return <div>Product not found!</div>;

  const [cartItem, setCartItem] = useState({
    id: productItem?.id,
    name: productItem?.title,
    quantity: count,
    size: "",
  });

  const sizeHandle = (size: string) => {
    setCartItem((prev) => ({ ...prev, size: size }));
  };

  const hasItem = count > 0 && cartItem.size !== null;
  console.log(cartItem);
  return (
    <div className="mt-20 text-black flex flex-col items-center lg:flex-row max-w-7xl mx-auto px-3 mb-3">
      <div className="lg:w-[50%] flex justify-center">
        <img
          className="h-90"
          src={productItem?.image}
          alt={productItem?.title}
        />
      </div>

      <div className="w-full lg:w-[50%]">
        <p className="text-2xl">{productItem?.title}</p>
        <p className="text-gray-600 text-sm mb-4">₱{productItem?.price}</p>
        <p className="text-xs text-gray-600">{productItem?.description}</p>
        <div className="my-5">
          <p className="mb-2 mt-10">Size:</p>
          <div className="flex flex-wrap gap-2">
            {sizeOptions?.map((s) => (
              <button
                onClick={() => sizeHandle(s)}
                key={s}
                className={`${
                  cartItem.size === s
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } w-10 h-10 text-center cursor-pointer  transform transition-all duration-300`}
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
          disabled={!hasItem}
          className="hover:opacity-50 duration-300 disabled:hover:opacity-100 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600 w-full py-3 cursor-pointer bg-black text-white "
        >
          {hasItem ? "Add to bag" : "Choose size"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
