import HeroSection from '../sections/HeroSection';
import SocialProofSection from '../sections/SocialProofSection';
import ImpactSection from '../sections/ImpactSection';
import ManifestoSection from '../sections/ManifestoSection';
import DynamicDividerSection from '../sections/DynamicDividerSection';
import ProductsSection from '../sections/ProductsSection';
import SpecialtiesSection from '../sections/SpecialtiesSection';
import IntegrationsSection from '../sections/IntegrationsSection';
import SecuritySection from '../sections/SecuritySection';
import ClosingCTASection from '../sections/ClosingCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <ImpactSection />
      <ManifestoSection />
      <DynamicDividerSection />
      <ProductsSection />
      <SpecialtiesSection />
      <IntegrationsSection />
      <SecuritySection />
      <ClosingCTASection />
    </main>
  );
}
