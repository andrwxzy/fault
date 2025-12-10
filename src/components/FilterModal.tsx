import { IoAdd } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}

const FilterModal = ({ setModal, modal }: Props) => {
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
        className="absolute bottom-5 right-10 bg-white rounded-sm shadow-md text-sm w-full h-full lg:h-50 lg:w-50 p-4"
      >
        <p className="mb-3">Sort by</p>
        <div className="text-gray-400 [&_p]:cursor-pointer [&_p]:mb-1">
          <p>Price (Lowest)</p>
          <p>Price (Highest)</p>
        </div>
        <div className="border-b border-t divide-y border-gray-200 divide-gray-200">
          <details className="group">
            <summary className="flex items-center justify-between">
              <p>Size</p>
              <IoAdd className="group-[[open]]:hidden" />
              <LuMinus className="hidden group-[[open]]:block" />
            </summary>
          </details>
          <details className="group">
            <summary className="flex items-center justify-between">
              <p>Category</p>
              <IoAdd className="group-[[open]]:hidden" />
              <LuMinus className="hidden group-[[open]]:block" />
            </summary>
            wew
          </details>
        </div>
        {/* button */}
        <div className="flex items-center [&_button]:cursor-pointer [&_button]:flex-1">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button>Show items</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
