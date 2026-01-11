import React from 'react'

function Button({label,iconURL,textColor,backgroundColor,borderColor,fullWidth}) {
  return (
   <button className={`flex outline-1 justify-center text-lg items-center rounded-full gap-2  px-7 py-4 font-montserrat leading-none
   ${backgroundColor 
    ? `${backgroundColor} ${textColor} ${borderColor}`
    :   'bg-coral-red  text-white  border-coral-red'}  ${fullWidth && 'w-full' }"}`}>
  {label}
  {iconURL &&
    <img src={iconURL} alt='arrow icon'
  className=' w-5 h-5  rounded-full ml-2 ' />
}

   </button>
  )
}

export default Button