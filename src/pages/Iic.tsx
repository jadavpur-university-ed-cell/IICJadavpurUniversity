
export default function Iic() {
  return (
    <main className="min-h-screen bg-midnight text-pure-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.08em] uppercase mb-4" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
          OUR INITIATIVES
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <img src="/assets/iic.jpg" alt="IIC Logo" className="w-24 h-24 object-cover rounded-xl" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{`Institution's Innovation Council (IIC)`}</h1>
        </div>

        <div className="prose prose-invert prose-lg space-y-6 mb-12">
          <p className='text-gray-300 leading-relaxed'>
            Ministry of Human Resource Development, Government of India has established an 'Innovation Cell' with a purpose of systematically fostering the culture of Innovation in all Higher Education Institutions (HEIs) across the country. The Innovation Cell has envisioned encouraging creation of 'Institution's Innovation Council (IICs)' across selected HEIs. A network of these IICs was established to promote innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campuses.
          </p>

          <div>
            <h2 className="text-2xl text-soft-lime font-semibold mb-4">IIC MoE ID: IC201811636 || AISHE Code: U-0575</h2>
          </div>

          <h3 className="text-xl font-semibold">Major Focus of IIC</h3>
          <p className='text-gray-300 leading-relaxed'>
            To create a vibrant local innovation ecosystem through Start-up supporting Mechanism in HEIs. We prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework, establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas, and develop better Cognitive Ability for Technology Students.
          </p>

          <h3 className="text-xl font-semibold">Functions of IIC</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion.</li>
            <li>Identify and reward innovations and share success stories.</li>
            <li>Organize periodic workshops, seminars, interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.</li>
            <li>Network with peers and national entrepreneurship development organizations.</li>
            <li>Create an Institution's Innovation portal to highlight innovative projects carried out by institution's faculty and students.</li>
            <li>Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.</li>
          </ul>

          <h3 className="text-xl font-semibold">IIC JU Seed Fund Support</h3>
          <p className='text-gray-300 leading-relaxed mb-2'>
            The IIC provides annual Seed Grant Support to innovative projects. For detailed information, please see the document below.
          </p>
          <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/IIC-Seed-Grant.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-soft-lime hover:underline mb-6">
            View Seed Grant Support Details
          </a>

          <h3 className="text-xl font-semibold">List of Members</h3>
          <p className='text-gray-300 leading-relaxed mb-2'>
            Our council comprises dedicated members supporting the ecosystem.
          </p>
          <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/Members-List-IIC-8-September-2025-31-August-2026.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-soft-lime hover:underline mb-6">
            View Members List
          </a>

          <h3 className="text-xl font-semibold">Ranking Certificates</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Our Institution's Innovation Council has been recognized and rated for its outstanding contribution to the innovation ecosystem. We are proud of our achievements and continue to strive for excellence.
          </p>
          <div className="flex flex-col gap-3">
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/RatingCertificate_2023-24.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Rating Certificate 2023 - 24</a>
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/RatingCertificate_2022-23.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Rating Certificate 2022 - 23</a>
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/RatingCertificate_2021-22.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Rating Certificate 2021 - 22</a>
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/RatingCertificate_2020-21.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Rating Certificate 2020 - 21</a>
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/RatingCertificate-2019-20.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Rating Certificate 2019 - 20</a>
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/RatingCertificate-2018-19.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Rating Certificate 2018 - 19</a>
            <a href="https://juinnovationstartup.jdvu.ac.in/resource/doc/rank/IICEstablismentCertificate.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">IIC Establishment Certificate</a>
          </div>
        </div>

        <div className="flex gap-4">
          <a href="mailto:iicju@jadavpuruniversity.in" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">
            Contact IIC
          </a>
        </div>
      </div>
    </main>
  );
}
