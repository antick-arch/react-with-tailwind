import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/Pricing/PricingOptions';
import DaisyPricing from './components/DaisyPricing/DaisyPricing';
const pricingPromise = fetch('pricingData.json').then((res) => res.json());
function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <Suspense fallback={<span className="loading loading-infinity loading-xl flex place-self-center"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>
        </section>

        <section>
          <Suspense fallback={<span className="loading loading-infinity loading-xl flex place-self-center"></span>}>
            <DaisyPricing pricingPromise={pricingPromise}></DaisyPricing>
          </Suspense>
        </section>
      </main>
      {/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App
