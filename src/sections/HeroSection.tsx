import { useEffect, useRef, useState } from 'react';
import { WaveformEngine } from '../effects/WaveformEngine';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<WaveformEngine | null>(null);
  const [waitTime, setWaitTime] = useState('00:00');

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new WaveformEngine(canvasRef.current);
    engine.resize();
    engine.start();
    engineRef.current = engine;

    const handleResize = () => engine.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.destroy();
    };
  }, []);

  // Wait time ticker
  useEffect(() => {
    let seconds = 0;
    const interval = setInterval(() => {
      seconds = (seconds + 1) % 3;
      setWaitTime(`00:0${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-midnight grid grid-cols-1 lg:grid-cols-2 relative"
      style={{ minHeight: '700px' }}
    >
      {/* Vertical divider */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border-dark" />

      {/* Left Column */}
      <div className="flex items-center justify-start px-6 md:px-12 lg:px-16 py-24 lg:py-0 order-2 lg:order-1">
        <div className="max-w-[540px]">
          {/* Label */}
          <p className="font-mono text-xs tracking-widest mb-6 uppercase" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
            Jadavpur University
          </p>

          {/* Headline */}
          <h1 className="text-hero text-pure-white mb-6">
            Innovation. Enterprise. <span className="text-soft-lime">Impact.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            For over a century, Jadavpur University has served as a beacon of intellectual excellence, cultivating innovators, entrepreneurs, and industry leaders who contribute meaningfully to national development.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#ecosystem"
              className="px-8 py-3.5 rounded-full text-base font-medium text-pure-white border transition-all duration-200 hover:border-soft-lime"
              style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              Explore Ecosystem
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full text-base font-medium bg-soft-lime text-midnight hover:brightness-110 transition-all duration-200"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Product Demo Card */}
      <div className="flex items-center justify-center px-6 py-12 lg:py-0 order-1 lg:order-2">
        <div
          className="w-full max-w-[420px] rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: '#1A1A1A',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            height: '520px',
          }}
        >
          {/* Status Bar */}
          <div
            className="h-12 flex items-center justify-between px-5"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-dot inline-block" />
              <span className="font-mono text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Live AI Agent
              </span>
            </div>
            <button
              className="text-xs font-medium px-4 py-1 rounded-md"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              Call
            </button>
          </div>

          {/* Audio Visualizer */}
          <div className="flex-1 relative" style={{ minHeight: '200px' }}>
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
              style={{ display: 'block' }}
            />
          </div>

          {/* Info Panel */}
          <div className="p-6 flex flex-col gap-4">
            {/* Glass Card */}
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(42, 42, 46, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-medium text-pure-white">JU Ecosystem</span>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(0, 85, 255, 0.2)',
                    color: '#4488FF',
                  }}
                >
                  Active
                </span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Idea → Research → Startup → Impact
              </p>
            </div>

            {/* Data Chips */}
            <div className="flex gap-2">
              <div
                className="flex-1 rounded-lg p-3 text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <p className="font-mono text-xs mb-1" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                  Active Time
                </p>
                <p className="font-mono text-lg text-pure-white">{waitTime}</p>
              </div>
              <div
                className="flex-1 rounded-lg p-3 text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <p className="font-mono text-xs mb-1" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                  Startups
                </p>
                <p className="font-mono text-lg text-pure-white">50+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
