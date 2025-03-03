import { useContext } from 'react'
import { CartContext } from '../Context/CartProvider'
import { FaSquarePlus } from 'react-icons/fa6'
import { FaMinusSquare } from 'react-icons/fa'
import empty from '../assets/Image/empty.png'
import { NavLink, useNavigate } from 'react-router-dom'

function CartPage () {
  const navigate = useNavigate()

  const { state, dispatch } = useContext(CartContext)
  // console.log(state);

  const totalAmount = state.cartItem.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing
  }, 0)

  const totalItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty
  }, 0)

  // console.log(totalAmount);

  return (
    <div>
      <div>
        {state.cartItem.length > 0 ? (
          <div className='flex'>
            <div className='w-[900px] '>
              {state.cartItem.map(item => {
                return (
                  <div key={item.id}>
                    <div className='   flex justify-evenly items-center m-5 h-56 rounded-2xl shadow-2xl shadow-black '>
                      <div>
                        <img
                          className='h-40 rounded-2xl'
                          src={item.image}
                          alt=''
                        />
                      </div>
                      <div className=' h-14 '>
                        <h1 className='text-[30px]'>{item.name}</h1>
                      </div>

                      <div className=' h-14 space-y-2'>
                        <h1 className=' text-red-500 text-[30px]'>
                          {' '}
                          Rs. {item.caloriesPerServing}
                        </h1>

                        <button
                          onClick={() => {
                            dispatch({
                              type: 'RemoveItem',
                              payload: { id: item.id }
                            })
                          }}
                          className='p-2 bg-orange-600 rounded-[6px] hover:bg-orange-800 text-white'
                        >
                          Delete
                        </button>
                      </div>

                      <div className=' h-14 space-x-2 flex justify-center items-center'>
                        <button
                          onClick={() => {
                            dispatch({
                              type: 'Decrement',
                              payload: { id: item.id }
                            })
                          }}
                          className='hover:text-gray-700'
                        >
                          <FaMinusSquare size={30} />
                        </button>
                        <span className='text-[30px]'>{item.qty}</span>

                        <button
                          onClick={() => {
                            dispatch({
                              type: 'Increment',
                              payload: { id: item.id }
                            })
                          }}
                          className='hover:text-gray-700'
                        >
                          <FaSquarePlus size={30} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className=' rounded-2xl w-96 m-5 shadow-2xl shadow-gray-400 h-72 flex flex-col justify-center items-center gap-y-4 border border-gray-500'>
              <h1 className='text-3xl font-bold'>Order Summery</h1>
              <h1 className='text-[20px]'>Total: {totalAmount}</h1>

              <button
                onClick={() => {
                  navigate('/payment', {
                    state: { totalAmount: totalAmount, totalItem: totalItem }
                  })
                }}
                className='bg-black p-3 text-white rounded-[5px] hover:bg-gray-800'
              >
                Procced to checkout({totalItem})
              </button>

              <button
                onClick={() => {
                  dispatch({ type: 'ClearCart' })
                }}
                className='bg-orange-600 p-3 text-white rounded-[5px] hover:bg-orange-800'
              >
                Empty Cart
              </button>
            </div>
          </div>
        ) : (
          <div className='w-96 h-60 m-auto mt-16 flex flex-col justify-center items-center'>
            <img src={empty} alt='' className='w-[400px] ' />
            <p className='font-mono'>
              Item Not Found On Cart
              <NavLink to='/menu' className='underline text-red-500'>
              Shop Now{' '}
              </NavLink>
            </p>{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
