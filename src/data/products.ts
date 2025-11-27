import AapeBlueShirt from "../assets/aape-blue-shirt.png";
import BapeHoodie from "../assets/bape-camouflage-hoodie.png";
import CarharttBlackShirt from "../assets/carhartt-black-shirt.png";
import CarharttGreyJacket from "../assets/carhartt-grey-jacket.png";
import EdHardyPants from "../assets/ed-hardy-pants.png";
import SeanBlackDenim from "../assets/sean-black-denim.png";
import StussyPupleSweatshirt from "../assets/stussy-purple-sweatshirt.png";
import TrueReligionCap from "../assets/true-religion-cap.png";

export const products = [
  {
    id: 1,
    title: "Carhartt Black Pocket T-Shirt",
    price: 1899.0,
    description:
      "A durable, comfortable, and stylish slim-fit black cotton t-shirt featuring a small chest pocket with the iconic Carhartt woven logo. Perfect for casual wear.",
    category: "men's clothing",
    image: CarharttBlackShirt,
    sizes: ["S", "M", "L", "XL", "2XL"],
    in_stock: true,
  },
  {
    id: 2,
    title: "True Religion Distressed Cap",
    price: 2499.0,
    description:
      "Vintage-look distressed baseball cap in taupe and navy with signature True Religion horseshoe logo embroidery on the front. Adjustable strap for a comfortable fit.",
    category: "accessories",
    image: TrueReligionCap,
    in_stock: true,
  },
  {
    id: 3,
    title: "Sean John Black Denim Wide-Leg Jeans",
    price: 4699.0,
    description:
      "Vintage black denim jeans with white contrast stitching, yellow 'Sean John' embroidery on the leg, and a relaxed wide-leg fit. Classic hip-hop inspired streetwear.",
    category: "men's clothing",
    image: SeanBlackDenim,
    waist_sizes: ["30", "32", "34", "36", "38"],
    in_stock: true,
  },
  {
    id: 4,
    title: "Stüssy Purple Crewneck Sweatshirt",
    price: 3899.0,
    description:
      "Soft fleece crewneck sweatshirt in a vibrant lilac/purple color, featuring the classic Stüssy block logo embroidered across the chest. Ideal for layering.",
    category: "unisex clothing",
    image: StussyPupleSweatshirt,
    sizes: ["S", "M", "L", "XL"],
    in_stock: true,
  },
  {
    id: 5,
    title: "BAPE Camouflage Full-Zip Hoodie",
    price: 13799.0,
    description:
      "Authentic A Bathing Ape (BAPE) full-zip hoodie featuring the classic BAPE camo pattern and prominent 'BAPE' lettering across the front. Warm and heavy cotton blend.",
    category: "men's clothing",
    image: BapeHoodie,
    sizes: ["M", "L", "XL"],
    in_stock: true,
    is_exclusive: true,
  },
  {
    id: 6,
    title: "Carhartt Grey Denim Work Jacket",
    price: 6599.0,
    description:
      "Heavy-duty Carhartt work jacket in faded grey denim with a grey corduroy collar. Features a full zip-front and multiple pockets. Built for durability and style.",
    category: "men's clothing",
    image: CarharttGreyJacket,
    sizes: ["M", "L", "XL", "2XL"],
    in_stock: true,
    is_on_sale: false,
  },
  {
    id: 7,
    title: "AAPE By A Bathing Ape Navy Logo T-Shirt",
    price: 2399.0,
    description:
      "Navy blue cotton T-shirt from AAPE (A Bathing Ape) featuring a large circular camo-print logo graphic on the chest with 'AAPE NOW!' text. Regular fit.",
    category: "men's clothing",
    image: AapeBlueShirt,
    sizes: ["S", "M", "L"],
    in_stock: true,
  },
  {
    id: 8,
    title: "Ed Hardy Blue Embroidered Denim Jeans",
    price: 5799.0,
    description:
      "Y2K-era Ed Hardy blue denim jeans with heavy fading and distressed details. Features large, elaborate white embroidery on the lower leg and back pockets.",
    category: "men's clothing",
    image: EdHardyPants,
    waist_sizes: ["28", "30", "32", "34"],
    in_stock: false,
  },
];
