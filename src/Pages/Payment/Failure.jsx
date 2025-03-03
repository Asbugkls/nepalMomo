import React from 'react'
import failure from '../assets/Image/failure.png'


function Failure() {
  return (
    <div>
      <div className="  shadow-2xl  mt-[50px]  shadow-black   rounded-2xl  p-2 w-96 m-auto  flex flex-col  justify-center  items-center">
        <img

        className="h-60  "
          src={failure}
          alt=""
        />
      </div>
    </div>
  );
}

export default Failure;