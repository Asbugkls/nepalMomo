import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { MdDeleteSweep } from "react-icons/md";


function CartPage() {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <div>
      <div>
        {state.cartItem ? (
          <div className="flex"  >
            <div className="w-[900px]"  >
              {state.cartItem.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="   flex justify-evenly items-center m-5 h-50 rounded-2xl shadow-2xl shadow-black ">
                      <div>
                        <img className="h-36 rounded-2xl" src={item.image} alt="" />
                      </div>
                      <div className=" h-14 ">
                        <h1>{item.name}</h1>

                      </div>
                      <div className=" h-14">
                        <h1 className=" text-orange-600">  Rs. {item.caloriesPerServing}</h1>
                        <button><MdDeleteSweep  className="text-red-400 text-2xl"/>
                        </button>
                      </div>
              
                      <div className=" h-14 space-x-2">
                        <button className="bg-orange-300 rounded-4xl px-2.5">-</button>
                        <span>{item.qty}</span>
                        <button className="bg-orange-300 rounded-4xl px-2.5">+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="gap-y 3 mt-16 w-82 h-56 rounded-3xl flex flex-col justify-center items-center shadow-2xl shadow-gray-400">
              <h1 className="font-bold text-2xl">Order Summary</h1>
              <h1>Subtotal (0 items)</h1>
              <h1>Total</h1>
              <button className="bg-orange-300 p-2 text-white">Proceed to checkout</button>
            </div>
          </div>
        ) : (
          <div >Item Not Found On Cart</div>
        )}
      </div>
    </div>
  );
}

export default CartPage;