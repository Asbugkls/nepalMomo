import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocation } from 'react-router-dom'
import CryptoJS from 'crypto-js'

function Payment () {
  const data = useLocation()
  let totalAmount = data.state.totalAmount
  let totalItem = data.state.totalItem

  let transaction_uuid = uuidv4()
  // console.log(transaction_uuid);

  let Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`

  var hash = CryptoJS.HmacSHA256(Message, '8gBm/:&EnhH.1/q')
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash)

  console.log(hashInBase64)
  //document.write(hashInBase64);

  // console.log(data.state.totalAmount);
  // console.log(data.state.totalItem);


  return (
    <div className="flex justify-center mt-[50px]">
      <form

      className="flex flex-col justify-center items-center p-4 shadow-2xl shadow-gray-600 h-62 w-62 rounded-2xl space-y-10"
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input
          type="hidden"
          id="amount"
          name="amount"
          value={totalAmount}
          required
        />

        <input
          type="hidden"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />

        <input
          type="hidden"
          id="total_amount"
          name="total_amount"
          value={totalAmount}
          required
        />

        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uuid}
          required
        />

        <input
          type="hidden"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />

        <input
          type="hidden"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />

        <input
          type="hidden"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />

        <input
          type="hidden"
          id="success_url"
          name="success_url"
          value="https://nepal-momo-iota.vercel.app/success"
          required
        />

        <input
          type="hidden"
          id="failure_url"
          name="failure_url"
          value="https://nepal-momo-iota.vercel.app/failure"
          required
        />

        <input
          type="hidden"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />

        <input
          type="hidden"
          id="signature"
          name="signature"
          value={hashInBase64}
          required
        />

        <div>
          <h1>Total Item:{totalItem}</h1>
          <h1>Total Amount Rs:{totalAmount}</h1>
        </div>

        <input value="Submit" type="submit" className='color-white bg-amber-800 rounded-2xl p-2 ' />
      </form>
    </div>
  );
}

export default Payment;
