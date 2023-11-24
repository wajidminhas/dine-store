import Image from 'next/image'
import HeroSection from './layout/HeroSection'
import PromotionCard from './layout/PromotionCard'
import ReactSlick from './component/ReactSlick'
import Jewellery from './Jewellery.tsx/Jewellery'
import Newsletter from './Jewellery.tsx/Newsletter'
import Footer from './footer/Footer'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PromotionCard />
      <ReactSlick />
      <Jewellery />
      <Newsletter />
      <Footer />
    </div>
  )
}
