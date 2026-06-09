import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  { text: 'AI that Speaks', colored: false },
  { text: "your practice's language.", colored: true },
  { text: 'Schedules with', colored: false },
  { text: 'surgical precision.', colored: true },
  { text: 'Supports every patient,', colored: false },
  { text: 'every hour of every day.', colored: true },
];

function animateLine(element: HTMLElement, isEven: boolean) {
  gsap.set(element, { autoAlpha: 1 });
  const span = element.querySelector('span');
  if (!span) return;

  gsap.from(span, {
    duration: 1.5,
    yPercent: isEven ? 100 : -100,
    rotationX: isEven ? -40 : 40,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const lineElements = sectionRef.current.querySelectorAll('.manifesto-line');
    lineElements.forEach((el, index) => {
      animateLine(el as HTMLElement, index % 2 === 0);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-midnight flex items-center justify-center"
      style={{ minHeight: '80vh', padding: '160px 24px' }}
    >
      <div className="max-w-[900px] w-full text-center">
        {lines.map((line, index) => (
          <h2
            key={index}
            className={`manifesto-line text-section ${
              line.colored ? 'text-soft-lime' : 'text-pure-white'
            }`}
          >
            <span>{line.text}</span>
          </h2>
        ))}
      </div>
    </section>
  );
}
