import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ProductDescription() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const getSingleData = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/recipes/${id}`);
      response = await response.json();
      // console.log(response);
      setProduct(response);
      setIngredients(response.ingredients);
      setInstructions(response.instructions);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleData();
  }, [id]);
  return (
    <div>
      {product ? (
        <div>
          <h1 className="text-[40px] underline flex justify-center mt-[40px] text-red-500">
            {product.name}
          </h1>
          <div className="mt-[30px] flex justify-center">
            <div className="mr-14">
              <img
                src={product.image}
                alt=""
                className="h-[400px] rounded-[20px] border border-gray-400 shadow-2xl shadow-gray-600"
              />
            </div>
            <div className="space-y-2 flex flex-col justify-center">
              <h1 className="text-[30px] font-bold">{product.name}</h1>
              <p className="text-[20px]">Cuisine: {product.cuisine}</p>
              <p className="text-[20px] flex gap-2">
                Rating: {product.rating}
                <FaStar className="mt-[5px] text-amber-500" />
              </p>
              <p className="text-[25px] text-red-500">
                Rs. {product.caloriesPerServing}
              </p>
              <div>
                <button
                  onClick={() => {
                    navigate("/payment", {
                      state: {
                        totalAmount: product.caloriesPerServing,
                        totalItem: 1,
                      },
                    });
                  }}
                  className="bg-sky-600   p-3 m-2 text-white hover:bg-sky-700 rounded-[6px]"
                >
                  Buy Now{" "}
                </button>

                <button
                  onClick={() => {
                    dispatch({ type: "AddToCart", payload: product });
                  }}
                  className="  bg-orange-600 p-3  m-2  text-white hover:bg-amber-700 rounded-[6px]"
                >
                  Add To Cart{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <div className="flex justify-center gap-52 mt-[60px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Ingredients:</h1>
              <div>
                {ingredients.length > 0 && (
                  <div>
                    {ingredients.map((item, index) => {
                      return (
                        <div key={index}>
                          <li className="text-[20px]">{item}</li>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Instructions:</h1>
              <div>
                {instructions.length > 0 && (
                  <div className="w-[600px]">
                    {instructions.map((item, index) => {
                      return (
                        <div key={index}>
                          <li className="text-[20px]">{item}</li>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDescription;