import { headerLogo } from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
// const openHeader=()=>{

//    {
//     navLinks.map((item)=>(
//       <li key={item.label}>
//         <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
//          <div className='flex-col text-amber-100'> {item.label}</div> 
         
//         </a>
 
//       </li>
//     ))
//    }

// }

function Nav() {
  return (
    <header className='py-10 padding-x absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
        <img src={headerLogo} alt='logo' height={29} width={130}/>
        </a>
        <ul className='flex-l flex justify-center items-center gap-16 max-lg:hidden'>
   {
    navLinks.map((item)=>(
      <li key={item.label}>
        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
          {item.label}
        </a>
 
      </li>
    ))
   }
   
        </ul>
        <div className='hidden max-lg:block'>
     
 <img src={hamburger} alt='hamburger' width={25} height={25}  />
       

         
        </div>
      </nav>
    </header>
  )
}

export default Nav