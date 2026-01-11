import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between gap-20 
      max-lg:flex-col items-start">
        <div className=" flex flex-col items-start">
          <a href='/'>
            <img src={footerLogo}
              width={150}
              height={46} />
          </a>
          <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {
              socialMedia.map((icon) => (
                <div className='flex justify-center w-12 h-12  bg-white rounded-full'>
                  <img src={icon.src}
                    alt={icon.width}
                    width={24}
                    height={24} />
                </div>

              ))
            }
          </div>
        </div>
        <div className="flex flex-1 justify-baseline flex-wrap lg:gap-10 gap-20">
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrattext-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {
                    (section.links).map((link) => (
                      <li  key={link.name} className="mt-3 text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer ">
                        <a >{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>

            ))
          }

        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:items-center max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer">
<img src={copyrightSign} alt="copy right "
height={20} width={20} className="rounded-full m-0 "/>
<p>Copyright. All Right Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  )
}

export default Footer