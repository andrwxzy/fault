import { FaFilter } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { products, category } from "../data/products";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes?: string[];
  waist_sizes?: string[];
  is_exclusive?: boolean;
  is_on_sale?: boolean;
}

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [categoryFiltered, setCategory] = useState<string[]>([]);

  // search function
  useEffect(() => {
    if (query?.trim() === "") {
      setResult([]);
      return;
    }
    const filtered = products.filter((p) =>
      p.category.toLowerCase().includes(query?.toLowerCase())
    );
    setResult(filtered);
  }, [query]);

  // category
  // const handleCategory = (c: string) => {
  //   setCategory((prev) => prev.includes(c) ? prev.filter((npm run dcat) => cat !== category) : [...prev, c];
  // };
  return (
    <div className="flex gap-2 justify-center">
      <nav className="fixed top-0 left-0 w-full flex items-center gap-50 justify-between shadow-sm max-w-7xl mx-auto px-3 py-3 bg-white">
        <Link to="/" className="hidden lg:block text-3xl">
          FAULT
        </Link>
        <div className="flex items-center grow">
          <form className="flex items-center grow gap-1">
            <IoMdSearch size={24} />
            <input
              type="search"
              placeholder="Search for products"
              className="[&::-webkit-search-cancel-button]:hidden py-2 text-sm grow placeholder:font-medium placeholder:text-sm focus:outline-0"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <button className="cursor-pointer" onClick={() => navigate(-1)}>
            <IoClose size={24} />
          </button>
        </div>
      </nav>
      <aside className="w-[30%] mt-20 hidden lg:flex flex-col gap-y-10 pl-3 mr-5 bg-white">
        <div className="fixed top-20 left-3">
          <h2 className="flex items-center text-2xl">
            <FaFilter />
            FILTER BY
          </h2>
          <form action="">
            <div>
              <label className="">PRICE RANGE</label>
              <div className="mt-2 flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="[&::-webkit-inner-spin-button]:hidden border border-gray-300 px-1 py-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="[&::-webkit-inner-spin-button]:hidden border border-gray-300 px-1 py-2 rounded-md"
                />
                <input
                  type="submit"
                  value="Apply"
                  className="bg-black text-white px-2.5 cursor-pointer rounded-md font-light"
                />
              </div>
            </div>
          </form>
          <div>
            <p>CATEGORY</p>
            {category.map((c) => (
              <div key={c}>
                <div className="flex items-center gap-2">
                  {/* <input type="checkbox" name="" onChange={handleCategory(c)} /> */}
                  <p className="uppercase font-light">{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="w-[70%] mt-20 grid grid-cols-2 gap-x-4 gap-y-8">
        {result.map((product) => (
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
    </div>
  );
};

export default Search;
