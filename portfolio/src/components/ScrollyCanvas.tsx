'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ScrollyCanvasProps {
  imagePaths: string[];
}

export default function ScrollyCanvas({ imagePaths }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!imagePaths || imagePaths.length === 0) return;

    const loadImages = async () => {
      const promises = imagePaths.map((src) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      try {
        const images = await Promise.all(promises);
        setLoadedImages(images);
      } catch (error) {
        console.error("Failed to preload images", error);
      }
    };

    loadImages();
  }, [imagePaths]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const img = loadedImages[index];

    if (ctx && img) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Object-fit: cover logic
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  // Sync with scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (loadedImages.length === 0) return;
    
    // Map scroll (0-1) to frame index
    const totalFrames = loadedImages.length;
    // We want the sequence to finish before the very end if needed, but 0-1 is standard.
    const frameIndex = Math.min(
      Math.floor(latest * totalFrames),
      totalFrames - 1
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame if possible, or just wait for scroll
        if (loadedImages.length > 0) {
             const currentProgress = scrollYProgress.get();
             const totalFrames = loadedImages.length;
             const frameIndex = Math.min(
              Math.floor(currentProgress * totalFrames),
              totalFrames - 1
            );
            renderFrame(frameIndex);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener('resize', handleResize);
  }, [loadedImages, scrollYProgress]);

  // Initial Render once images load
  useEffect(() => {
    if (loadedImages.length > 0) {
        // Initial size set
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        }
        renderFrame(0);
    }
  }, [loadedImages]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
