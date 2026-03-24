import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/Pricing/PricingOptions';
const pricingPromise = fetch('pricingData.json').then((res) => res.json());
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl flex place-self-center"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      {/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App
