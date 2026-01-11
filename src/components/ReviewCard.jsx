
import { star } from "../assets/icons"
const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
   <div className="flex justify-center flex-col items-center">
<img src={imgURL}
alt='customer'
className="rounded-full object-cover w-[120px] h-[120px]"/>
<p className="max-w-sm text-center info-text mt-6">{feedback}</p>
<div className="mt-3 flex justify-center items-center">
<img src={star} width={24} height={24}
className="mr-2 object-contain"/>

<p className="text-xl font-montserrat text-amber-700 font-bold">{rating}</p>
   </div>
   <h3 className="mt-1 font-palanquin font-bold text-center text-3xl ">
    {customerName}
   </h3>
   </div>
  )
}

export default ReviewCard