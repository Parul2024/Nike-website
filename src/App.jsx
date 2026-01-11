import {
  Hero,
  Popular,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Footer,
  CustomerReviews
} from "./sections/index.js"
import Nav from "./components/Nav"
import PopularProducts from "./sections/PopularProducts.jsx"
const App = () => (
  <main className="relative">
    <Nav/>

    <section className="xl:sm:pl-16 pl-8  wide:sm:pr-16 pr-8  sm:pb-24 pb-12">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>

    <section className="padding ">
      <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x padding w-full">
      <Subscribe/>
    </section>

    <section className="bg-black padding-x padding-t pb-8 ">
      <Footer/>
    </section>


  </main>
)
export default App