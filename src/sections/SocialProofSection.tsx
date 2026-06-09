export default function SocialProofSection() {
  const logos = [
    "Texans Children's",
    'SSM Health',
    'ANDREWS',
    'TEC',
    'USF Health',
    'Houston Methodist',
    'CHN',
  ];

  return (
    <section className="w-full bg-midnight py-10">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-medium tracking-wide select-none"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                filter: 'grayscale(100%) brightness(200%)',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
