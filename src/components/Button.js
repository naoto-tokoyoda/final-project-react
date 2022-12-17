import React from 'react'


function Button({className, onClick, children}) {
  const buttonStyles = 'px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 float-right';
  return (
    <button className={className ? '' : buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button