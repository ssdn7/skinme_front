import React from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const products = [
    {
      id: 1,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
      productdescriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SOLD",
      price: 30,
      oldPrice: 45,
      productdescriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      image:
        "https:sokoskins.shop/cdn/shop/files/thumb-02_405x405_c83d7242-a942-4488-8c8e-fd1560acff91_405x.jpg?v=1682600891",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SOLD",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 4,
      image:
        "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ149u_PSE1HoSDXR-GV9YDyblzMwfI7_H69w&usqp=CAU",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 5,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 6,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 7,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 8,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 9,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 10,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
      productdescriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 11,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
      productdescriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 12,
      image:
        "https:moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
      productdescriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        {products.map((detail) => (
          <div
            key={detail.id}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {id == detail.id && (
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={detail.image}
                      alt=""
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    {" "}
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-pink-500 dark:bg-pink-500 text-white py-2 px-4 rounded-full font-bold hover:bg-pink-800 dark:hover:bg-pink-700">
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                        Add to Favorite
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {detail.brand}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {detail.description}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {detail.price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {detail.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {detail.productdescriptions}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductDetails;
