export default function Clubs() {
  const clubs = [
    "JUMSC (Motor Sport Club, Team XLR8)",
    "ISHRAE (Student Chapter)",
    "JUAC (Aerospace Club JU)",
    "IEEE (IEEE Jadavpur University Official)",
    "FinClub (Finance & Consulting Club, JU)",
    "E-Cell Student Body (E-Cell, Jadavpur University)",
    "JUMTC (Mechatronics Club)",
    "ACM (JU ACM Student Chapter)",
    "CodeClub (CodeClub JU)",
    "GDSC (GDSC JU)",
    "IMechE (IMechE JU Student Chapter)",
    "AI Mantle Club JU",
    "Jadavpur University Science Club (JUSC)",
    "IoT Applications Club Jadavpur University (IOTA JU)"
  ];

  return (
    <main className="min-h-screen bg-midnight text-pure-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.08em] uppercase mb-4" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
          STUDENT COMMUNITY
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Clubs & Societies</h1>
        <p className="text-lg leading-relaxed mb-12 text-gray-300">
          Jadavpur University hosts a vibrant community of student-driven technical clubs, professional society chapters, and innovation groups that actively contribute to the university's ecosystem.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubs.map((club, i) => (
            <div key={i} className="bg-pure-white/5 border border-white/10 rounded-xl p-6 hover:bg-pure-white/10 transition-colors">
              <h3 className="font-medium text-white">{club}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
