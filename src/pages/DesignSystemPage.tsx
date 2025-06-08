import SEO from '../components/SEO';
import DesignSystem from '../components/DesignSystem';

export default function DesignSystemPage() {
  return (
    <>
      <SEO 
        title="Design System - iLight"
        description="iLight design system and component library"
        canonical="/design-system"
      />
      <DesignSystem />
    </>
  );
}