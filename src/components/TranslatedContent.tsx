import { ReactNode } from 'react';

interface TranslatedContentProps {
  children: ReactNode;
  i18nKey?: string;
  ns?: string;
  values?: Record<string, any>;
  className?: string;
  dynamicContent?: boolean;
}

/**
 * A simplified component that just renders children
 * This replaces the i18n translation functionality with a direct render
 */
export default function TranslatedContent({
  children,
  className = '',
}: TranslatedContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Named export for the component
export { TranslatedContent };