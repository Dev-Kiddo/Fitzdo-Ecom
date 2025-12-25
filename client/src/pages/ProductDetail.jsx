import React, { useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import Accordion from "../components/Accordian";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

// const product = {
//   _id: "694a99ddedfaf45e7fc84826",
//   brand: "FITZDO",
//   title: "Home Electric Fitness Treadmill 5HP Body Strong Folding",
//   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, totam…",
//   category: "fitness",
//   price: 19999,
//   mrp: 24999,
//   discountPercentage: 20,
//   rating: 4.2,
//   totalReviews: 128,
//   stock: 22,
//   isActive: true,
//   createdAt: "2025-12-23T13:32:13.340+00:00",
//   updatedAt: "2025-12-23T13:32:13.340+00:00",
//   __v: 0,
// };

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(
    function () {
      dispatch(fetchProduct({ id }));
    },
    [dispatch, id]
  );

  return (
    <>
      {loading && <Loading />}

      {!loading && product && (
        <div className="w-full grid grid-cols-1 gap-10 items-stretch md:grid-cols-[600px_1fr] mt-2">
          <div className="w-full">
            <ProductSlider />

            <div className="mt-10 px-5 w-3/4">
              <Accordion title="What's in the Box?" isOpen={true}>
                <ul className="ms-5">
                  <li className="list-disc">Toolkil</li>
                  <li className="list-disc">Warrenty card</li>
                  <li className="list-disc">User manual</li>
                </ul>
              </Accordion>

              <Accordion title="Product Specification" isOpen={false}>
                <div className="w-94 flex justify-between items-center">
                  <span className="text-gray-dark">Brand</span> <span className="font-semibold">Fitzdo</span>
                </div>

                <div className="w-94 flex justify-between items-center">
                  <span className="text-gray-dark">Color</span> <span className="font-semibold"> Ashy Slate</span>
                </div>

                <div className="w-94 flex justify-between items-center">
                  <span className="text-gray-dark">Speen</span> <span className="font-semibold">1-14 Km/hr</span>
                </div>

                <div className="w-94 flex justify-between items-center">
                  <span className="text-gray-dark">Lorem ipsum </span> <span className="font-semibold">dolor sit amet consectetur</span>
                </div>

                <div className="w-94 flex justify-between items-center">
                  <span className="text-gray-dark">Lorem ipsum </span> <span className="font-semibold">dolor sit amet consectetur</span>
                </div>
              </Accordion>
            </div>
          </div>

          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col gap-2 shadow-md p-5 rounded-lg">
              <h1 className="text-sm font-light">{product?.brand}</h1>
              <h1 className="text-xl font-semibold lg:text-md capitalize">{product?.title}</h1>

              <div className="flex justify-between items-center space-x-1 mt-2 rounded">
                <span className="text-xs font-regular flex items-center gap-0.5">
                  <img src="/star.svg" alt="StarIcon" className="w-4 h-4" />
                  <img src="/star.svg" alt="StarIcon" className="w-4 h-4" />
                  <img src="/star.svg" alt="StarIcon" className="w-4 h-4" />
                  <img src="/star.svg" alt="StarIcon" className="w-4 h-4" />
                  <img src="/star.svg" alt="StarIcon" className="w-4 h-4" />
                  {product?.rating}
                  <span className="text-xs group-hover:underline hover:text-blue">({product?.totalReviews})</span>
                </span>
              </div>

              <div className="mt-1">
                <span className="text-sm font-semibold">₹{product?.price}</span> <span className="line-through text-sm font-light text-gray-medium">M.R.P: ₹{product?.mrp}</span>
                <span className="text-white text-xs bg-blue px-2 py-1 ml-2 font-regular rounded-full">-{product?.discountPercentage}%</span>
              </div>

              <hr className="text-gray-light" />

              <div className="mb-2">
                <p className="font-medium text-sm mb-2">Color: Ashy Slate</p>
                <div className="flex gap-2">
                  {["Ashy Slate", "Midnight Black"].map((color) => (
                    <button key={color} className="border px-3 py-1 text-xs hover:bg-gray-light duration-100">
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="text-gray-light" />

              <div className="mb-2">
                <p className="font-medium text-sm mb-2">Model: Ashy Slate</p>
                <div className="flex gap-2">
                  {["Ashy Slate", "Midnight Black"].map((color) => (
                    <button key={color} className="border px-3 py-1 text-xs hover:bg-gray-light duration-100">
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="text-gray-light" />

              <div className="mb-2">
                <p className="font-medium text-sm mb-2">Size</p>
                <div className="flex gap-2 flex-wrap">
                  {["S", "M", "L", "XL", "2XL"].map((size) => (
                    <button key={size} className="border w-10 h-10 text-xs hover:border-black">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <button className="flex-1 bg-transparent text-black border py-3">Add to Cart</button>
                <button className="flex-1 bg-black text-white py-3 ">Buy Now</button>
              </div>

              <div className="mt-4">
                <p className="font-medium text-sm mb-2">Please enter pincode to check delivery time</p>
                <div className="flex">
                  <input type="text" placeholder="Enter PIN code" className="border px-3 py-2 flex-1" />
                  <button className="bg-black text-white px-4">Check</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <ProductsNotFound message={error} />}
    </>
  );
};

export default ProductDetail;
