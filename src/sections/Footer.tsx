import VisitorCounterSection from './VisitorCounterSection';

export default function Footer() {
  return (
    <footer className="w-full bg-midnight" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-content mx-auto px-6 pt-20 pb-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-12">
          {/* Col 1 - Logo & Tagline */}
          <div>
            <a href="#" className="flex items-center gap-0.5 mb-4">
              <span className="text-xl font-bold text-pure-white tracking-tight">IIC, Jadavpur University</span>
            </a>
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Institution's Innovation Council (IIC), Jadavpur University.<br />
              Created and Maintained by <a href="https://juecell.com" className="text-soft-lime transition-colors hover:font-bold">JU E-Cell</a>.
            </p>
          </div>

          {/* Col 2 - Navigate */}
          <div>
            <p className="text-sm font-medium text-pure-white mb-4">Navigate</p>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Clubs', path: '/clubs' },
                { name: 'IIC', path: '/iic' },
                { name: 'E-Cell', path: '/ecell' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-sm transition-colors duration-200 hover:text-pure-white"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Integrations */}
          <div>
            <p className="text-sm font-medium text-pure-white mb-4">Contact</p>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              <li>
                <a href="mailto:iicju@jadavpuruniversity.in" className="hover:text-pure-white transition-colors">
                  iicju@jadavpuruniversity.in
                </a>
              </li>
              <li>
                <a href="mailto:ecell@jadavpuruniversity.in" className="hover:text-pure-white transition-colors">
                  ecell@jadavpuruniversity.in
                </a>
              </li>
              <li>
                <a href="tel:+918902561456" className="hover:text-pure-white transition-colors">
                  +91 8902 561 456
                </a>
              </li>
              <li>Kolkata, West Bengal</li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div>
            <VisitorCounterSection />
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>
            © {new Date().getFullYear()} <a href='https://www.jadavpuruniversity.in/' target='blank'>Jadavpur University</a>. All Rights Reserved.
          </p>

          {/* <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(255, 255, 255, 0.3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.3)')}
              >
                {item}
              </a>
            ))}
          </div> */}
          <div className="flex items-center gap-4">
            <a
              href={`https://translate.google.com/translate?sl=auto&tl=hi&u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              हिन्दी
            </a>

            <span className="text-white/20">|</span>

            <a
              href={`https://translate.google.com/translate?sl=auto&tl=bn&u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              বাংলা
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a href="https://in.linkedin.com/company/institution-s-innovation-council-jadavpur-university" className="transition-colors duration-200" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.facebook.com/iic.ju/" className="transition-colors duration-200" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="http://juadmission.jdvu.ac.in/jums_exam/" className="transition-colors duration-200" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
