import React, { useState } from 'react'

function TextField({label, inputProps, onChange, value}) {

  


  return (
    <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
            {label}
        </label>
        <input 
            type="text"
            className="border-2 border-[#E4E7EB]  text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            {...inputProps}
            onChange={onChange}
            value={value}
        />
        
    </div>
  )
}

export default TextField