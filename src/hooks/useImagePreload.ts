import { useState, useEffect } from 'react';

interface PreloadOptions {
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  onError?: (errors: string[]) => void;
  sequential?: boolean;
}

/**
 * Hook for preloading images
 * 
 * @param urls Array of image URLs to preload
 * @param options Configuration options
 * @returns Object containing loading state and progress
 */
export default function useImagePreload(
  urls: string[],
  options: PreloadOptions = {}
) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!urls.length) {
      setLoaded(true);
      setProgress(100);
      if (options.onComplete) options.onComplete();
      return;
    }

    let completedCount = 0;
    let errorUrls: string[] = [];
    const totalCount = urls.length;

    const updateProgress = () => {
      const newProgress = Math.round((completedCount / totalCount) * 100);
      setProgress(newProgress);
      
      if (options.onProgress) {
        options.onProgress(newProgress);
      }
      
      if (completedCount === totalCount) {
        setLoaded(true);
        if (options.onComplete) options.onComplete();
        
        if (errorUrls.length > 0 && options.onError) {
          options.onError(errorUrls);
        }
      }
    };

    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          completedCount++;
          updateProgress();
          resolve();
        };
        
        img.onerror = () => {
          completedCount++;
          errorUrls.push(url);
          updateProgress();
          resolve();
        };
        
        img.src = url;
      });
    };

    // Sequential loading (one after another)
    if (options.sequential) {
      const loadSequentially = async () => {
        for (const url of urls) {
          await loadImage(url);
        }
      };
      
      loadSequentially();
    } 
    // Parallel loading (all at once)
    else {
      urls.forEach(loadImage);
    }

    return () => {
      // Cleanup if needed
    };
  }, [urls, options.onProgress, options.onComplete, options.onError, options.sequential]);

  return { loaded, progress, errors };
}