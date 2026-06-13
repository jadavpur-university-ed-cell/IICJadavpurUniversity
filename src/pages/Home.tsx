import HeroSection from '../sections/HeroSection';
import ImpactSection from '../sections/ImpactSection';
import ManifestoSection from '../sections/ManifestoSection';
import DynamicDividerSection from '../sections/DynamicDividerSection';
import ProductsSection from '../sections/ProductsSection';
import IntegrationsSection from '../sections/IntegrationsSection';
import ClosingCTASection from '../sections/ClosingCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactSection />
      <ManifestoSection />
      <DynamicDividerSection />
      <ProductsSection />
      <IntegrationsSection />
      <ClosingCTASection />
    </main>
  );
}
