import { IoAdd } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import type { Product } from "../pages/Search";
import Button from "./Button";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  product: Product[];
  setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterModal = ({ setModal, modal, product, setProduct }: Props) => {
  const lowestPriceHandle = () => {
    const lowestSort = [...product];
    lowestSort.sort((a, b) => a.price - b.price);
    setProduct(lowestSort);
  };

  const highestPriceHandle = () => {
    const highestSort = [...product];
    highestSort.sort((a, b) => b.price - a.price);
    setProduct(highestSort);
    console.log("first");
  };

  return (
    <div
      onClick={() => {
        setModal(!modal);
        console.log("wew");
      }}
      className="fixed inset-0 w-full h-full"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="lg:absolute lg:bottom-5 lg:right-10 bg-white rounded-sm shadow-xl text-sm w-full h-dvh mt-10 lg:mt-0 lg:h-70 lg:w-100 p-4 flex flex-col flex-1 overflow-y-auto"
      >
        <p className="mb-3">Sort by</p>
        <div className="text-gray-400 [&_button]:cursor-pointer [&_button]:mb-1 flex flex-col items-start">
          <button onClick={lowestPriceHandle}>Price (Lowest)</button>
          <button onClick={highestPriceHandle}>Price (Highest)</button>
        </div>
        <div className="border-b border-t divide-y border-gray-200 divide-gray-200 mt-2">
          <details className="group p-4">
            <summary className="flex items-center justify-between">
              <p>Size</p>
              <IoAdd className="group-[[open]]:hidden" />
              <LuMinus className="hidden group-[[open]]:block" />
            </summary>
            <div>
              {product.map((product) => (
                <div>{product.sizes}</div>
              ))}
            </div>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between">
              <p>Category</p>
              <IoAdd className="group-[[open]]:hidden" />
              <LuMinus className="hidden group-[[open]]:block" />
            </summary>
            wew
          </details>
        </div>
        {/* button */}
        <div className="flex items-center gap-2 mt-2 [&_button]:cursor-pointer [&_button]:flex-1 fixed bottom-0 left-0 w-full p-4 lg:static lg:p-0">
          <Button variant="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button>Show items ({product.length})</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
