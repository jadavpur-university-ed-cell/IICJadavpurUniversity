export default function Clubs() {
  const clubs = [
    {
      name: "ACM (JU ACM Student Chapter)",
      url: "https://acm-ju.vercel.app/"
    },
    {
      name: "AI Mantle Club JU",
      url: "#"
    },
    {
      name: "CodeClub (CodeClub JUSL)",
      url: "https://www.codeclubjusl.in/"
    },
    {
      name: "E-Cell Student Body (E-Cell, Jadavpur University)",
      url: "https://juecell.com/"
    },
    {
      name: "FinClub (Finance & Consulting Club, JU)",
      url: "https://finclubju.com/"
    },
    {
      name: "GDSC (GDSC JU)",
      url: "https://github.com/GDSC-Jadavpur-University/"
    },
    {
      name: "IEEE (IEEE Jadavpur University Student Body)",
      url: "https://www.ieee-jaduniv.in/"
    },
    {
      name: "IMechE (IMechE JU Student Chapter)",
      url: "https://in.linkedin.com/company/imeche-ju-student-chapter"
    },
    {
      name: "IoT Applications Club Jadavpur University (IOTA JU)",
      url: "https://in.linkedin.com/in/iota-ju-club-jadavpur-university-999249289"
    },
    {
      name: "ISHRAE (Student Chapter)",
      url: "https://ishare-ju.vercel.app/"
    },
    {
      name: "JUAC (Aerospace Club JU)",
      url: "https://strato-sooty.vercel.app/"
    },
    {
      name: "JUMSC (Motor Sport Club, Team XLR8)",
      url: "https://www.teamxlr8ju.com/"
    },
    {
      name: "JUMTC (Mechatronics Club)",
      url: "https://www.mechatronicsclubju.com/"
    },
    {
      name: "Jadavpur University Science Club (JUSC)",
      url: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-midnight text-pure-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.08em] uppercase mb-4" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
          STUDENT COMMUNITY
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Clubs & Societies</h1>
        <p className="text-lg leading-relaxed mb-12 text-gray-300">
          Jadavpur University hosts a vibrant community of student-driven technical clubs, professional society chapters, and innovation groups that actively contribute to the university's ecosystem. These clubs provide interdisciplinary exposure, industry collaborations, and global competition opportunities in robotics, AI, finance, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubs.map((club, i) => (
            <a
              key={i}
              href={club.url}
              target={club.url !== "#" ? "_blank" : undefined}
              rel={club.url !== "#" ? "noopener noreferrer" : undefined}
              className="bg-pure-white/5 border border-white/10 rounded-xl p-6 hover:bg-pure-white/10 transition-colors"
            >
              <h3 className="font-medium text-white">{club.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
