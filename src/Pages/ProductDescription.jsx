import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const getSingleData = async () => {
    try {
      let response = await fetch(`https:dummyjson.com/recipes/${id}`);
      response = await response.json();
      console.log(response);
      setProduct(response);
      setIngredients(response.ingredients);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleData();
  }, [id]);
  return (
    <div>
      Product Description
      {product ? (
        <div>
          <div className="flex  border-2 border-red-700  justify-center          ">
            <div className="border-2  mr-16 border-red-500">
              <img className="h-72" src={product.image} alt="" />
            </div>
            <div className="border-2  flex  justify-around p-5  flex-col items-center  border-green-500 ">
              <h1 className="text-2xl">{product.name}</h1>
              <p>{product.rating}</p>
              Rs.{product.caloriesPerServing}
              <div>
                <button>-</button>
                <span>{12}</span>
                <button>+</button>
              </div>
              <div>
                <button className="bg-sky-600   p-3 m-2 text-white">
                  Buy Now{" "}
                </button>
                <button className="  bg-orange-600 p-3  m-2  text-white">
                  Add To Cart{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <div className="flex gap-5 justify-center"  >
            <div className="border-2 border-amber-500">
              <h1 className="text-3xl">Ingredients</h1>
              <div>
                {ingredients.length > 0 && (
                  <div className="border-2 border-red-600  w-[400px]  flex  flex-wrap  justify-around ">
                    {ingredients.map((item, index) => {
                      return <div key={index}>{item}</div>;
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="border-2 border-amber-500">
              <h1 className="text-3xl">Ingredients</h1>
              <div>
                {ingredients.length > 0 && (
                  <div className="border-2 border-red-600  w-[400px]  flex  flex-wrap  justify-around ">
                    {ingredients.map((item, index) => {
                      return <div key={index}>{item}</div>;
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
