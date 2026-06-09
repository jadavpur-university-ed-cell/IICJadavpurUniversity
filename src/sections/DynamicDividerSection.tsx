import { useEffect, useRef } from 'react';
import { PixelWave } from '../effects/PixelWave';

export default function DynamicDividerSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<PixelWave | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new PixelWave(canvasRef.current);
    engineRef.current = engine;
    engine.start();

    const handleScroll = () => {
      engine.updateScrollAmplitude(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      engine.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      engine.destroy();
    };
  }, []);

  return (
    <section className="w-full relative overflow-hidden" style={{ height: '200px' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Animated pixel wave transition"
        style={{ display: 'block' }}
      />
    </section>
  );
}
