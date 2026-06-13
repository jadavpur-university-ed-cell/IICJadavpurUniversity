import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clubs = [
  { name: "ACM (JU ACM Student Chapter)", url: "https://acm-ju.vercel.app/" },
  { name: "AI Mantle Club JU", url: "#" },
  { name: "CodeClub (CodeClub JUSL)", url: "https://www.codeclubjusl.in/" },
  { name: "E-Cell Student Body (E-Cell, Jadavpur University)", url: "https://juecell.com/" },
  { name: "FinClub (Finance & Consulting Club, JU)", url: "https://finclubju.com/" },
  { name: "GDSC (GDSC JU)", url: "https://github.com/GDSC-Jadavpur-University/" },
  { name: "IEEE (IEEE Jadavpur University Student Body)", url: "https://www.ieee-jaduniv.in/" },
  { name: "IMechE (IMechE JU Student Chapter)", url: "https://in.linkedin.com/company/imeche-ju-student-chapter" },
  { name: "IoT Applications Club Jadavpur University (IOTA JU)", url: "https://in.linkedin.com/in/iota-ju-club-jadavpur-university-999249289" },
  { name: "ISHRAE (Student Chapter)", url: "https://ishare-ju.vercel.app/" },
  { name: "JUAC (Aerospace Club JU)", url: "https://strato-sooty.vercel.app/" },
  { name: "JUMSC (Motor Sport Club, Team XLR8)", url: "https://www.teamxlr8ju.com/" },
  { name: "JUMTC (Mechatronics Club)", url: "https://www.mechatronicsclubju.com/" },
  { name: "Jadavpur University Science Club (JUSC)", url: "#" }
];

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current || !track3Ref.current) return;
    
    const animateTrack = (track: HTMLDivElement, direction: 1 | -1, duration: number) => {
      const items = track.children;
      // Calculate total width of one set of items. Since we repeat the array 4 times, 
      // one full set is total items / 4. 
      // It's safer to just move it by the width of the exact repeated block.
      const originalLength = items.length / 4;
      let singleSetWidth = 0;
      for(let i=0; i<originalLength; i++) {
         singleSetWidth += (items[i] as HTMLElement).offsetWidth + 32; // gap-8 is 32px
      }

      if (direction === 1) {
          gsap.fromTo(track, 
            { x: -singleSetWidth },
            {
              x: 0,
              ease: "none",
              duration: duration,
              repeat: -1,
            }
          );
      } else {
          gsap.fromTo(track, 
            { x: 0 },
            {
              x: -singleSetWidth,
              ease: "none",
              duration: duration,
              repeat: -1,
            }
          );
      }
    };

    animateTrack(track1Ref.current, -1, 40);
    animateTrack(track2Ref.current, 1, 45);
    animateTrack(track3Ref.current, -1, 50);

    return () => {
      if (track1Ref.current) gsap.killTweensOf(track1Ref.current);
      if (track2Ref.current) gsap.killTweensOf(track2Ref.current);
      if (track3Ref.current) gsap.killTweensOf(track3Ref.current);
    };
  }, []);

  // Split clubs into 3 groups
  const group1 = clubs.slice(0, 5);
  const group2 = clubs.slice(5, 10);
  const group3 = clubs.slice(10);

  const renderTrack = (ref: React.RefObject<HTMLDivElement | null>, group: typeof clubs) => {
    const repeated = [...group, ...group, ...group, ...group]; 
    return (
      <div 
        ref={ref} 
        className="flex items-center gap-8 px-4 w-max mb-8 last:mb-0"
      >
        {repeated.map((club, index) => (
          <a
            key={index}
            href={club.url}
            target={club.url !== "#" ? "_blank" : undefined}
            rel={club.url !== "#" ? "noopener noreferrer" : undefined}
            className="text-2xl md:text-4xl font-medium text-soft-lime hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            {club.name}
          </a>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-midnight flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        minHeight: '60vh',
        padding: '120px 0',
      }}
    >
      <div className="w-full text-center mb-16 px-6 relative z-20">
        <h2 className="text-section text-soft-lime">
          Our Student Communities
        </h2>
      </div>

      <div className="w-full overflow-hidden relative z-10">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-midnight to-transparent z-20 pointer-events-none" />

        <div className="flex flex-col">
            {renderTrack(track1Ref, group1)}
            {renderTrack(track2Ref, group2)}
            {renderTrack(track3Ref, group3)}
        </div>
      </div>
    </section>
  );
}