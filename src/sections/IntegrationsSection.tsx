import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function IntegrationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.section-animate');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="w-full bg-black py-section" data-section="contact">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 section-animate">
          <p
            className="text-xs font-medium tracking-[0.08em] uppercase mb-6 text-soft-lime"
          >
            GET IN TOUCH
          </p>
          <h2 className="text-section text-soft-lime">
            Visit &amp; Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="section-animate bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12 shadow-card flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-pure-white mb-8">INNOVATION AND STARTUP</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User className="w-6 h-6 text-soft-lime shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-soft-lime text-lg">Shri Samayan Mazumder</h4>
                  <p className="text-white/60">Project Fellow cum Coordinator IIC, JU</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-soft-lime shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-pure-white text-lg">Address</h4>
                  <p className="text-white/60">
                    Technology Bhawan 7th floor (Main Campus)<br />
                    Jadavpur University, Kolkata-700032
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-soft-lime shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-pure-white text-lg">Mobile</h4>
                  <p className="text-white/60">8902561456 || 8697449219</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-soft-lime shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-pure-white text-lg">Email</h4>
                  <ul className="text-white/60 space-y-1">
                    <li>IIC: <a href="mailto:iicju@jadavpuruniversity.in" className="text-soft-lime transition-colors hover:font-bold">iicju@jadavpuruniversity.in</a></li>
                    <li>ECell: <a href="mailto:ecell@jadavpuruniversity.in" className="text-soft-lime transition-colors hover:font-bold">ecell@jadavpuruniversity.in</a></li>
                    <li>CAST: <a href="mailto:cast.ju@jadavpuruniversity.in" className="text-soft-lime transition-colors hover:font-bold">cast.ju@jadavpuruniversity.in</a></li>
                    <li>IPR: <a href="mailto:iprcellju@jadavpuruniversity.in" className="text-soft-lime transition-colors hover:font-bold">iprcellju@jadavpuruniversity.in</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="section-animate w-full h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-border-light shadow-card relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d230.38500959058598!2d88.37071621710048!3d22.498173592802853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1781380931850!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jadavpur University Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
