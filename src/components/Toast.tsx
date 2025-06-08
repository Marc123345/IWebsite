import { Toaster } from 'sonner';

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      expand={false}
      richColors
      closeButton
      theme="light"
      toastOptions={{
        className: 'toast-custom',
        duration: 4000,
        style: {
          background: 'var(--toast-bg)',
          color: 'var(--toast-color)',
          border: '1px solid var(--toast-border)',
          borderRadius: '0.75rem',
          padding: '1rem',
          fontSize: '0.875rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
        success: {
          style: {
            backgroundColor: '#f0fdf4',
            borderColor: '#86efac',
            color: '#166534',
          },
          icon: '✓',
        },
        error: {
          style: {
            backgroundColor: '#fef2f2',
            borderColor: '#fca5a5',
            color: '#991b1b',
          },
          icon: '✕',
        },
        loading: {
          style: {
            backgroundColor: '#f8fafc',
            borderColor: '#e2e8f0',
            color: '#1e293b',
          },
          icon: '⟳',
        },
      }}
    />
  );
}