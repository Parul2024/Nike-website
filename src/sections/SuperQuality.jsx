
import Button from "../components/Button"

import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className=" flex gap-10 w-full max-container justify-between items-center max-lg:flex-col">
      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl
         capitalize  font-bold lg:max-w-lg ">
          We Provide You
          < span className="text-coral-red pl-2">Super </span>
          < span className="text-coral-red pr-2">Quality</span>
        Shoes
        </h2>

        <p className="info-text mt-4 mb-14 lg:max-w-lg">

         Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        < p className="mt-6 info-text lg:max-w-lg"> Our dedication to detail and excellence
           ensures your satisfaction
        </p>
        <div className="mt-11 ">
          <Button label='Veiw Details'/>

        </div>
      </div>
      <div className="flex flex-1 justify-center items-baseline-last">
        <img src={shoe8} alt='shoe8' height={522 } width={570}
        className=" object-contain"/>
      </div>
    </section>


  )
}

export default SuperQuality