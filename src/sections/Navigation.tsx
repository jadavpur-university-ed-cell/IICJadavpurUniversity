import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${scrolled
        ? 'bg-midnight/90 backdrop-blur-xl'
        : 'bg-transparent'
        }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent' }}
    >
      <div className="w-full max-w-content mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 select-none">
          <img className='w-10' src="/assets/iic_logo.png" alt="IIC Logo" />
          <span className="hidden xl:block text-xl font-bold text-pure-white tracking-tight">
            INSTITUTION'S INNOVATION COUNCIL
          </span>        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#about" className="text-sm font-medium text-white/60 hover:text-pure-white transition-colors duration-200">
            About
          </Link>
          <Link to="/iic" className="text-sm font-medium text-white/60 hover:text-pure-white transition-colors duration-200">
            IIC
          </Link>
          <a href="https://juinnovationstartup.jdvu.ac.in/CAST.htm" className="text-sm font-medium text-white/60 hover:text-pure-white transition-colors duration-200">
            CAST
          </a>
          <Link to="/ecell" className="text-sm font-medium text-white/60 hover:text-pure-white transition-colors duration-200">
            E-Cell
          </Link>

          {/* Ecosystem Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-white/60 hover:text-pure-white transition-colors duration-200 flex items-center gap-1 cursor-default py-2">
              Ecosystem
              <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full right-0 mt-0 w-48 bg-midnight border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <div className="flex flex-col py-1">
                {[
                  { name: 'Startup Policy', path: '/startup' },
                  { name: 'IPR Cell', path: '/ipr' },
                  { name: 'Tinkering Lab', path: '/tinkering' },
                  { name: 'Clubs & Societies', path: '/clubs' },
                  { name: 'Events', path: '/events' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="px-4 py-2 text-sm text-white/60 hover:text-pure-white hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="text-sm font-medium text-white/60 hover:text-pure-white transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="mailto:iicju@jadavpuruniversity.in"
            className="text-sm font-medium bg-soft-lime text-midnight px-5 py-2 rounded-full hover:brightness-110 transition-all duration-200"
          >
            Reach Out
          </a>
        </div>
      </div>
    </nav>
  );
}
