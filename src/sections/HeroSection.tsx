export default function HeroSection() {
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
            Jadavpur University-IIC MoE ID: IC201811636  AISHE Code: U-0575
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

      {/* Right Column - Embedded Video */}
      <div className="flex items-center justify-center px-6 py-12 lg:py-0 order-1 lg:order-2">
        <div
          className="w-full max-w-[560px] aspect-video rounded-2xl overflow-hidden shadow-2xl relative z-10"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7njckqhKJwI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
